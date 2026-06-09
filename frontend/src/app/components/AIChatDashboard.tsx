import { useState } from 'react';

const FONT_CLASH = "'Neue Montreal', 'Clash Display', sans-serif";
const FONT_INTER = "'Inter', sans-serif";
const BTN_GRADIENT = 'linear-gradient(90deg, #1A4B6E, #0FA88A)';

/* ── Icons ───────────────────────────────────────────────────── */
function BotIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="8" width="18" height="12" rx="3" stroke="white" strokeWidth="1.8" />
      <circle cx="9" cy="14" r="1.5" fill="white" />
      <circle cx="15" cy="14" r="1.5" fill="white" />
      <path d="M12 4v4" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="12" cy="3.5" r="1" fill="white" />
    </svg>
  );
}

function BubbleIcon({ active }: { active: boolean }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: 1 }}>
      <path d="M20 2H4a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" stroke={active ? '#0FA88A' : '#9CA3AF'} strokeWidth="1.6" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
      <circle cx="11" cy="11" r="8" stroke="#9CA3AF" strokeWidth="2" />
      <path d="M21 21l-4.35-4.35" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function PaperclipIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" stroke="#6B7A8D" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
      <path d="M22 2L11 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 2L15 22 11 13 2 9l20-7z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ── AI Chat Dashboard ───────────────────────────────────────── */
