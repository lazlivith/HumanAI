// AI Chatbot Assistant Dashboard — wireframe UX

import { useState } from 'react';

const CONVERSATIONS = [
  { id: 1, title: 'Payroll discrepancy June', time: '10:32 AM', preview: 'Can you check the deduction for EMP-007...', active: true },
  { id: 2, title: 'Leave policy clarification', time: 'Yesterday', preview: 'What is the policy on carrying over...', active: false },
  { id: 3, title: 'Onboarding checklist', time: 'Yesterday', preview: 'Generate an onboarding plan for a new...', active: false },
  { id: 4, title: 'Headcount report Q2', time: 'Jun 1', preview: 'Summarize headcount changes since Q1...', active: false },
  { id: 5, title: 'Performance review dates', time: 'May 30', preview: 'When are the Q2 review deadlines?', active: false },
  { id: 6, title: 'New hire announcement', time: 'May 28', preview: 'Draft an announcement for 3 new hires...', active: false },
];

const MESSAGES = [
  { role: 'user' as const, text: 'Can you check the payroll deduction discrepancy for EMP-007 in June 2026?' },
  { role: 'ai' as const, text: 'I found a discrepancy in EMP-007\'s June payroll. The deduction applied was $1,240 instead of the expected $980. This appears to be related to a benefits adjustment that was not properly accounted for. I recommend reviewing the benefits election change submitted on May 29.\n\nWould you like me to generate a correction request or escalate this to the payroll team?' },
  { role: 'user' as const, text: 'Yes, generate a correction request and flag it for review.' },
  { role: 'ai' as const, text: 'Done. I\'ve generated a payroll correction request (REQ-2026-0042) for EMP-007 and flagged it for Finance review. The request includes:\n\n• Original deduction: $1,240\n• Corrected deduction: $980\n• Difference: $260 to be reimbursed\n• Expected resolution: June 10, 2026\n\nThe Finance team has been notified. You can track this in Payroll → Corrections.' },
];

const QUICK_ACTIONS = [
  'Add new employee',
  'Generate payroll report',
  'Approve leave request',
  'Schedule performance review',
  'Export headcount data',
  'Send announcement',
];

const SUGGESTED_PROMPTS = [
  'Summarize this week\'s HR activities',
  'List employees with pending onboarding tasks',
  'Generate a recruitment funnel report',
  'Show compliance training completion status',
  'Draft a leave policy reminder',
];

