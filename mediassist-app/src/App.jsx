import React, { useState, useEffect } from 'react';

/**
 * Clean inline SVG icon component.
 * Avoids external icon packages that can cause duplicate React hook/context errors.
 */
const Icon = ({ name, size = 20, className = '' }) => {
  const icons = {
    home: <path d="M3 10.5L12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-9.5z" />,
    plus: <path d="M12 5v14M5 12h14" />,
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.35-4.35" />
      </>
    ),
    mic: (
      <>
        <rect x="9" y="2" width="6" height="12" rx="3" />
        <path d="M5 10a7 7 0 0 0 14 0M12 19v3M8 22h8" />
      </>
    ),
    cloud: <path d="M17.5 19H7a4.5 4.5 0 0 1-.4-8.98A6 6 0 0 1 18.2 8.6 4 4 0 0 1 17.5 19z" />,
    calendar: (
      <>
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </>
    ),
    users: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
    heart: (
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    ),
    volume: (
      <>
        <path d="M11 5L6 9H2v6h4l5 4V5z" />
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07M19.07 4.93a10 10 0 0 1 0 14.14" />
      </>
    ),
    trash: <path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6" />,
    undo: <path d="M3 7v6h6M3 13a9 9 0 1 0 3-6.7L3 7" />,
    refresh: (
      <>
        <path d="M21 2v6h-6M3 12a9 9 0 0 1 15-6.7L21 8" />
        <path d="M3 22v-6h6M21 12a9 9 0 0 1-15 6.7L3 16" />
      </>
    ),
    pdf: (
      <>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6M12 18v-6M9 15l3 3 3-3" />
      </>
    ),
    shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
    map: (
      <>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
    alert: (
      <>
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <path d="M12 9v4M12 17h.01" />
      </>
    ),
    check: <path d="M20 6L9 17l-5-5" />,
    x: <path d="M18 6L6 18M6 6l12 12" />,
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </>
    ),
    call: (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    ),
    camera: (
      <>
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
      </>
    ),
    send: (
      <>
        <line x1="22" y1="2" x2="11" y2="13" />
        <polygon points="22 2 15 22 11 13 2 9 22 2" />
      </>
    ),
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {icons[name]}
    </svg>
  );
};

// Local Hindi medicine knowledge base for Info modal and Symptom matching
const MEDICINES_DB = [
  {
    name: 'पैरासिटामोल (Paracetamol)',
    matchKeys: ['paracetamol', 'पैरासिटामोल'],
    keywords: ['fever', 'bukhar', 'बुखार', 'headache', 'sar dard', 'सिर दर्द', 'body pain', 'dard', 'दर्द'],
    use: 'बुखार और हल्के से तेज़ दर्द से राहत के लिए।',
    howToTake: 'खाना खाने के बाद पानी के साथ लें।',
    precautions: 'खाली पेट न लें। दिन में 3-4 गोली से ज़्यादा न लें।',
    whenToCallDoctor: 'अगर बुखार 3 दिन से ज़्यादा रहे।',
  },
  {
    name: 'सेटिरिज़ीन (Cetirizine)',
    matchKeys: ['cetirizine', 'सेटिरिज़ीन'],
    keywords: ['sardi', 'सर्दी', 'cold', 'allergy', 'एलर्जी', 'chheenk', 'छींक', 'khujli', 'खुजली', 'jukam', 'जुकाम'],
    use: 'सर्दी, लगातार छींक, नाक बहना और त्वचा की एलर्जी के लिए।',
    howToTake: 'रात को खाना खाने के बाद 1 गोली।',
    precautions: 'इससे नींद आ सकती है। गाड़ी न चलाएं।',
    whenToCallDoctor: 'अगर सांस लेने में दिक्कत हो।',
  },
  {
    name: 'डाइजीन (Digene)',
    matchKeys: ['digene', 'डाइजीन'],
    keywords: ['pet dard', 'पेट दर्द', 'gas', 'गैस', 'acidity', 'एसिडिटी', 'jalan', 'जलन', 'indigestion'],
    use: 'गैस, एसिडिटी और पेट की जलन कम करने के लिए।',
    howToTake: 'खाना खाने के बाद चबा कर लें।',
    precautions: 'दूसरी दवाइयों के साथ 2 घंटे का अंतर रखें।',
    whenToCallDoctor: 'अगर पेट दर्द 2 दिन से ज़्यादा रहे।',
  },
  {
    name: 'पैन-डी (Pan-D)',
    matchKeys: ['pan-d', 'पैन-डी'],
    keywords: ['gas', 'गैस', 'acidity', 'एसिडिटी', 'ulti', 'उल्टी', 'nausea', 'vomiting'],
    use: 'तेज़ एसिडिटी, गैस और उल्टी जैसा मन होने पर।',
    howToTake: 'सुबह खाली पेट नाश्ते से 30 मिनट पहले।',
    precautions: 'कैप्सूल को तोड़ें या चबाएं नहीं।',
    whenToCallDoctor: 'अगर लगातार उल्टी हो।',
  },
  {
    name: 'कॉम्बिफ्लेम (Combiflam)',
    matchKeys: ['combiflam', 'कॉम्बिफ्लेम'],
    keywords: ['dard', 'दर्द', 'pain', 'dant dard', 'दांत दर्द', 'toothache', 'bukhar', 'बुखार'],
    use: 'तेज़ दर्द, दांत दर्द और बुखार के लिए।',
    howToTake: 'हमेशा खाना खाने के बाद।',
    precautions: 'खाली पेट लेने से पेट में जलन हो सकती है।',
    whenToCallDoctor: 'अगर पेट में तेज़ दर्द हो।',
  },
  {
    name: 'ओआरएस (ORS)',
    matchKeys: ['ors', 'ओआरएस'],
    keywords: ['dast', 'दस्त', 'loose motion', 'kamzori', 'कमजोरी', 'weakness', 'dehydration'],
    use: 'दस्त या उल्टी के बाद पानी और नमक की कमी पूरी करने के लिए।',
    howToTake: '1 लीटर उबले पानी में घोल कर दिन भर पिएं।',
    precautions: 'घुले पानी को 24 घंटे के अंदर उपयोग करें।',
    whenToCallDoctor: 'अगर चक्कर आएं।',
  },
  {
    name: 'मेटफॉर्मिन (Metformin)',
    matchKeys: ['metformin', 'मेटफॉर्मिन'],
    keywords: ['sugar', 'शुगर', 'diabetes', 'मधुमेह', 'madhumeh'],
    use: 'ब्लड शुगर नियंत्रित करने के लिए।',
    howToTake: 'खाना खाते समय या तुरंत बाद।',
    precautions: 'दवाई के बाद खाना न छोड़ें।',
    whenToCallDoctor: 'अगर घबराहट हो।',
  },
  {
    name: 'एम्लोडिपिन (Amlodipine)',
    matchKeys: ['amlodipine', 'एम्लोडिपिन'],
    keywords: ['bp', 'बीपी', 'blood pressure', 'ब्लड प्रेशर', 'high bp'],
    use: 'हाई ब्लड प्रेशर नियंत्रित रखने के लिए।',
    howToTake: 'रोज़ एक ही समय पर।',
    precautions: 'अचानक दवाई बंद न करें।',
    whenToCallDoctor: 'अगर चक्कर आएं।',
  },
];

// Default medicines seeded on first visit
const INITIAL_MEDICINES = [
  {
    id: 'med-1',
    name: 'पैरासिटामोल (Paracetamol)',
    dosage: '1 गोली (500mg)',
    time: '09:00',
    mealTiming: 'खाना खाने के बाद',
    startDate: '2026-11-19',
    endDate: '',
    stockLeft: 2,
    photoUrl: '',
  },
  {
    id: 'med-2',
    name: 'एम्लोडिपिन (Amlodipine)',
    dosage: '1 गोली (5mg)',
    time: '14:00',
    mealTiming: 'खाना खाने के बाद',
    startDate: '2026-11-19',
    endDate: '',
    stockLeft: 14,
    photoUrl: '',
  },
  {
    id: 'med-3',
    name: 'मेटफॉर्मिन (Metformin)',
    dosage: '1 गोली (500mg)',
    time: '20:30',
    mealTiming: 'खाना खाने के बाद',
    startDate: '2026-11-19',
    endDate: '',
    stockLeft: 20,
    photoUrl: '',
  },
  {
    id: 'med-4',
    name: 'डिस्प्रिन (Disprin)',
    dosage: '1 गोली',
    time: '19:41',
    mealTiming: 'खाना खाने के बाद',
    startDate: '2026-11-19',
    endDate: '',
    stockLeft: 8,
    photoUrl: '',
  },
];