export function AIChatDashboard() {
  const [selectedConv, setSelectedConv] = useState(0);
  const [input, setInput] = useState('');

  const conversations = [
    { id: 0, title: 'Q2 Payroll Summary',            time: '2h ago' },
    { id: 1, title: 'Leave analysis - May',           time: 'Yesterday' },
    { id: 2, title: 'New hire onboarding checklist',  time: '2d ago' },
    { id: 3, title: 'Performance review cycle',       time: '1w ago' },
  ];

  const chips = [
    'Analyze leave patterns', 'Generate HR report', 'Check attendance',
    'Payroll summary', 'Generate work certificate',
    'Employee insights', 'Recruitment analysis', 'Performance review help',
  ];

  const handleSend = () => {
    if (input.trim()) setInput('');
  };

  return (
    <div style={{ display: 'flex', height: '100%', backgroundColor: '#F8FAFC', fontFamily: FONT_INTER }}>

      {/* ── Left sidebar ─────────────────────────────────────── */}
      <div style={{ width: 190, flexShrink: 0, backgroundColor: '#FFFFFF', borderRight: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column' }}>

        {/* Search */}
        <div style={{ padding: '12px 12px 6px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 7, height: 32, backgroundColor: '#F1F5F9', borderRadius: 7, padding: '0 10px', border: '1px solid #E2E8F0' }}>
            <SearchIcon />
            <input
              style={{ flex: 1, background: 'none', border: 'none', outline: 'none', fontSize: 11, color: '#374151', fontFamily: FONT_INTER }}
              placeholder="Search..."
            />
          </div>
        </div>

        {/* New Conversation */}
        <div style={{ padding: '4px 14px 10px' }}>
          <button
            style={{ display: 'flex', alignItems: 'center', gap: 5, background: 'none', border: 'none', cursor: 'pointer', color: '#0FA88A', fontSize: 12, fontWeight: 500, fontFamily: FONT_INTER, padding: 0 }}
          >
            <span style={{ fontSize: 16, lineHeight: 1 }}>+</span> New Conversation
          </button>
        </div>

        {/* Recent label */}
        <div style={{ padding: '4px 14px 6px' }}>
          <span style={{ fontSize: 9, color: '#9CA3AF', letterSpacing: '0.10em', textTransform: 'uppercase', fontWeight: 600 }}>Recent</span>
        </div>

        {/* Conversation list */}
        <div style={{ flex: 1, overflowY: 'auto' }}>
          {conversations.map((c) => (
            <div
              key={c.id}
              onClick={() => setSelectedConv(c.id)}
              style={{
                display: 'flex', alignItems: 'flex-start', gap: 8, padding: '9px 14px',
                cursor: 'pointer',
                backgroundColor: selectedConv === c.id ? 'rgba(62,207,186,0.08)' : 'transparent',
                borderLeft: selectedConv === c.id ? '2px solid #3ECFBA' : '2px solid transparent',
                borderBottom: '1px solid #F1F5F9',
                transition: 'background-color 0.12s',
              }}
              onMouseEnter={e => { if (selectedConv !== c.id) (e.currentTarget as HTMLDivElement).style.backgroundColor = '#F8FAFC'; }}
              onMouseLeave={e => { if (selectedConv !== c.id) (e.currentTarget as HTMLDivElement).style.backgroundColor = 'transparent'; }}
            >
              <BubbleIcon active={selectedConv === c.id} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 11, color: selectedConv === c.id ? '#1A2E45' : '#374151', fontWeight: selectedConv === c.id ? 500 : 400, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {c.title}
                </div>
                <div style={{ fontSize: 10, color: '#9CA3AF', marginTop: 2 }}>{c.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Main chat area ────────────────────────────────────── */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', backgroundColor: '#FFFFFF', minWidth: 0 }}>

        {/* Messages */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '20px 18px 10px' }}>

          {/* AI welcome message */}
          <div style={{ display: 'flex', gap: 10, marginBottom: 16 }}>
            <div style={{ width: 34, height: 34, borderRadius: 9, background: BTN_GRADIENT, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 2px 8px rgba(26,75,110,0.20)' }}>
              <BotIcon />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: '#1A2E45', marginBottom: 6, fontFamily: FONT_CLASH }}>HUMAI AI</div>
              <div style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 10, borderTopLeftRadius: 3, padding: '12px 14px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                <p style={{ fontSize: 12, color: '#374151', lineHeight: 1.65, margin: 0 }}>
                  Hello! I'm <strong style={{ color: '#0FA88A' }}>HUMAI AI</strong> Assistant. I can help you with HR analytics, leave analysis, payroll summaries, recruitment recommendations, performance reviews, and more. How can I assist you today?
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Suggestion chips */}
        <div style={{ padding: '10px 18px 8px', borderTop: '1px solid #F1F5F9' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {chips.map((c) => (
              <button
                key={c}
                onClick={() => setInput(c)}
                style={{
                  height: 28, padding: '0 11px',
                  border: '1px solid #E2E8F0', borderRadius: 999,
                  backgroundColor: '#FFFFFF', fontSize: 10, color: '#374151',
                  cursor: 'pointer', whiteSpace: 'nowrap', fontFamily: FONT_INTER,
                  transition: 'border-color 0.12s, color 0.12s',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = '#3ECFBA';
                  (e.currentTarget as HTMLButtonElement).style.color = '#0FA88A';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = '#E2E8F0';
                  (e.currentTarget as HTMLButtonElement).style.color = '#374151';
                }}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Input bar */}
        <div style={{ padding: '8px 18px 16px', borderTop: '1px solid #E2E8F0', flexShrink: 0, display: 'flex', alignItems: 'center', gap: 8 }}>
          <button style={{ width: 32, height: 32, borderRadius: 7, border: '1px solid #E2E8F0', backgroundColor: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0 }}>
            <PaperclipIcon />
          </button>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') handleSend(); }}
            placeholder="Ask HUMAI AI anything about your HR data..."
            style={{
              flex: 1, height: 38,
              border: '1px solid #E2E8F0', borderRadius: 8,
              padding: '0 14px', fontSize: 12, color: '#374151',
              outline: 'none', backgroundColor: '#F8FAFC',
              fontFamily: FONT_INTER,
            }}
            onFocus={e => { (e.currentTarget as HTMLInputElement).style.borderColor = '#0FA88A'; (e.currentTarget as HTMLInputElement).style.boxShadow = '0 0 0 3px rgba(15,168,138,0.12)'; }}
            onBlur={e => { (e.currentTarget as HTMLInputElement).style.borderColor = '#E2E8F0'; (e.currentTarget as HTMLInputElement).style.boxShadow = 'none'; }}
          />
          <button
            onClick={handleSend}
            style={{
              height: 38, padding: '0 16px',
              background: BTN_GRADIENT,
              border: 'none', borderRadius: 8,
              color: '#FFFFFF', fontSize: 12, fontWeight: 600,
              cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6,
              flexShrink: 0, fontFamily: FONT_INTER,
              boxShadow: '0 2px 8px rgba(26,75,110,0.22)',
            }}
          >
            <SendIcon /> Send
          </button>
        </div>

      </div>
    </div>
  );
}
