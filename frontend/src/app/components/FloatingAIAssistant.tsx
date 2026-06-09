// Floating AI Assistant — Wireframe Version
import { useState } from 'react';

interface FloatingAIAssistantProps {
  variant?: 'wireframe' | 'modern';
}

export function FloatingAIAssistant({ variant = 'wireframe' }: FloatingAIAssistantProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const SUGGESTED_PROMPTS = [
    'Combien de congés me restent-ils ?',
    'Télécharger mon bulletin de paie',
    'Générer une attestation de travail',
    'Générer un rapport RH',
    'Planifier un entretien',
  ];

  const CONVERSATION_HISTORY = [
    { id: 1, title: 'Demande de congés', time: '10:32', preview: 'Combien de jours...', active: false },
    { id: 2, title: 'Bulletin de paie', time: 'Hier', preview: 'Télécharger mon...', active: false },
    { id: 3, title: 'Attestation travail', time: 'Hier', preview: 'Générer une attestation...', active: false },
  ];

  const MESSAGES = [
    { role: 'user' as const, text: 'Combien de congés me restent-ils ?' },
    { role: 'ai' as const, text: 'Bonjour ! D\'après vos données RH, vous avez actuellement :\n\n• 12 jours de congés payés restants\n• 3 jours de RTT disponibles\n• Total : 15 jours de congés\n\nVotre période de référence se termine le 31 août 2026.' },
  ];

  if (variant === 'modern') {
    return (
      <>
        {/* Floating Button — Modern */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`fixed right-6 bottom-6 w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 z-40 ${
            isOpen
              ? 'bg-blue-600 hover:bg-blue-700'
              : 'bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800'
          }`}
          style={{ boxShadow: '0 4px 20px rgba(37, 99, 235, 0.4)' }}
        >
          {isOpen ? (
            <div className="text-white text-2xl">×</div>
          ) : (
            <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          )}
        </button>

        {/* Slide-out Panel — Modern */}
        <div
          className={`fixed top-0 right-0 h-full bg-white shadow-2xl transition-all duration-300 ease-in-out z-50 flex flex-col ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ width: '450px' }}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-5 flex items-center justify-between border-b border-blue-500">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h2 className="text-white font-semibold">HUMAI AI Assistant</h2>
                <p className="text-blue-100 text-xs">Votre assistant RH intelligent</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center text-white transition-colors"
            >
              <div className="text-xl">×</div>
            </button>
          </div>

          {/* Search Conversation */}
          <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher une conversation..."
                className="w-full h-10 pl-10 pr-4 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <svg className="w-4 h-4 absolute left-3 top-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Conversation History */}
          <div className="border-b border-gray-200">
            <div className="px-4 py-2 bg-gray-50">
              <span className="text-xs font-medium text-gray-600">Historique des conversations</span>
            </div>
            <div className="max-h-32 overflow-y-auto">
              {CONVERSATION_HISTORY.map((conv) => (
                <div
                  key={conv.id}
                  className="px-4 py-2.5 hover:bg-gray-50 cursor-pointer border-b border-gray-100 transition-colors"
                >
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="text-sm text-gray-700 font-medium">{conv.title}</span>
                    <span className="text-xs text-gray-400">{conv.time}</span>
                  </div>
                  <div className="text-xs text-gray-500 truncate">{conv.preview}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Suggested Prompts */}
          <div className="px-4 py-3 border-b border-gray-200 bg-blue-50/50">
            <div className="text-xs font-medium text-gray-600 mb-2">Suggestions</div>
            <div className="flex flex-col gap-2">
              {SUGGESTED_PROMPTS.map((prompt) => (
                <button
                  key={prompt}
                  className="text-left px-3 py-2 rounded-lg border border-blue-200 bg-white text-sm text-gray-700 hover:bg-blue-50 hover:border-blue-300 transition-all"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
            {MESSAGES.map((msg, i) => (
              <div key={i} className={`mb-4 flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.role === 'ai' && (
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center mr-2 flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                )}
                <div
                  className={`max-w-xs rounded-2xl px-4 py-2.5 ${
                    msg.role === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-white border border-gray-200 text-gray-800'
                  }`}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-line">{msg.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-200">
            <div className="flex items-end gap-2">
              <button className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors flex-shrink-0">
                <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                </svg>
              </button>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Posez votre question..."
                className="flex-1 h-10 px-4 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="w-10 h-10 rounded-lg bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition-colors flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-2 text-center">
              HUMAI AI peut faire des erreurs. Vérifiez toujours les informations importantes.
            </p>
          </div>
        </div>

        {/* Backdrop */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-300"
            onClick={() => setIsOpen(false)}
          />
        )}
      </>
    );
  }

  // Wireframe version
  return (
    <>
      {/* Floating Button — Wireframe */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed right-6 bottom-6 w-14 h-14 rounded-full border-4 bg-white flex items-center justify-center transition-all duration-300 z-40 ${
          isOpen ? 'border-neutral-700' : 'border-neutral-400 hover:border-neutral-600'
        }`}
        style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)' }}
      >
        {isOpen ? (
          <div className="text-neutral-700 text-2xl font-bold">×</div>
        ) : (
          <div className="w-7 h-7 border-2 border-neutral-600 rounded-sm flex items-center justify-center">
            <div className="w-3 h-3 border border-neutral-500" />
          </div>
        )}
      </button>

      {/* Slide-out Panel — Wireframe */}
      <div
        className={`fixed top-0 right-0 h-full bg-white border-l-4 border-neutral-400 transition-all duration-300 ease-in-out z-50 flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ width: '450px', boxShadow: '-4px 0 20px rgba(0, 0, 0, 0.1)' }}
      >
        {/* Header */}
        <div className="bg-white px-6 py-4 flex items-center justify-between border-b-4 border-neutral-400">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 border-4 border-neutral-700 bg-neutral-200 rounded-sm flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-neutral-600" />
            </div>
            <div>
              <h2 className="text-sm font-mono text-neutral-800 tracking-wide">HUMAI AI ASSISTANT</h2>
              <p className="text-xs text-neutral-500 font-mono">HR Specialist Mode</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 border-2 border-neutral-400 rounded-sm hover:bg-neutral-100 flex items-center justify-center transition-colors"
          >
            <div className="text-xl text-neutral-600">×</div>
          </button>
        </div>

        {/* Search Conversation */}
        <div className="px-4 py-3 bg-neutral-50 border-b-2 border-neutral-300">
          <div className="flex items-center border-2 border-neutral-300 bg-white rounded-sm h-9 px-3 gap-2">
            <div className="w-3 h-3 border border-neutral-400 rounded-full flex-shrink-0" />
            <span className="text-xs text-neutral-400 font-mono">Search conversation...</span>
          </div>
        </div>

        {/* Conversation History */}
        <div className="border-b-2 border-neutral-300">
          <div className="px-4 py-2 bg-neutral-100 border-b border-neutral-200">
            <span className="text-xs text-neutral-600 font-mono tracking-wider">CONVERSATION HISTORY</span>
          </div>
          <div className="max-h-32 overflow-y-auto">
            {CONVERSATION_HISTORY.map((conv) => (
              <div
                key={conv.id}
                className="px-4 py-2.5 hover:bg-neutral-50 cursor-pointer border-b border-neutral-200 transition-colors"
              >
                <div className="flex items-center justify-between mb-0.5">
                  <span className="text-xs text-neutral-700 font-mono">{conv.title}</span>
                  <span className="text-xs text-neutral-400 font-mono">{conv.time}</span>
                </div>
                <div className="h-2 w-3/4 bg-neutral-200 rounded-sm" />
              </div>
            ))}
          </div>
        </div>

        {/* Suggested Prompts */}
        <div className="px-4 py-3 border-b-2 border-neutral-300 bg-neutral-50">
          <div className="text-xs text-neutral-600 font-mono tracking-wider mb-2">SUGGESTED PROMPTS</div>
          <div className="flex flex-col gap-2">
            {SUGGESTED_PROMPTS.map((prompt) => (
              <button
                key={prompt}
                className="text-left px-3 py-2.5 rounded-sm border-2 border-neutral-300 bg-white text-xs text-neutral-700 hover:bg-neutral-50 hover:border-neutral-400 transition-all font-mono"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 bg-neutral-50">
          {MESSAGES.map((msg, i) => (
            <div key={i} className={`mb-4 flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              {msg.role === 'ai' && (
                <div className="w-8 h-8 border-2 border-neutral-400 bg-neutral-200 rounded-sm flex items-center justify-center mr-3 flex-shrink-0">
                  <div className="w-3 h-3 border border-neutral-500" />
                </div>
              )}
              <div
                className={`max-w-xs rounded-sm px-4 py-3 ${
                  msg.role === 'user'
                    ? 'bg-neutral-700 border-2 border-neutral-700'
                    : 'bg-white border-2 border-neutral-300'
                }`}
              >
                <p className={`text-xs leading-relaxed whitespace-pre-line font-mono ${msg.role === 'user' ? 'text-white' : 'text-neutral-700'}`}>
                  {msg.text}
                </p>
              </div>
              {msg.role === 'user' && (
                <div className="w-8 h-8 rounded-full border-2 border-neutral-400 bg-neutral-200 flex-shrink-0 ml-3" />
              )}
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t-4 border-neutral-400">
          <div className="flex items-end gap-2">
            <button className="w-10 h-10 border-2 border-neutral-300 bg-white rounded-sm flex items-center justify-center hover:bg-neutral-50 transition-colors flex-shrink-0">
              <div className="w-4 h-5 border-2 border-neutral-400 rounded-sm flex items-center justify-center">
                <div className="w-1.5 h-2.5 border border-neutral-400" />
              </div>
            </button>
            <div className="flex-1 border-2 border-neutral-300 rounded-sm bg-neutral-50 h-10 px-4 flex items-center">
              <span className="text-xs text-neutral-400 font-mono">{inputValue || 'Ask HUMAI AI...'}</span>
            </div>
            <button className="h-10 px-4 border-2 border-neutral-700 bg-neutral-700 rounded-sm text-xs text-white flex-shrink-0 font-mono">
              Send
            </button>
          </div>
          <p className="text-xs text-neutral-400 mt-2 text-center font-mono">
            HUMAI AI may make mistakes. Always verify critical HR decisions.
          </p>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/10 z-40 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