// Initial 7-day sample logs so compliance begins at 75% (3 Taken out of 4 logged doses)
function buildInitialLogs() {
  const d17 = new Date();
  d17.setDate(d17.getDate() - 2);
  const d18 = new Date();
  d18.setDate(d18.getDate() - 1);
  return [
    { id: 'd1', medicineId: 'med-1', date: d18.toISOString().split('T')[0], status: 'Taken' },
    { id: 'd2', medicineId: 'med-2', date: d18.toISOString().split('T')[0], status: 'Taken' },
    { id: 'd3', medicineId: 'med-3', date: d17.toISOString().split('T')[0], status: 'Taken' },
    { id: 'd4', medicineId: 'med-4', date: d17.toISOString().split('T')[0], status: 'Missed' },
  ];
}

// Optional Express backend URL; falls back cleanly to localStorage OTP when backend is not running
const API_BASE_URL =
  (typeof window !== 'undefined' && window.__MEDIASSIST_API_URL__) ||
  import.meta.env.VITE_API_URL ||
  (import.meta.env.DEV ? 'http://localhost:5000' : '');

// Reads or initializes a specific 10-digit user's profile, medicines, logs, and family contact
function loadUserRecord(phone) {
  const clean = String(phone || '').replace(/\D/g, '').slice(0, 10);
  const storageKey = `mediassist_user_hi_${clean}`;
  try {
    const raw = localStorage.getItem(storageKey);
    if (raw) {
      const parsed = JSON.parse(raw);
      return {
        phone: clean,
        name: parsed.name || `उपयोगकर्ता ${clean.slice(-4)}`,
        medicines: Array.isArray(parsed.medicines) ? parsed.medicines : INITIAL_MEDICINES,
        logs: Array.isArray(parsed.logs) ? parsed.logs : buildInitialLogs(),
        familyPhone: parsed.familyPhone || '8756622554',
      };
    }
  } catch {}

  return {
    phone: clean,
    name: `उपयोगकर्ता ${clean.slice(-4)}`,
    medicines: INITIAL_MEDICINES,
    logs: buildInitialLogs(),
    familyPhone: '8756622554',
  };
}