export function AIChatbotDashboard() {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="flex-1 flex overflow-hidden">

      {/* ── Left: Conversation list ─────────────────────── */}
      <aside className="w-64 flex-shrink-0 border-r-2 border-neutral-300 bg-white flex flex-col">
        {/* Header */}
        <div className="px-4 py-3 border-b-2 border-neutral-300 flex items-center justify-between">
          <span className="text-sm text-neutral-800">AI Assistant</span>
          <button className="h-7 px-3 border border-neutral-700 bg-neutral-700 rounded-sm text-xs text-white">+ New</button>
        </div>

        {/* Search */}
        <div className="px-3 py-2 border-b border-neutral-200">
          <div className="flex items-center border border-neutral-300 bg-neutral-50 rounded-sm h-8 px-3 gap-2">
            <div className="w-3 h-3 border border-neutral-400 rounded-full flex-shrink-0" />
            <span className="text-xs text-neutral-400">Search conversations...</span>
          </div>
        </div>

        {/* Conversation list */}
        <div className="flex-1 overflow-auto">
          {CONVERSATIONS.map((conv) => (
            <div
              key={conv.id}
              className={`px-4 py-3 border-b border-neutral-100 cursor-pointer ${conv.active ? 'bg-neutral-100' : 'hover:bg-neutral-50'}`}
            >
              <div className="flex items-center justify-between mb-0.5">
                <span className="text-xs text-neutral-700 truncate">{conv.title}</span>
                <span className="text-xs text-neutral-400 flex-shrink-0 ml-2">{conv.time}</span>
              </div>
              <div className="text-xs text-neutral-400 truncate">{conv.preview}</div>
            </div>
          ))}
        </div>

        {/* Bottom stats */}
        <div className="p-4 border-t-2 border-neutral-300 flex flex-col gap-2">
          <div className="text-xs text-neutral-500">AI Usage this month</div>
          <div className="h-1.5 w-full bg-neutral-200 rounded-sm relative">
            <div className="absolute inset-y-0 left-0 bg-neutral-500 rounded-sm" style={{ width: '62%' }} />
          </div>
          <div className="text-xs text-neutral-400">310 / 500 messages</div>
        </div>
      </aside>

      {/* ── Center: Chat area ───────────────────────────── */}
      <div className="flex-1 flex flex-col bg-neutral-50">
        {/* Chat header */}
        <div className="h-14 bg-white border-b-2 border-neutral-300 px-6 flex items-center justify-between flex-shrink-0">
          <div>
            <div className="text-sm text-neutral-800">Payroll discrepancy June</div>
            <div className="text-xs text-neutral-400">HUMAI AI · HR Specialist mode</div>
          </div>
          <div className="flex items-center gap-2">
            <button className="h-8 px-3 border border-neutral-300 bg-white rounded-sm text-xs text-neutral-600">Share</button>
            <button className="h-8 px-3 border border-neutral-300 bg-white rounded-sm text-xs text-neutral-600">Export</button>
            <button className="w-8 h-8 border border-neutral-300 bg-white rounded-sm flex items-center justify-center">
              <div className="flex flex-col gap-0.5">
                <div className="w-1 h-1 rounded-full bg-neutral-400" />
                <div className="w-1 h-1 rounded-full bg-neutral-400" />
                <div className="w-1 h-1 rounded-full bg-neutral-400" />
              </div>
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-auto p-6 flex flex-col gap-5">
          {MESSAGES.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              {msg.role === 'ai' && (
                <div className="w-8 h-8 border-2 border-neutral-400 bg-neutral-200 rounded-sm flex-shrink-0 mr-3 flex items-center justify-center">
                  <div className="w-3 h-3 border border-neutral-500" />
                </div>
              )}
              <div
                className={`max-w-lg rounded-sm p-4 ${
                  msg.role === 'user'
                    ? 'bg-neutral-700 border-2 border-neutral-700'
                    : 'bg-white border-2 border-neutral-300'
                }`}
              >
                <p className={`text-xs whitespace-pre-line leading-relaxed ${msg.role === 'user' ? 'text-white' : 'text-neutral-700'}`}>
                  {msg.text}
                </p>
              </div>
              {msg.role === 'user' && (
                <div className="w-8 h-8 rounded-full border-2 border-neutral-400 bg-neutral-200 flex-shrink-0 ml-3" />
              )}
            </div>
          ))}

          {/* Typing indicator */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 border-2 border-neutral-400 bg-neutral-200 rounded-sm flex-shrink-0 flex items-center justify-center">
              <div className="w-3 h-3 border border-neutral-500" />
            </div>
            <div className="bg-white border-2 border-neutral-300 rounded-sm px-4 py-3 flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
              <div className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
              <div className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
            </div>
          </div>
        </div>

        {/* Input area */}
        <div className="bg-white border-t-2 border-neutral-300 p-4 flex-shrink-0">
          {/* Suggested prompts */}
          <div className="flex items-center gap-2 mb-3 overflow-x-auto">
            <span className="text-xs text-neutral-400 flex-shrink-0">Suggestions:</span>
            {SUGGESTED_PROMPTS.slice(0, 3).map((p) => (
              <button key={p} className="flex-shrink-0 h-7 px-3 border border-neutral-300 rounded-sm text-xs text-neutral-600 hover:bg-neutral-50">
                {p}
              </button>
            ))}
          </div>

          {/* Input row */}
          <div className="flex items-end gap-3">
            <div className="flex-1 border-2 border-neutral-300 rounded-sm bg-neutral-50 min-h-10 px-4 py-3 flex items-center">
              <span className="text-xs text-neutral-400">{inputValue || 'Ask HUMAI AI about your HR data...'}</span>
            </div>
            {/* Attach */}
            <button className="w-10 h-10 border-2 border-neutral-300 bg-white rounded-sm flex items-center justify-center flex-shrink-0">
              <div className="w-4 h-5 border-2 border-neutral-400 rounded-sm flex items-center justify-center">
                <div className="w-1.5 h-2.5 border border-neutral-400" />
              </div>
            </button>
            {/* Send */}
            <button className="h-10 px-5 border-2 border-neutral-700 bg-neutral-700 rounded-sm text-xs text-white flex-shrink-0">
              Send
            </button>
          </div>

          <div className="mt-2 text-xs text-neutral-400 text-center">
            HUMAI AI may make mistakes. Always verify critical HR decisions independently.
          </div>
        </div>
      </div>

      {/* ── Right: Insights panel ────────────────────────── */}
      <aside className="w-64 flex-shrink-0 border-l-2 border-neutral-300 bg-white flex flex-col overflow-auto">

        {/* AI Insights */}
        <div className="px-4 py-3 border-b-2 border-neutral-300">
          <span className="text-sm text-neutral-800">AI Insights</span>
        </div>
        <div className="p-4 border-b border-neutral-200 flex flex-col gap-3">
          {[
            { label: 'Payroll anomaly detected', type: 'Alert', desc: 'EMP-007 deduction mismatch of $260 identified' },
            { label: 'Leave spike — Engineering', type: 'Trend', desc: '3 overlapping leave requests Jun 10–14' },
            { label: 'Training compliance gap', type: 'Compliance', desc: '18 employees overdue on Cybersecurity module' },
          ].map((insight) => (
            <div key={insight.label} className="border border-neutral-300 rounded-sm p-3">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-neutral-700">{insight.label}</span>
                <span className="text-xs border border-neutral-400 px-1 rounded-sm text-neutral-600">{insight.type}</span>
              </div>
              <div className="text-xs text-neutral-400">{insight.desc}</div>
              <button className="mt-2 text-xs text-neutral-600 underline">Investigate</button>
            </div>
          ))}
        </div>

        {/* Quick HR Actions */}
        <div className="px-4 py-3 border-b border-neutral-200">
          <span className="text-xs text-neutral-600">Quick HR Actions</span>
        </div>
        <div className="p-4 flex flex-col gap-2">
          {QUICK_ACTIONS.map((action) => (
            <button
              key={action}
              className="w-full h-9 border border-neutral-300 rounded-sm text-xs text-neutral-600 hover:bg-neutral-50 flex items-center gap-2 px-3"
            >
              <div className="w-3 h-3 border border-neutral-400 flex-shrink-0" />
              {action}
            </button>
          ))}
        </div>

        {/* Data context */}
        <div className="px-4 py-3 border-t border-neutral-200">
          <div className="text-xs text-neutral-600 mb-2">Data Context</div>
          <div className="flex flex-col gap-1">
            {[
              { label: 'Employee data', status: 'Connected' },
              { label: 'Payroll system', status: 'Connected' },
              { label: 'Leave records', status: 'Connected' },
              { label: 'Training LMS', status: 'Syncing' },
            ].map((d) => (
              <div key={d.label} className="flex items-center justify-between py-1">
                <span className="text-xs text-neutral-500">{d.label}</span>
                <span className={`text-xs ${d.status === 'Connected' ? 'text-neutral-700' : 'text-neutral-400'}`}>{d.status}</span>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}
