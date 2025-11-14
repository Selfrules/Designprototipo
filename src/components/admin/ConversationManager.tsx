import React, { useState } from 'react';
import { MessageSquare, Search, Filter, Star, TrendingUp, Users, Send, Sparkles, Clock, Mail } from 'lucide-react';

type ConversationType = 'all' | 'lead' | 'networking' | 'curiosi';

interface Conversation {
  id: number;
  name: string;
  email: string;
  type: 'lead' | 'networking' | 'curiosi';
  lastMessage: string;
  timestamp: string;
  unread: boolean;
  messages: Array<{ sender: 'user' | 'admin'; text: string; time: string }>;
}

export function ConversationManager() {
  const [selectedType, setSelectedType] = useState<ConversationType>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);
  const [replyText, setReplyText] = useState('');

  // Mock conversations data
  const mockConversations: Conversation[] = [
    {
      id: 1,
      name: 'Marco Rossi',
      email: 'marco.rossi@startup.it',
      type: 'lead',
      lastMessage: 'Sono interessato a collaborare su un progetto SaaS...',
      timestamp: '10 min fa',
      unread: true,
      messages: [
        { sender: 'user', text: 'Ciao Mattia, ho letto il tuo articolo sugli OKR e vorrei parlare di una collaborazione', time: '15:30' },
        { sender: 'user', text: 'Sono interessato a collaborare su un progetto SaaS...', time: '15:32' },
      ],
    },
    {
      id: 2,
      name: 'Laura Bianchi',
      email: 'laura.b@tech.com',
      type: 'networking',
      lastMessage: 'Mi piacerebbe connettermi per scambiare idee sul PM...',
      timestamp: '2 ore fa',
      unread: true,
      messages: [
        { sender: 'user', text: 'Ciao! Sono anche io PM e mi piacerebbe fare networking', time: '13:15' },
        { sender: 'user', text: 'Mi piacerebbe connettermi per scambiare idee sul PM...', time: '13:17' },
      ],
    },
    {
      id: 3,
      name: 'Giuseppe Verde',
      email: 'g.verde@gmail.com',
      type: 'curiosi',
      lastMessage: 'Ho una domanda sul tuo percorso da designer a PM',
      timestamp: '5 ore fa',
      unread: false,
      messages: [
        { sender: 'user', text: 'Ciao Mattia, complimenti per il sito!', time: '10:20' },
        { sender: 'user', text: 'Ho una domanda sul tuo percorso da designer a PM', time: '10:22' },
        { sender: 'admin', text: 'Ciao Giuseppe! Grazie mille. Dimmi pure, sono felice di rispondere!', time: '11:45' },
      ],
    },
    {
      id: 4,
      name: 'Francesca Neri',
      email: 'francesca@agency.it',
      type: 'lead',
      lastMessage: 'Cerchiamo un PM per un progetto importante',
      timestamp: '1 giorno fa',
      unread: true,
      messages: [
        { sender: 'user', text: 'Buongiorno, siamo un\'agenzia e stiamo cercando un PM esperto', time: 'Ieri 16:30' },
        { sender: 'user', text: 'Cerchiamo un PM per un progetto importante', time: 'Ieri 16:32' },
      ],
    },
    {
      id: 5,
      name: 'Alessio Russo',
      email: 'alessio.r@corp.com',
      type: 'networking',
      lastMessage: 'Ottimo articolo sul Product-Market Fit!',
      timestamp: '2 giorni fa',
      unread: false,
      messages: [
        { sender: 'user', text: 'Ottimo articolo sul Product-Market Fit!', time: '2 giorni fa 14:20' },
        { sender: 'admin', text: 'Grazie mille Alessio! Felice che ti sia piaciuto', time: '2 giorni fa 15:10' },
      ],
    },
  ];

  const filteredConversations = mockConversations.filter(conv => {
    const matchesType = selectedType === 'all' || conv.type === selectedType;
    const matchesSearch = 
      conv.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      conv.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      conv.lastMessage.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  const stats = [
    { label: 'Totali', value: mockConversations.length, icon: MessageSquare, color: '#0D7EFF' },
    { label: 'Lead', value: mockConversations.filter(c => c.type === 'lead').length, icon: Star, color: '#FFD60A' },
    { label: 'Networking', value: mockConversations.filter(c => c.type === 'networking').length, icon: Users, color: '#7209B7' },
    { label: 'Non letti', value: mockConversations.filter(c => c.unread).length, icon: TrendingUp, color: '#FF006E' },
  ];

  const aiSuggestions = [
    'Proponi una call conoscitiva entro questa settimana',
    'Condividi il link al tuo calendario Calendly',
    'Chiedi maggiori dettagli sul progetto e budget',
  ];

  const typeColors = {
    lead: '#FFD60A',
    networking: '#7209B7',
    curiosi: '#0D7EFF',
  };

  const typeLabels = {
    lead: 'Lead',
    networking: 'Networking',
    curiosi: 'Curioso',
  };

  const handleSendReply = () => {
    if (!replyText.trim()) return;
    alert(`Risposta inviata: "${replyText}" (mock)`);
    setReplyText('');
  };

  return (
    <div className="p-6 md:p-8">
      {/* Header & Stats */}
      <div className="mb-8">
        <h1 className="text-h2 text-[#0A0A0A] mb-6">
          Gestione Conversazioni
        </h1>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white border-4 border-[#000] rounded-lg shadow-brutal p-4"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className="w-8 h-8 rounded border-2 border-[#000] flex items-center justify-center"
                    style={{ backgroundColor: stat.color }}
                  >
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <span
                    className="text-[#0A0A0A]"
                    style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '24px' }}
                  >
                    {stat.value}
                  </span>
                </div>
                <p className="text-body-small text-[#6B7280]">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B7280]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cerca per nome, email o messaggio..."
              className="w-full pl-12 pr-4 py-3 bg-white border-3 border-[#000] rounded-lg shadow-brutal-sm focus:outline-none focus:shadow-brutal transition-all"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}
            />
          </div>

          <div className="flex gap-2">
            {(['all', 'lead', 'networking', 'curiosi'] as ConversationType[]).map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-4 py-3 border-3 border-[#000] rounded-lg shadow-brutal-sm transition-all hover:-translate-y-0.5 hover:shadow-brutal ${
                  selectedType === type ? 'bg-[#0D7EFF] text-white' : 'bg-white text-[#2D2D2D]'
                }`}
                style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: '14px' }}
              >
                {type === 'all' ? 'Tutti' : type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Conversations List */}
        <div className="lg:col-span-1 bg-white border-4 border-[#000] rounded-lg shadow-brutal overflow-hidden">
          <div className="p-4 border-b-3 border-[#000] bg-[#FFFCF2]">
            <h3
              className="text-[#0A0A0A]"
              style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '16px' }}
            >
              {filteredConversations.length} Conversazioni
            </h3>
          </div>

          <div className="divide-y-3 divide-[#E5E5E5] max-h-[600px] overflow-y-auto">
            {filteredConversations.map((conv) => (
              <button
                key={conv.id}
                onClick={() => setSelectedConversation(conv)}
                className={`w-full p-4 text-left hover:bg-[#FFFCF2] transition-colors ${
                  selectedConversation?.id === conv.id ? 'bg-[#0D7EFF]/10' : ''
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h4
                        className="text-[#0A0A0A] truncate"
                        style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: '14px' }}
                      >
                        {conv.name}
                      </h4>
                      {conv.unread && (
                        <div className="w-2 h-2 bg-[#FF006E] rounded-full flex-shrink-0" />
                      )}
                    </div>
                    <p className="text-body-small text-[#6B7280] truncate mb-1">
                      {conv.lastMessage}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span
                    className="px-2 py-0.5 rounded border-2 border-[#000] text-white"
                    style={{
                      backgroundColor: typeColors[conv.type],
                      fontFamily: 'Space Mono, monospace',
                      fontSize: '10px',
                      fontWeight: 700,
                    }}
                  >
                    {typeLabels[conv.type]}
                  </span>
                  <span className="text-body-small text-[#6B7280]">
                    {conv.timestamp}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Conversation Detail */}
        <div className="lg:col-span-2 space-y-4">
          {selectedConversation ? (
            <>
              {/* Conversation Header */}
              <div className="bg-white border-4 border-[#000] rounded-lg shadow-brutal p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h2
                      className="text-[#0A0A0A] mb-1"
                      style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '20px' }}
                    >
                      {selectedConversation.name}
                    </h2>
                    <p className="text-body-small text-[#6B7280] flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      {selectedConversation.email}
                    </p>
                  </div>
                  <span
                    className="px-3 py-1 rounded border-2 border-[#000] text-white"
                    style={{
                      backgroundColor: typeColors[selectedConversation.type],
                      fontFamily: 'Space Mono, monospace',
                      fontSize: '11px',
                      fontWeight: 700,
                    }}
                  >
                    {typeLabels[selectedConversation.type]}
                  </span>
                </div>
              </div>

              {/* AI Suggestions */}
              <div className="bg-gradient-to-br from-[#7209B7] to-[#FF006E] border-4 border-[#000] rounded-lg shadow-brutal p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-5 h-5 text-white" />
                  <h3
                    className="text-white"
                    style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '14px' }}
                  >
                    Suggerimenti AI
                  </h3>
                </div>
                <div className="space-y-2">
                  {aiSuggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => setReplyText(suggestion)}
                      className="w-full text-left p-3 bg-white/95 backdrop-blur-sm border-2 border-[#000] rounded-lg hover:bg-white transition-all text-body-small text-[#0A0A0A]"
                    >
                      → {suggestion}
                    </button>
                  ))}
                </div>
              </div>

              {/* Messages */}
              <div className="bg-white border-4 border-[#000] rounded-lg shadow-brutal p-6">
                <div className="space-y-4 mb-6 max-h-[300px] overflow-y-auto">
                  {selectedConversation.messages.map((msg, index) => (
                    <div
                      key={index}
                      className={`flex ${msg.sender === 'admin' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] p-3 border-3 border-[#000] rounded-lg ${
                          msg.sender === 'admin'
                            ? 'bg-[#0D7EFF] text-white'
                            : 'bg-[#FFFCF2] text-[#0A0A0A]'
                        }`}
                      >
                        <p className="text-body-small mb-1">{msg.text}</p>
                        <span className={`text-[11px] ${msg.sender === 'admin' ? 'text-white/70' : 'text-[#6B7280]'}`}>
                          {msg.time}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Reply Input */}
                <div className="space-y-3">
                  <textarea
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    placeholder="Scrivi la tua risposta..."
                    rows={4}
                    className="w-full px-4 py-3 bg-white border-3 border-[#000] rounded-lg shadow-brutal-sm focus:outline-none focus:shadow-brutal transition-all resize-none"
                    style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}
                  />
                  <button
                    onClick={handleSendReply}
                    className="flex items-center gap-2 px-6 py-3 bg-[#0D7EFF] text-white border-3 border-[#000] rounded-lg shadow-brutal hover:-translate-y-0.5 hover:shadow-brutal-lg transition-all ml-auto"
                    style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '14px' }}
                  >
                    <Send className="w-4 h-4" />
                    Invia risposta
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="bg-white border-4 border-[#000] rounded-lg shadow-brutal p-12 text-center">
              <MessageSquare className="w-16 h-16 text-[#6B7280] mx-auto mb-4" />
              <p className="text-body text-[#6B7280]">
                Seleziona una conversazione per visualizzare i dettagli
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