// OTP Login Modal / Gate supporting backend OTP API with instant local fallback
function OtpLoginScreen({ onVerified, showToast }) {
  const [phone, setPhone] = useState(() => {
    try {
      return localStorage.getItem('mediassist_last_phone') || '8756622554';
    } catch {
      return '8756622554';
    }
  });
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState('phone'); // 'phone' | 'otp'
  const [loading, setLoading] = useState(false);
  const [localOtpCode, setLocalOtpCode] = useState('');
  const [demoMode, setDemoMode] = useState(false);

  const normalizedPhone = phone.replace(/\D/g, '').slice(0, 10);

  const handleSendOtp = async (e) => {
    e.preventDefault();
    if (normalizedPhone.length !== 10) {
      showToast('कृपया सही 10-अंकों का मोबाइल नंबर डालें।', 'error');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}/api/auth/send-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: normalizedPhone }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || 'ओटीपी भेजने में समस्या आई');
      }
      setDemoMode(false);
      setLocalOtpCode(data.demoOtp || '');
      setStep('otp');
      showToast(`ओटीपी +91 ${normalizedPhone} पर भेजा गया है।`, 'success');
    } catch {
      const generatedOtp = String(Math.floor(100000 + Math.random() * 900000));
      setDemoMode(true);
      setLocalOtpCode(generatedOtp);
      setOtp(generatedOtp);
      setStep('otp');
      showToast(`डेमो ओटीपी: ${generatedOtp}`, 'info');
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    const cleanOtp = otp.replace(/\D/g, '').trim();
    if (cleanOtp.length < 4) {
      showToast('कृपया सही ओटीपी डालें।', 'error');
      return;
    }

    setLoading(true);
    try {
      if (!demoMode) {
        const res = await fetch(`${API_BASE_URL}/api/auth/verify-otp`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ phone: normalizedPhone, otp: cleanOtp }),
        });
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.message || 'गलत ओटीपी');
        }
        onVerified(normalizedPhone, data.token || '');
        showToast('लॉगिन सफल रहा! आपका डेटा लोड हो गया है।', 'success');
        return;
      }

      if (cleanOtp !== localOtpCode) {
        showToast('ओटीपी मेल नहीं खाया। दोबारा जांचें।', 'error');
        return;
      }
      onVerified(normalizedPhone, '');
      showToast('लॉगिन सफल रहा!', 'success');
    } catch (err) {
      showToast(err.message || 'ओटीपी सत्यापित करने में त्रुटि आई।', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-purple-950/75 backdrop-blur-xs flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 space-y-5 shadow-2xl border border-purple-100">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
            <Icon name="heart" size={24} />
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-gray-900">मेडीअसिस्ट लॉगिन</h2>
            <p className="text-xs text-gray-500">फ़ोन नंबर और ओटीपी से अपना खाता खोलें</p>
          </div>
        </div>

        {step === 'phone' ? (
          <form onSubmit={handleSendOtp} className="space-y-4">
            <div>
              <label className="block text-xs font-extrabold text-gray-700 mb-1.5">
                मोबाइल नंबर (10 अंक)
              </label>
              <div className="flex items-center border-2 border-purple-200 focus-within:border-purple-600 rounded-2xl overflow-hidden bg-purple-50/40">
                <span className="px-3.5 py-3.5 font-extrabold text-gray-700 bg-purple-100/70 text-sm">
                  +91
                </span>
                <input
                  type="tel"
                  maxLength={10}
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                  placeholder="8756622554"
                  className="w-full px-3.5 py-3.5 bg-transparent font-extrabold text-base text-gray-900 focus:outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-purple-700 hover:bg-purple-800 text-white py-3.5 rounded-2xl font-extrabold text-base shadow-md cursor-pointer transition-colors"
            >
              {loading ? 'ओटीपी भेजा जा रहा है...' : 'ओटीपी भेजें'}
            </button>
          </form>
        ) : (
          <form onSubmit={handleVerifyOtp} className="space-y-4">
            <div className="bg-purple-50 border border-purple-200 rounded-2xl p-3 text-xs text-purple-950 flex items-center justify-between">
              <span>
                ओटीपी भेजा गया: <strong>+91 {normalizedPhone}</strong>
              </span>
              <button
                type="button"
                onClick={() => {
                  setStep('phone');
                  setOtp('');
                }}
                className="font-extrabold underline text-purple-700 cursor-pointer"
              >
                बदलें
              </button>
            </div>

            {localOtpCode && (
              <div className="bg-amber-50 border border-amber-300 rounded-2xl p-3 text-xs text-amber-950 font-semibold">
                परीक्षण / डेमो ओटीपी: <span className="font-extrabold text-sm">{localOtpCode}</span>
              </div>
            )}

            <div>
              <label className="block text-xs font-extrabold text-gray-700 mb-1.5">
                6-अंकों का ओटीपी डालें
              </label>
              <input
                type="text"
                inputMode="numeric"
                maxLength={6}
                required
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                placeholder="123456"
                className="w-full px-4 py-3.5 bg-gray-50 border-2 border-purple-200 focus:border-purple-600 focus:outline-none rounded-2xl font-extrabold text-center tracking-[0.35em] text-lg"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3.5 rounded-2xl font-extrabold text-base shadow-md cursor-pointer transition-colors"
            >
              {loading ? 'सत्यापन हो रहा है...' : 'सत्यापित करें और लॉगिन करें'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [toast, setToast] = useState(null);
  const [selectedInfo, setSelectedInfo] = useState(null);
  const [voiceActiveId, setVoiceActiveId] = useState(null);

  const [currentUserPhone, setCurrentUserPhone] = useState(() => {
    try {
      return localStorage.getItem('mediassist_active_user_phone') || '';
    } catch {
      return '';
    }
  });
  const [authToken, setAuthToken] = useState(() => {
    try {
      return localStorage.getItem('mediassist_auth_token') || '';
    } catch {
      return '';
    }
  });
  const [showLoginModal, setShowLoginModal] = useState(() => {
    try {
      return !localStorage.getItem('mediassist_active_user_phone');
    } catch {
      return true;
    }
  });

  const initialRecord = loadUserRecord(currentUserPhone || '8756622554');

  const [medicines, setMedicines] = useState(initialRecord.medicines);
  const [logs, setLogs] = useState(initialRecord.logs);
  const [familyPhone, setFamilyPhone] = useState(initialRecord.familyPhone);

  // Sync user's medicines, logs, and family number to backend (when logged in) and per-user localStorage
  useEffect(() => {
    if (!currentUserPhone) return;
    const storageKey = `mediassist_user_hi_${currentUserPhone}`;
    try {
      localStorage.setItem(
        storageKey,
        JSON.stringify({
          phone: currentUserPhone,
          medicines,
          logs,
          familyPhone,
        })
      );
      localStorage.setItem('mediassist_active_user_phone', currentUserPhone);
      localStorage.setItem('mediassist_last_phone', currentUserPhone);
    } catch {}

    if (authToken) {
      fetch(`${API_BASE_URL}/api/user/sync`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify({ medicines, logs, familyPhone }),
      }).catch(() => {});
    }
  }, [currentUserPhone, authToken, medicines, logs, familyPhone]);

  const showToast = (msg, type = 'success') => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 2800);
  };

  // Loads user data from backend if available, otherwise from per-user localStorage
  const handleVerifiedLogin = async (phone, token) => {
    const cleanPhone = phone.replace(/\D/g, '').slice(0, 10);
    setCurrentUserPhone(cleanPhone);
    setAuthToken(token || '');
    setShowLoginModal(false);

    try {
      if (token) {
        const res = await fetch(`${API_BASE_URL}/api/user/data`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (res.ok) {
          const data = await res.json();
          if (data.record) {
            setMedicines(Array.isArray(data.record.medicines) ? data.record.medicines : INITIAL_MEDICINES);
            setLogs(Array.isArray(data.record.logs) ? data.record.logs : buildInitialLogs());
            setFamilyPhone(data.record.familyPhone || '8756622554');
            return;
          }
        }
      }
    } catch {}

    const localRec = loadUserRecord(cleanPhone);
    setMedicines(localRec.medicines);
    setLogs(localRec.logs);
    setFamilyPhone(localRec.familyPhone);
  };

  const handleLogout = () => {
    setAuthToken('');
    setCurrentUserPhone('');
    try {
      localStorage.removeItem('mediassist_active_user_phone');
      localStorage.removeItem('mediassist_auth_token');
    } catch {}
    setShowLoginModal(true);
    showToast('लॉगआउट हो गया। दोबारा फ़ोन और ओटीपी से लॉगिन करें।', 'info');
  };

  // Speaks a Hindi voice reminder for the selected medicine
  const speakHindi = (med) => {
    if (!('speechSynthesis' in window)) {
      showToast('आपके ब्राउज़र में आवाज़ रिमाइंडर उपलब्ध नहीं है।', 'error');
      return;
    }
    try {
      window.speechSynthesis.cancel();
      setVoiceActiveId(med.id);
      const utterance = new SpeechSynthesisUtterance(
        `नमस्ते! मेडीअसिस्ट रिमाइंडर: आपकी दवाई ${med.name}, ${med.dosage} लेने का समय हो गया है।`
      );
      utterance.lang = 'hi-IN';
      utterance.rate = 0.9;
      utterance.onend = () => setVoiceActiveId(null);
      utterance.onerror = () => setVoiceActiveId(null);
      window.speechSynthesis.speak(utterance);
      showToast(`आवाज़ रिमाइंडर: ${med.name}`, 'info');
    } catch {
      setVoiceActiveId(null);
      showToast('आवाज़ शुरू नहीं हो पाई।', 'error');
    }
  };

  const todayStr = new Date().toISOString().split('T')[0];

  // Records Taken / Missed / Snoozed for today and updates stock on Taken
  const handleLog = (medId, status) => {
    setLogs((prev) => {
      const rest = prev.filter((l) => !(l.medicineId === medId && l.date === todayStr));
      return [...rest, { id: Date.now().toString(), medicineId: medId, date: todayStr, status }];
    });

    if (status === 'Taken') {
      setMedicines((prev) =>
        prev.map((m) => (m.id === medId ? { ...m, stockLeft: Math.max(0, Number(m.stockLeft) - 1) } : m))
      );
      showToast('दवाई "ली गई" दर्ज हो गई।');
    } else if (status === 'Missed') {
      showToast('दवाई "छूट गई" दर्ज की गई।', 'error');
    } else {
      showToast('15 मिनट के लिए याद दिलाने हेतु टाला गया।', 'info');
    }
  };

  // Reverts today's status and restores stock if previously marked Taken
  const handleUndo = (medId) => {
    const existing = logs.find((l) => l.medicineId === medId && l.date === todayStr);
    if (existing?.status === 'Taken') {
      setMedicines((prev) =>
        prev.map((m) => (m.id === medId ? { ...m, stockLeft: Number(m.stockLeft) + 1 } : m))
      );
    }
    setLogs((prev) => prev.filter((l) => !(l.medicineId === medId && l.date === todayStr)));
    showToast('स्थिति रीसेट की गई।', 'info');
  };

  const takenCount = medicines.filter((m) =>
    logs.some((l) => l.medicineId === m.id && l.date === todayStr && l.status === 'Taken')
  ).length;
  const progress = medicines.length > 0 ? Math.round((takenCount / medicines.length) * 100) : 0;

  return (
    <div className="min-h-screen bg-[#f8f7fc] text-gray-900 pb-28 font-sans">
      {toast && (
        <div className="fixed top-5 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
          <div
            className={`px-5 py-3 rounded-2xl shadow-xl font-semibold text-sm text-white ${
              toast.type === 'error'
                ? 'bg-rose-600'
                : toast.type === 'info'
                ? 'bg-indigo-700'
                : 'bg-emerald-600'
            }`}
          >
            {toast.msg}
          </div>
        </div>
      )}

      {/* Header with Hindi MEDIASSIST branding, current date, and आज की खुराक प्रगति */}
      <header className="bg-gradient-to-br from-purple-800 via-purple-700 to-indigo-800 text-white pt-6 pb-8 px-5 rounded-b-[2rem] shadow-lg">
        <div className="max-w-xl mx-auto">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center border border-white/20 shrink-0">
                <Icon name="heart" size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-extrabold tracking-tight">मेडीअसिस्ट</h1>
                <p className="text-xs text-purple-200 font-medium">आपकी सेहत का स्मार्ट साथी</p>
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-xs font-bold bg-white/15 px-3 py-1.5 rounded-full border border-white/20 whitespace-nowrap">
                {new Date().toLocaleDateString('hi-IN', { day: 'numeric', month: 'short', weekday: 'short' })}
              </span>
              {currentUserPhone ? (
                <button
                  type="button"
                  onClick={handleLogout}
                  title={`लॉगिन नंबर: +91 ${currentUserPhone}`}
                  className="text-xs font-bold bg-white/20 hover:bg-white/30 px-2.5 py-1.5 rounded-full border border-white/20 cursor-pointer whitespace-nowrap"
                >
                  {currentUserPhone.slice(-4)} • बाहर
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setShowLoginModal(true)}
                  className="text-xs font-bold bg-emerald-500 hover:bg-emerald-600 text-white px-3 py-1.5 rounded-full cursor-pointer whitespace-nowrap"
                >
                  लॉगिन
                </button>
              )}
            </div>
          </div>

          <div className="mt-6 bg-white/15 border border-white/15 rounded-2xl p-4">
            <div className="flex justify-between items-center text-sm mb-2">
              <span className="font-semibold text-purple-100">आज की खुराक प्रगति</span>
              <span className="font-extrabold text-white">
                {takenCount} / {medicines.length} ({progress}%)
              </span>
            </div>
            <div className="w-full h-3 bg-purple-950/40 rounded-full overflow-hidden">
              <div
                className="h-full bg-emerald-400 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main View Switcher */}
      <main className="max-w-xl mx-auto px-4 -mt-3 space-y-6">
        {activeTab === 'dashboard' && (
          <DashboardView
            medicines={medicines}
            logs={logs}
            todayStr={todayStr}
            voiceActiveId={voiceActiveId}
            onSpeak={speakHindi}
            onLog={handleLog}
            onUndo={handleUndo}
            onOpenInfo={setSelectedInfo}
            onDelete={(id) => {
              setMedicines((prev) => prev.filter((m) => m.id !== id));
              showToast('दवाई सूची से हटा दी गई।', 'info');
            }}
            onGoAdd={() => setActiveTab('add')}
          />
        )}

        {activeTab === 'add' && (
          <AddMedicineView
            onAdd={(newMed) => {
              setMedicines((prev) => [...prev, newMed]);
              showToast(`${newMed.name} जुड़ गई!`);
              setActiveTab('dashboard');
            }}
          />
        )}

        {activeTab === 'symptom' && <SymptomView myMedicines={medicines} showToast={showToast} />}
        {activeTab === 'risk' && <FluRiskView showToast={showToast} />}
        {activeTab === 'history' && <ReportView medicines={medicines} logs={logs} showToast={showToast} />}
        {activeTab === 'family' && (
          <FamilyView
            medicines={medicines}
            logs={logs}
            todayStr={todayStr}
            familyPhone={familyPhone}
            setFamilyPhone={setFamilyPhone}
          />
        )}
      </main>

      {showLoginModal && <OtpLoginScreen onVerified={handleVerifiedLogin} showToast={showToast} />}

      {/* Medicine Info Modal */}
      {selectedInfo && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 space-y-4 shadow-2xl border border-purple-100">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-extrabold text-gray-900">{selectedInfo.name}</h3>
              <span className="text-xs font-bold bg-purple-100 text-purple-800 px-2.5 py-1 rounded-full">जानकारी</span>
            </div>
            <div className="space-y-2.5 text-sm text-gray-700 bg-purple-50/60 p-4 rounded-2xl">
              <p><strong>काम:</strong> {selectedInfo.use}</p>
              <p><strong>कैसे लें:</strong> {selectedInfo.howToTake}</p>
              {selectedInfo.photoUrl && (
                <div className="pt-1">
                  <img
                    src={selectedInfo.photoUrl}
                    alt={`${selectedInfo.name} का पत्ता`}
                    className="w-full h-36 object-cover rounded-2xl border border-purple-200"
                  />
                </div>
              )}
              <p className="text-rose-700 bg-rose-50 p-2.5 rounded-xl border border-rose-100">
                <strong>सावधानी:</strong> {selectedInfo.precautions}
              </p>
              <p><strong>डॉक्टर को कब दिखाएं:</strong> {selectedInfo.whenToCallDoctor}</p>
            </div>
            <button
              onClick={() => setSelectedInfo(null)}
              className="w-full bg-purple-700 hover:bg-purple-800 text-white py-3.5 rounded-2xl font-bold text-base cursor-pointer"
            >
              बंद करें
            </button>
          </div>
        </div>
      )}

      {/* Bottom Navigation Bar */}
      <nav className="fixed bottom-0 inset-x-0 bg-white border-t border-purple-100 shadow-lg z-30">
        <div className="max-w-xl mx-auto grid grid-cols-6 py-2 px-1">
          {[
            { id: 'dashboard', label: 'होम', icon: 'home' },
            { id: 'add', label: '+जोड़ें', icon: 'plus' },
            { id: 'symptom', label: 'लक्षण', icon: 'search' },
            { id: 'risk', label: 'फ्लू जोखिम', icon: 'cloud' },
            { id: 'history', label: 'रिपोर्ट', icon: 'calendar' },
            { id: 'family', label: 'परिवार', icon: 'users' },
          ].map((tab) => {
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center justify-center py-1.5 rounded-2xl cursor-pointer transition-all ${
                  active
                    ? 'text-purple-700 bg-purple-100 font-extrabold scale-105'
                    : 'text-gray-500 font-semibold hover:text-purple-600'
                }`}
              >
                <Icon name={tab.icon} size={20} />
                <span className="text-[10px] mt-1">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}

/* ============================================================================
   HOME / DASHBOARD VIEW (होम स्क्रीन)
============================================================================ */
function DashboardView({ medicines, logs, todayStr, voiceActiveId, onSpeak, onLog, onUndo, onOpenInfo, onDelete, onGoAdd }) {
  const lowStock = medicines.filter((m) => Number(m.stockLeft) <= 3);
  const findInfo = (med) => {
    const dbMatch = MEDICINES_DB.find((db) =>
      db.matchKeys.some((key) => med.name.toLowerCase().includes(key.toLowerCase()))
    );
    if (dbMatch) {
      return { ...dbMatch, photoUrl: med.photoUrl };
    }
    if (med.photoUrl) {
      return {
        name: med.name,
        use: `निर्धारित खुराक (${med.dosage}) समय ${med.time} पर।`,
        howToTake: med.mealTiming || 'डॉक्टर की सलाह के अनुसार लें।',
        precautions: 'अपने पत्ते की फोटो और डॉक्टर के निर्देश के अनुसार ही दवाई लें।',
        whenToCallDoctor: 'किसी भी असाधारण लक्षण पर डॉक्टर से संपर्क करें।',
        photoUrl: med.photoUrl,
      };
    }
    return null;
  };

  return (
    <div className="space-y-5 pt-2">
      {lowStock.map((med) => (
        <div key={med.id} className="bg-amber-50 border-2 border-amber-300 p-4 rounded-2xl flex items-center gap-3 shadow-sm">
          <Icon name="alert" size={22} className="text-amber-600 shrink-0" />
          <div>
            <p className="font-extrabold text-amber-950 text-sm">रीफिल चेतावनी: {med.name} खत्म होने वाली है!</p>
            <p className="text-xs text-amber-800">सिर्फ <strong>{med.stockLeft} खुराक</strong> बची हैं।</p>
          </div>
        </div>
      ))}

      <div className="flex items-center justify-between px-1">
        <h2 className="text-xl font-extrabold text-gray-900">आज की दवाइयां</h2>
        <span className="text-xs font-bold text-purple-700 bg-purple-100 px-3 py-1 rounded-full">कुल {medicines.length}</span>
      </div>

      {medicines.length === 0 ? (
        <div className="bg-white p-8 rounded-3xl text-center border-2 border-dashed border-purple-200 space-y-3">
          <p className="text-lg font-bold text-gray-700">कोई दवाई जुड़ी नहीं है</p>
          <button onClick={onGoAdd} className="bg-purple-700 text-white px-6 py-3 rounded-2xl font-bold cursor-pointer">
            + पहली दवाई जोड़ें
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {medicines.map((med) => {
            const log = logs.find((l) => l.medicineId === med.id && l.date === todayStr);
            const info = findInfo(med);
            const isSpeaking = voiceActiveId === med.id;

            return (
              <div key={med.id} className="bg-white p-5 rounded-3xl shadow-sm border border-purple-100 space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3.5">
                    <div className="w-14 h-14 rounded-2xl bg-purple-100 text-purple-800 flex items-center justify-center font-extrabold text-xl shrink-0">
                      {med.name[0]}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-lg font-extrabold text-gray-900">{med.name}</h3>
                        {info && (
                          <button
                            onClick={() => onOpenInfo(info)}
                            className="text-xs font-bold bg-purple-100 hover:bg-purple-200 text-purple-800 px-2.5 py-1 rounded-full cursor-pointer"
                          >
                            जानकारी
                          </button>
                        )}
                      </div>
                      <p className="text-gray-700 font-semibold text-sm">{med.dosage}</p>
                      <div className="flex items-center gap-2 mt-1.5 text-xs font-bold">
                        <span className="bg-indigo-50 text-indigo-800 px-2.5 py-1 rounded-lg">{med.time}</span>
                        <span
                          className={`${
                            med.stockLeft <= 3 ? 'bg-amber-100 text-amber-800' : 'bg-emerald-50 text-emerald-700'
                          } px-2.5 py-1 rounded-lg`}
                        >
                          स्टॉक: {med.stockLeft}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <button
                      onClick={() => onSpeak(med)}
                      title="हिंदी आवाज़ रिमाइंडर"
                      className={`p-3 rounded-2xl cursor-pointer ${
                        isSpeaking ? 'bg-purple-700 text-white animate-pulse' : 'bg-purple-100 hover:bg-purple-200 text-purple-800'
                      }`}
                    >
                      <Icon name="volume" size={20} />
                    </button>
                    <button
                      onClick={() => onDelete(med.id)}
                      title="दवाई हटाएं"
                      className="p-2 text-gray-400 hover:text-rose-600 self-center cursor-pointer"
                    >
                      <Icon name="trash" size={16} />
                    </button>
                  </div>
                </div>

                {log ? (
                  <div
                    className={`p-3 rounded-2xl flex items-center justify-between font-bold text-sm ${
                      log.status === 'Taken'
                        ? 'bg-emerald-50 text-emerald-900 border border-emerald-200'
                        : log.status === 'Missed'
                        ? 'bg-rose-50 text-rose-900 border border-rose-200'
                        : 'bg-amber-50 text-amber-900 border border-amber-200'
                    }`}
                  >
                    <span>
                      {log.status === 'Taken' ? 'ले ली गई' : log.status === 'Missed' ? 'छूट गई' : '15 मिनट के लिए टाली गई'}
                    </span>
                    <button onClick={() => onUndo(med.id)} className="text-xs underline flex items-center gap-1 cursor-pointer">
                      <Icon name="undo" size={14} /> वापस बदलें
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-3 gap-2 pt-1">
                    <button
                      onClick={() => onLog(med.id, 'Taken')}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white py-3.5 rounded-2xl font-extrabold text-sm flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <Icon name="check" size={16} /> ले ली
                    </button>
                    <button
                      onClick={() => onLog(med.id, 'Missed')}
                      className="bg-rose-500 hover:bg-rose-600 text-white py-3.5 rounded-2xl font-extrabold text-sm flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <Icon name="x" size={16} /> छूट गई
                    </button>
                    <button
                      onClick={() => onLog(med.id, 'Snoozed')}
                      className="bg-amber-500 hover:bg-amber-600 text-white py-3.5 rounded-2xl font-extrabold text-sm flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <Icon name="clock" size={16} /> टालें
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

/* ============================================================================
   +ADD MEDICINE VIEW (नई दवाई जोड़ें)
============================================================================ */
function AddMedicineView({ onAdd }) {
  const [name, setName] = useState('');
  const [dosage, setDosage] = useState('1 गोली');
  const [time, setTime] = useState('09:00');
  const [mealTiming, setMealTiming] = useState('खाना खाने के बाद');
  const [startDate, setStartDate] = useState(() => new Date().toISOString().split('T')[0]);
  const [endDate, setEndDate] = useState('');
  const [stockLeft, setStockLeft] = useState(10);
  const [photoUrl, setPhotoUrl] = useState('');

  const handlePhotoChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setPhotoUrl(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    onAdd({
      id: `med-${Date.now()}`,
      name: name.trim(),
      dosage: dosage.trim() || '1 गोली',
      time,
      mealTiming,
      startDate,
      endDate,
      stockLeft: Number(stockLeft) || 1,
      photoUrl,
    });
  };

  return (
    <div className="bg-white p-6 rounded-3xl shadow-sm border border-purple-100 mt-2">
      <h2 className="text-2xl font-extrabold text-gray-900">नई दवाई जोड़ें</h2>
      <p className="text-xs text-gray-500 mt-0.5 mb-5">दवाई का नाम, समय और स्टॉक भरें</p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-bold text-gray-800 mb-2">दवाई का नाम *</label>
          <input
            type="text"
            required
            placeholder="जैसे: पैरासिटामोल, सेटिरिज़ीन, पैन-डी"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-4 bg-white border border-gray-200 focus:border-purple-600 focus:outline-none rounded-2xl font-semibold text-base"
          />
          <div className="flex flex-wrap gap-2 mt-2.5">
            {['पैरासिटामोल', 'सेटिरिज़ीन', 'डाइजीन', 'पैन-डी'].map((preset) => (
              <button
                key={preset}
                type="button"
                onClick={() => setName(preset)}
                className="text-xs font-bold bg-purple-50 hover:bg-purple-100 text-purple-700 px-3 py-1.5 rounded-full cursor-pointer transition-colors"
              >
                + {preset}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-bold text-gray-800 mb-1.5">कितनी खुराक</label>
            <input
              type="text"
              value={dosage}
              onChange={(e) => setDosage(e.target.value)}
              className="w-full p-3.5 bg-white border border-gray-200 focus:border-purple-600 focus:outline-none rounded-2xl font-semibold text-base"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-800 mb-1.5">समय *</label>
            <input
              type="time"
              required
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full p-3.5 bg-white border border-gray-200 focus:border-purple-600 focus:outline-none rounded-2xl font-semibold text-base"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-800 mb-2">कब लेनी है?</label>
          <div className="grid grid-cols-2 gap-3">
            {['खाना खाने के बाद', 'खाली पेट (सुबह)'].map((option) => {
              const selected = mealTiming === option;
              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => setMealTiming(option)}
                  className={`py-3.5 px-3 rounded-2xl text-sm font-extrabold border-2 cursor-pointer transition-all ${
                    selected
                      ? 'border-purple-600 text-purple-700 bg-purple-50/40'
                      : 'border-gray-200 text-gray-800 bg-white hover:border-purple-200'
                  }`}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-bold text-gray-800 mb-1.5">शुरू तारीख</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full p-3.5 bg-white border border-gray-200 focus:border-purple-600 focus:outline-none rounded-2xl font-semibold text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-800 mb-1.5">खत्म तारीख</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full p-3.5 bg-white border border-gray-200 focus:border-purple-600 focus:outline-none rounded-2xl font-semibold text-sm text-gray-600"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-800 mb-1.5">डिब्बे में कुल गोलियां (रीफिल चेतावनी के लिए)</label>
          <input
            type="number"
            min="1"
            value={stockLeft}
            onChange={(e) => setStockLeft(e.target.value)}
            className="w-full p-3.5 bg-white border border-gray-200 focus:border-purple-600 focus:outline-none rounded-2xl font-extrabold text-base"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-800 mb-1.5">दवाई के पत्ते की फोटो (वैकल्पिक)</label>
          <label className="w-full py-4 px-4 border-2 border-dashed border-purple-300 hover:border-purple-500 bg-purple-50/30 rounded-2xl flex items-center justify-center gap-2.5 text-purple-700 font-extrabold text-sm cursor-pointer transition-colors">
            <Icon name="camera" size={20} />
            <span>{photoUrl ? 'फोटो चुनी गई — बदलने के लिए क्लिक करें' : 'कैमरा / गैलरी से फोटो चुनें'}</span>
            <input type="file" accept="image/*" capture="environment" onChange={handlePhotoChange} className="hidden" />
          </label>
          {photoUrl && (
            <div className="mt-2.5 flex items-center justify-between bg-purple-50 p-2.5 rounded-2xl border border-purple-100">
              <img src={photoUrl} alt="दवाई के पत्ते का पूर्वावलोकन" className="w-14 h-14 rounded-xl object-cover" />
              <button
                type="button"
                onClick={() => setPhotoUrl('')}
                className="text-xs font-bold text-rose-600 px-3 py-1.5 cursor-pointer"
              >
                फोटो हटाएं
              </button>
            </div>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-purple-700 hover:bg-purple-800 text-white py-4 rounded-2xl font-extrabold text-lg shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-colors"
        >
          <Icon name="check" size={20} /> दवाई सहेजें
        </button>
      </form>
    </div>
  );
}

/* ============================================================================
   SYMPTOM VIEW (लक्षण से दवाई ढूंढें)
============================================================================ */
function SymptomView({ myMedicines, showToast }) {
  const [query, setQuery] = useState('');
  const [listening, setListening] = useState(false);

  const startVoiceSearch = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      showToast('आपके ब्राउज़र में आवाज़ इनपुट उपलब्ध नहीं है। कृपया लिखें।', 'error');
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognition.lang = 'hi-IN';
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      setListening(true);
      showToast('बोलिए... (जैसे: बुखार, सर्दी, गैस)', 'info');

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setQuery(transcript);
        setListening(false);
        showToast(`सुना गया: "${transcript}"`, 'success');
      };

      recognition.onerror = () => {
        setListening(false);
        showToast('आवाज़ समझ नहीं आई, दोबारा बोलें या लिखें।', 'error');
      };

      recognition.onend = () => {
        setListening(false);
      };

      recognition.start();
    } catch {
      setListening(false);
      showToast('माइक शुरू नहीं हो पाया।', 'error');
    }
  };

  const matched = query.trim()
    ? MEDICINES_DB.filter((m) =>
        m.keywords.some(
          (k) => query.toLowerCase().includes(k.toLowerCase()) || k.toLowerCase().includes(query.toLowerCase())
        )
      )
    : [];
  const inBox = matched.filter((dbMed) =>
    myMedicines.some((myMed) =>
      dbMed.matchKeys.some((key) => myMed.name.toLowerCase().includes(key.toLowerCase()))
    )
  );

  return (
    <div className="space-y-5 pt-2">
      <div className="bg-white p-6 rounded-3xl shadow-sm border border-purple-100 space-y-4">
        <div>
          <h2 className="text-2xl font-extrabold text-gray-900">लक्षण से दवाई ढूंढें</h2>
          <p className="text-sm text-gray-500 mt-0.5">लिखें या माइक दबाकर बोलें</p>
        </div>

        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="लिखें: बुखार, सर्दी, गैस..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 px-4 py-3.5 bg-white border-2 border-purple-200 focus:border-purple-600 focus:outline-none rounded-2xl text-base font-medium text-gray-800"
          />
          <button
            type="button"
            onClick={startVoiceSearch}
            title="आवाज़ से लक्षण बोलें"
            className={`w-14 h-14 rounded-2xl font-bold flex items-center justify-center shrink-0 transition-all cursor-pointer shadow-md ${
              listening
                ? 'bg-rose-600 text-white animate-pulse ring-4 ring-rose-200'
                : 'bg-purple-700 hover:bg-purple-800 text-white'
            }`}
          >
            <Icon name="mic" size={22} />
          </button>
        </div>

        {listening && (
          <div className="bg-rose-50 border border-rose-200 text-rose-800 px-4 py-2.5 rounded-2xl text-xs font-bold">
            सुन रहा हूँ... अपनी तकलीफ़ बोलें (जैसे: &quot;बुखार है&quot;)
          </div>
        )}

        <div className="flex flex-wrap gap-2 pt-1">
          {['बुखार', 'सर्दी', 'गैस', 'सिर दर्द', 'बीपी', 'शुगर'].map((chip) => (
            <button
              key={chip}
              type="button"
              onClick={() => setQuery(chip)}
              className="text-xs font-bold bg-white hover:bg-purple-50 text-purple-700 border border-purple-200 px-3.5 py-1.5 rounded-full cursor-pointer transition-colors"
            >
              {chip}
            </button>
          ))}
        </div>
      </div>

      {query.trim() !== '' && (
        <div className="space-y-3">
          <h3 className="font-extrabold text-gray-800 px-1">आपके डिब्बे में उपलब्ध:</h3>
          {inBox.length > 0 ? (
            inBox.map((med) => (
              <div key={med.name} className="bg-emerald-50 border-2 border-emerald-200 p-5 rounded-3xl space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-extrabold text-emerald-950">{med.name}</h4>
                  <span className="text-xs font-extrabold bg-emerald-600 text-white px-2.5 py-1 rounded-full">डिब्बे में है</span>
                </div>
                <p className="text-sm text-gray-800"><strong>उपयोग:</strong> {med.use}</p>
                <p className="text-sm text-gray-800"><strong>कैसे लें:</strong> {med.howToTake}</p>
                <p className="text-xs text-rose-700 font-semibold"><strong>सावधानी:</strong> {med.precautions}</p>
              </div>
            ))
          ) : (
            <div className="bg-white p-6 rounded-3xl border text-center space-y-1">
              <p className="font-bold text-gray-800 text-sm">&quot;{query}&quot; के लिए आपके डिब्बे में कोई दवाई नहीं मिली।</p>
              <p className="text-xs text-gray-500">डॉक्टर से सलाह लें या +जोड़ें टैब से अपनी दवाई जोड़ें।</p>
            </div>
          )}
        </div>
      )}

      <div className="bg-amber-50/90 border border-amber-200 p-4 rounded-2xl flex items-start gap-3 text-sm text-gray-800 leading-relaxed">
        <Icon name="shield" size={22} className="shrink-0 text-amber-600 mt-0.5" />
        <p>
          <strong className="font-extrabold text-gray-900">चिकित्सा अस्वीकरण:</strong> मेडीअसिस्ट कोई दवाई नहीं लिखता। यह केवल आपके अपने दवाई के डिब्बे की जांच करता है और सामान्य जानकारी देता है। कृपया योग्य डॉक्टर से परामर्श लें।
        </p>
      </div>
    </div>
  );
}

/* ============================================================================
   FLU RISK VIEW (फ्लू जोखिम)
============================================================================ */
function FluRiskView({ showToast }) {
  const [speaking, setSpeaking] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [locationLabel, setLocationLabel] = useState('मैनपुरी, उत्तर प्रदेश');
  const [lastUpdated, setLastUpdated] = useState('अभी');
  const [weather, setWeather] = useState({ temp: 16, humidity: 78, aqi: 180 });

  const getPlaceName = async (lat, lon) => {
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}&accept-language=hi`,
        { headers: { Accept: 'application/json' } }
      );
      if (!res.ok) throw new Error('Geocoding failed');
      const data = await res.json();
      const addr = data?.address || {};
      const place =
        addr.city ||
        addr.town ||
        addr.village ||
        addr.county ||
        addr.state_district ||
        'वर्तमान स्थान';
      const state = addr.state || '';
      return state ? `${place}, ${state}` : place;
    } catch {
      return `${lat.toFixed(2)}°उ, ${lon.toFixed(2)}°पू`;
    }
  };

  const handleRefreshLocation = () => {
    setRefreshing(true);

    if (!('geolocation' in navigator)) {
      setTimeout(() => {
        setRefreshing(false);
        setLastUpdated(new Date().toLocaleTimeString('hi-IN', { hour: '2-digit', minute: '2-digit' }));
        showToast('स्थान का डेटा अपडेट किया गया (मैनपुरी, उत्तर प्रदेश)', 'info');
      }, 600);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;
        try {
          const [placeName, weatherRes, aqiRes] = await Promise.all([
            getPlaceName(latitude, longitude),
            fetch(
              `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m`
            ),
            fetch(
              `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${latitude}&longitude=${longitude}&current=us_aqi`
            ),
          ]);

          const wData = await weatherRes.json();
          const aData = await aqiRes.json();

          const newTemp = Math.round(wData?.current?.temperature_2m ?? 18);
          const newHum = Math.round(wData?.current?.relative_humidity_2m ?? 72);
          const newAqi = Math.round(aData?.current?.us_aqi ?? 165);

          setWeather({ temp: newTemp, humidity: newHum, aqi: newAqi });
          setLocationLabel(placeName);
          setLastUpdated(new Date().toLocaleTimeString('hi-IN', { hour: '2-digit', minute: '2-digit' }));
          showToast(`स्थान अपडेट हुआ: ${placeName}`, 'success');
        } catch {
          setLastUpdated(new Date().toLocaleTimeString('hi-IN', { hour: '2-digit', minute: '2-digit' }));
          showToast('मैनपुरी का मौसम डेटा अपडेट किया गया', 'info');
        } finally {
          setRefreshing(false);
        }
      },
      () => {
        setLocationLabel('मैनपुरी, उत्तर प्रदेश');
        setLastUpdated(new Date().toLocaleTimeString('hi-IN', { hour: '2-digit', minute: '2-digit' }));
        setRefreshing(false);
        showToast('स्थान अनुमति बंद है — मैनपुरी का डेटा अपडेट किया गया', 'info');
      },
      { timeout: 7000 }
    );
  };

  let score = 0;
  if (weather.aqi > 150) score += 30;
  else if (weather.aqi > 100) score += 15;
  if (weather.temp < 18) score += 25;
  else if (weather.temp < 22) score += 10;
  if (weather.humidity > 70) score += 20;
  else if (weather.humidity > 55) score += 10;
  score += 25;

  let level = 'मध्यम';
  let color = 'bg-amber-500 text-white';
  let border = 'border-amber-300 bg-amber-50';
  let desc = 'सावधान रहें, भीड़ वाली जगहों पर मास्क पहनें';

  if (score <= 35) {
    level = 'कम';
    color = 'bg-emerald-600 text-white';
    border = 'border-emerald-300 bg-emerald-50';
    desc = 'हवा साफ़ है, आज फ्लू का जोखिम कम है';
  } else if (score >= 65) {
    level = 'अधिक';
    color = 'bg-rose-600 text-white';
    border = 'border-rose-200 bg-rose-50/70';
    desc = 'आज फ्लू का जोखिम अधिक है! भीड़-भाड़ वाली जगहों से बचें';
  }

  const speakReport = () => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    setSpeaking(true);
    const utterance = new SpeechSynthesisUtterance(
      `मेडीअसिस्ट चेतावनी: ${locationLabel} में आज फ्लू का जोखिम ${level} है। तापमान ${weather.temp} डिग्री, नमी ${weather.humidity} प्रतिशत और वायु गुणवत्ता सूचकांक ${weather.aqi} है। सावधानी: भीड़ में मास्क पहनें, हाथ साफ़ रखें, और गर्म पानी पिएं।`
    );
    utterance.lang = 'hi-IN';
    utterance.rate = 0.9;
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="space-y-5 pt-2">
      <div className="bg-white p-6 rounded-3xl shadow-sm border border-purple-100 space-y-4">
        <div>
          <h2 className="text-xl font-extrabold text-gray-900 flex items-center gap-2">
            <Icon name="map" size={22} className="text-purple-700 shrink-0" /> {locationLabel}
          </h2>
          <p className="text-xs text-gray-500 mt-1">अपडेट: {lastUpdated}</p>
        </div>

        <div className="flex items-center gap-2.5 flex-wrap">
          <button
            type="button"
            onClick={handleRefreshLocation}
            disabled={refreshing}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold bg-indigo-50/80 text-indigo-800 border border-indigo-200 hover:bg-indigo-100 cursor-pointer"
          >
            <Icon name="refresh" size={14} className={refreshing ? 'animate-spin' : ''} />
            <span>{refreshing ? 'अपडेट हो रहा है...' : 'स्थान रीफ्रेश करें'}</span>
          </button>

          <button
            type="button"
            onClick={speakReport}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold cursor-pointer ${
              speaking ? 'bg-purple-700 text-white animate-pulse' : 'bg-purple-100/80 text-purple-800 hover:bg-purple-200/70'
            }`}
          >
            <Icon name="volume" size={14} />
            <span>{speaking ? 'बोल रहा है...' : 'रिपोर्ट सुनें'}</span>
          </button>
        </div>

        <div className="grid grid-cols-3 gap-3 pt-1">
          <div className="bg-purple-50/60 p-4 rounded-2xl text-center border border-purple-100">
            <p className="text-xs text-gray-500 font-medium">तापमान</p>
            <p className="text-xl font-extrabold text-gray-900 mt-1">{weather.temp}°से</p>
          </div>
          <div className="bg-purple-50/60 p-4 rounded-2xl text-center border border-purple-100">
            <p className="text-xs text-gray-500 font-medium">नमी</p>
            <p className="text-xl font-extrabold text-gray-900 mt-1">{weather.humidity}%</p>
          </div>
          <div className="bg-purple-50/60 p-4 rounded-2xl text-center border border-purple-100">
            <p className="text-xs text-gray-500 font-medium">वायु (AQI)</p>
            <p className="text-xl font-extrabold text-gray-900 mt-1">{weather.aqi}</p>
          </div>
        </div>

        <div className={`p-5 rounded-3xl border ${border} space-y-3`}>
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs font-extrabold uppercase tracking-wide text-gray-600">
              जोखिम स्कोर: {score}/100
            </span>
            <span className={`px-4 py-1.5 rounded-full text-xs font-extrabold tracking-wide ${color}`}>
              {level} जोखिम
            </span>
          </div>
          <p className="text-lg font-extrabold text-gray-900 leading-snug">{desc}</p>
        </div>

        <div className="bg-purple-50/50 p-4 rounded-2xl space-y-2 border border-purple-100">
          <p className="font-extrabold text-purple-950 text-sm">सुझाई गई सावधानियां:</p>
          <ul className="text-xs text-gray-800 space-y-1.5 list-disc list-inside font-medium leading-relaxed">
            <li>
              <strong className="font-bold text-gray-900">मास्क पहनें:</strong> भीड़-भाड़ वाले इलाकों में मास्क ज़रूर पहनें।
            </li>
            <li>
              <strong className="font-bold text-gray-900">हाथ साफ़ रखें:</strong> हाथों को बार-बार साबुन से धोएं।
            </li>
            <li>
              <strong className="font-bold text-gray-900">ठंड से बचें:</strong> दिन भर गर्म पानी पिएं और शरीर गर्म रखें।
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-300 p-4 rounded-2xl flex gap-3 text-xs text-amber-950 leading-relaxed">
        <Icon name="shield" size={20} className="shrink-0 text-amber-600" />
        <p>
          <strong>चिकित्सा अस्वीकरण:</strong> यह केवल पर्यावरण के आंकड़ों पर आधारित एक अनुमान है, चिकित्सीय निदान नहीं। यदि आपको बुखार है, तो डॉक्टर से सलाह लें।
        </p>
      </div>
    </div>
  );
}

/* ============================================================================
   REPORT VIEW (साप्ताहिक रिपोर्ट)
============================================================================ */
function ReportView({ medicines, logs, showToast }) {
  const last7Days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (6 - i));
    return d.toISOString().split('T')[0];
  });
  const taken = logs.filter((l) => l.status === 'Taken').length;
  const total = logs.filter((l) => l.status === 'Taken' || l.status === 'Missed').length;
  const compliance = total > 0 ? Math.round((taken / total) * 100) : 100;

  const makePDF = () => {
    try {
      const medRows = medicines
        .map(
          (m, idx) =>
            `<tr><td style="padding:8px;border:1px solid #ddd;">${idx + 1}</td><td style="padding:8px;border:1px solid #ddd;">${m.name}</td><td style="padding:8px;border:1px solid #ddd;">${m.dosage}</td><td style="padding:8px;border:1px solid #ddd;">${m.time}</td><td style="padding:8px;border:1px solid #ddd;">${m.stockLeft}</td></tr>`
        )
        .join('');

      const reportHtml = `
        <!DOCTYPE html>
        <html lang="hi">
          <head>
            <meta charset="UTF-8" />
            <title>मेडीअसिस्ट - मरीज़ की दवाई रिपोर्ट</title>
            <style>
              body { font-family: sans-serif; padding: 24px; color: #111827; }
              h1 { color: #5b21b6; margin-bottom: 4px; }
              table { width: 100%; border-collapse: collapse; margin-top: 16px; }
              th { background: #f3e8ff; text-align: left; padding: 8px; border: 1px solid #ddd; }
            </style>
          </head>
          <body>
            <h1>मेडीअसिस्ट - मरीज़ की दवाई रिपोर्ट</h1>
            <p><strong>तारीख:</strong> ${new Date().toLocaleDateString('hi-IN')}</p>
            <p><strong>अनुपालन स्कोर:</strong> ${compliance}% (${total} में से ${taken} खुराक ली गईं)</p>
            <table>
              <thead>
                <tr><th>क्र.</th><th>दवाई का नाम</th><th>खुराक</th><th>समय</th><th>बचा स्टॉक</th></tr>
              </thead>
              <tbody>${medRows}</tbody>
            </table>
          </body>
        </html>
      `;

      const blob = new Blob([reportHtml], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      const printWindow = window.open(url, '_blank', 'noopener,noreferrer');

      if (printWindow) {
        printWindow.onload = () => {
          printWindow.focus();
          printWindow.print();
          setTimeout(() => URL.revokeObjectURL(url), 2000);
        };
        showToast('डॉक्टर रिपोर्ट तैयार है — पीडीएफ सहेजें या प्रिंट करें!', 'success');
      } else {
        const link = document.createElement('a');
        link.href = url;
        link.download = 'MEDIASSIST_Doctor_Report_Hindi.html';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setTimeout(() => URL.revokeObjectURL(url), 2000);
        showToast('डॉक्टर रिपोर्ट डाउनलोड हो गई!', 'success');
      }
    } catch {
      showToast('रिपोर्ट बनाने में दिक्कत आई।', 'error');
    }
  };

  return (
    <div className="space-y-5 pt-2">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-extrabold text-gray-900">साप्ताहिक रिपोर्ट</h2>
        <button
          type="button"
          onClick={makePDF}
          className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-2.5 rounded-2xl font-bold text-sm flex items-center gap-2 cursor-pointer shadow-sm"
        >
          <Icon name="pdf" size={16} /> डॉक्टर पीडीएफ
        </button>
      </div>

      <div className="bg-gradient-to-r from-[#4c1d95] via-[#5b21b6] to-[#3730a3] text-white p-6 rounded-3xl shadow-md">
        <p className="text-purple-200 text-xs font-bold tracking-wider">अनुपालन स्कोर</p>
        <p className="text-5xl font-extrabold mt-1">{compliance}%</p>
        <p className="text-sm text-purple-200 mt-1.5 font-medium">
          {total} दर्ज खुराकों में से {taken} ली गईं
        </p>
      </div>

      <div className="bg-white p-6 rounded-3xl shadow-sm border border-purple-100">
        <h3 className="text-lg font-extrabold text-gray-900 mb-5">पिछले 7 दिनों का चार्ट</h3>
        <div className="grid grid-cols-7 gap-2 items-end text-center">
          {last7Days.map((d) => {
            const dayLogs = logs.filter((l) => l.date === d);
            const dayTaken = dayLogs.filter((l) => l.status === 'Taken').length;
            const dayMissed = dayLogs.filter((l) => l.status === 'Missed').length;
            let barClass = 'h-7 bg-gray-200';
            if (dayTaken > 0 && dayMissed === 0) barClass = 'h-24 bg-emerald-500';
            else if (dayTaken > 0 && dayMissed > 0) barClass = 'h-16 bg-amber-400';
            else if (dayMissed > 0) barClass = 'h-10 bg-rose-500';

            return (
              <div key={d} className="flex flex-col items-center gap-2">
                <div className="h-24 flex items-end justify-center w-full">
                  <div className={`w-6 ${barClass} rounded-t-xl transition-all`} />
                </div>
                <span className="text-xs font-semibold text-gray-500">
                  {d.slice(8, 10)}/{d.slice(5, 7)}
                </span>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center gap-5 mt-6 text-xs font-bold text-gray-700">
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" /> सभी ली गईं
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" /> आंशिक
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" /> छूट गईं
          </span>
        </div>
      </div>
    </div>
  );
}

/* ============================================================================
   FAMILY VIEW (परिवार देखभाल डैशबोर्ड)
============================================================================ */
function FamilyView({ medicines, logs, todayStr, familyPhone, setFamilyPhone }) {
  const cleanPhone = familyPhone.replace(/\D/g, '');

  const getStatusBadge = (medId) => {
    const todayLog = logs.find((l) => l.medicineId === medId && l.date === todayStr);
    if (!todayLog) {
      return {
        label: 'बाकी है',
        icon: '⏳',
        cls: 'bg-gray-100 text-gray-600',
      };
    }
    if (todayLog.status === 'Taken') {
      return {
        label: 'ले ली गई',
        icon: '✅',
        cls: 'bg-emerald-100 text-emerald-800',
      };
    }
    if (todayLog.status === 'Missed') {
      return {
        label: 'छूट गई',
        icon: '❌',
        cls: 'bg-rose-100 text-rose-800',
      };
    }
    return {
      label: 'टाली गई',
      icon: '⏰',
      cls: 'bg-amber-100 text-amber-800',
    };
  };

  return (
    <div className="space-y-5 pt-2">
      <div className="bg-purple-50/90 border border-purple-200 p-6 rounded-3xl space-y-3 shadow-xs">
        <h2 className="text-2xl font-extrabold text-purple-950">परिवार देखभाल डैशबोर्ड</h2>
        <p className="text-sm text-purple-800 font-medium leading-relaxed">
          माँ/पापा ने आज दवाई ली या नहीं — लाइव स्थिति देखें और खुराक छूटने पर संदेश भेजें।
        </p>
        <div className="pt-1">
          <label className="text-xs font-extrabold text-purple-900 tracking-wider">
            परिवार के सदस्य का मोबाइल / व्हाट्सऐप नंबर
          </label>
          <input
            type="tel"
            value={familyPhone}
            onChange={(e) => setFamilyPhone(e.target.value)}
            placeholder="8756622554"
            className="mt-1.5 w-full bg-white p-4 rounded-2xl border border-purple-200 font-extrabold text-xl text-gray-900 focus:outline-none focus:border-purple-600"
          />
        </div>
      </div>

      <div className="bg-white p-6 rounded-3xl shadow-sm border border-purple-100">
        <h3 className="text-xl font-extrabold text-gray-900 mb-4">आज की लाइव स्थिति</h3>
        <div className="divide-y divide-gray-100">
          {medicines.map((med) => {
            const badge = getStatusBadge(med.id);
            const alertHref = `https://wa.me/91${cleanPhone || '8756622554'}?text=${encodeURIComponent(
              `मेडीअसिस्ट सूचना: आज की दवाई "${med.name}" (${med.dosage} - ${med.time}) की स्थिति "${badge.label}" है।`
            )}`;

            return (
              <div key={med.id} className="py-4 first:pt-0 last:pb-0 flex items-center justify-between gap-3">
                <div>
                  <p className="text-lg font-extrabold text-gray-900">{med.name}</p>
                  <p className="text-sm text-gray-500 font-medium mt-0.5">
                    {med.dosage} • ⏰ {med.time}
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  {badge.label === 'छूट गई' && (
                    <a
                      href={alertHref}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1.5 rounded-full text-xs font-extrabold flex items-center gap-1"
                    >
                      <Icon name="send" size={12} /> संदेश भेजें
                    </a>
                  )}
                  <span className={`px-4 py-1.5 rounded-full text-sm font-bold ${badge.cls}`}>
                    {badge.icon} {badge.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <a
        href={`tel:${cleanPhone || '8756622554'}`}
        className="w-full bg-[#0f172a] hover:bg-slate-800 text-white py-4 px-6 rounded-2xl font-extrabold text-lg shadow-lg flex items-center justify-center gap-3 transition-colors"
      >
        <Icon name="call" size={22} />
        <span>सीधी कॉल करें</span>
      </a>
    </div>
  );
}