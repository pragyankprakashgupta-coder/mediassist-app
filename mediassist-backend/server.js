import express from 'express';
import cors from 'cors';
import crypto from 'crypto';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'mediassist-dev-secret';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const frontendDist = path.resolve(__dirname, '../mediassist-app/dist');

app.use(cors());
app.use(express.json());

// In-memory stores (replace with Redis/PostgreSQL/MongoDB in production)
const otpStore = new Map(); // phone -> { code, expiresAt }
const sessions = new Map(); // token -> phone
const userRecords = new Map(); // phone -> { phone, medicines, logs, familyPhone, updatedAt }

function normalizePhone(raw) {
  return String(raw || '').replace(/\D/g, '').slice(-10);
}

function createToken(phone) {
  const token = crypto.randomBytes(24).toString('hex');
  sessions.set(token, { phone, issuedAt: Date.now() });
  return token;
}

function requireAuth(req, res, next) {
  const authHeader = req.headers.authorization || '';
  const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7).trim() : '';
  const session = sessions.get(token);
  if (!session) {
    return res.status(401).json({ message: 'Unauthorized. Kripya OTP se login karein.' });
  }
  req.userPhone = session.phone;
  next();
}

// POST /api/auth/send-otp -> Generates 6-digit OTP for 10-digit Indian mobile number
app.post('/api/auth/send-otp', (req, res) => {
  const phone = normalizePhone(req.body?.phone);
  if (!/^\d{10}$/.test(phone)) {
    return res.status(400).json({ message: 'Valid 10-digit mobile number zaroori hai.' });
  }

  const code = String(Math.floor(100000 + Math.random() * 900000));
  const expiresAt = Date.now() + 5 * 60 * 1000; // 5 minutes
  otpStore.set(phone, { code, expiresAt });

  // Integrate SMS gateway (Fast2SMS / Twilio / MSG91) here in production
  console.log(`[MEDIASSIST OTP] +91 ${phone} => ${code}`);

  return res.json({
    ok: true,
    message: 'OTP bhej diya gaya hai.',
    demoOtp: code,
  });
});

// POST /api/auth/verify-otp -> Verifies OTP and returns session token + saved user record
app.post('/api/auth/verify-otp', (req, res) => {
  const phone = normalizePhone(req.body?.phone);
  const otp = String(req.body?.otp || '').trim();

  if (!/^\d{10}$/.test(phone) || !otp) {
    return res.status(400).json({ message: 'Phone number aur OTP dono zaroori hain.' });
  }

  const entry = otpStore.get(phone);
  if (!entry || Date.now() > entry.expiresAt) {
    return res.status(400).json({ message: 'OTP expire ho gaya ya bheja nahi gaya.' });
  }

  if (entry.code !== otp) {
    return res.status(400).json({ message: 'Galat OTP. Dobara koshish karein.' });
  }

  otpStore.delete(phone);
  const token = createToken(phone);

  if (!userRecords.has(phone)) {
    userRecords.set(phone, {
      phone,
      medicines: [],
      logs: [],
      familyPhone: '8756622554',
      updatedAt: new Date().toISOString(),
    });
  }

  return res.json({
    ok: true,
    token,
    phone,
    record: userRecords.get(phone),
  });
});

// GET /api/user/data -> Fetches logged-in user's medicines, logs, and family contact
app.get('/api/user/data', requireAuth, (req, res) => {
  const record = userRecords.get(req.userPhone) || {
    phone: req.userPhone,
    medicines: [],
    logs: [],
    familyPhone: '8756622554',
  };
  return res.json({ ok: true, record });
});

// POST /api/user/sync -> Saves logged-in user's medicines, logs, and family contact
app.post('/api/user/sync', requireAuth, (req, res) => {
  const { medicines, logs, familyPhone } = req.body || {};
  const existing = userRecords.get(req.userPhone) || { phone: req.userPhone };

  const updated = {
    ...existing,
    phone: req.userPhone,
    medicines: Array.isArray(medicines) ? medicines : existing.medicines || [],
    logs: Array.isArray(logs) ? logs : existing.logs || [],
    familyPhone: typeof familyPhone === 'string' ? familyPhone : existing.familyPhone || '8756622554',
    updatedAt: new Date().toISOString(),
  };

  userRecords.set(req.userPhone, updated);
  return res.json({ ok: true, updatedAt: updated.updatedAt });
});

app.use(express.static(frontendDist));
app.get('*', (req, res) => {
  res.sendFile(path.join(frontendDist, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`MEDIASSIST OTP Backend running on http://localhost:${PORT}`);
});