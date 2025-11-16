import React from 'react';
import { 
  MessageCircle, Send, X, Sparkles, Mail, Calendar as CalendarIcon,
  Briefcase, Code, Palette, TrendingUp
} from 'lucide-react';
import { NeoBadge } from './NeoBadge';

export function ChatBotSection() {
  return (
    <section id="chatbot" className="mb-32 scroll-mt-24">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 bg-gradient-to-br from-[#0D7EFF] to-[#7209B7] border-3 border-[#000] rounded-lg flex items-center justify-center">
          <MessageCircle className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-h2">ChatBot Component</h2>
          <p className="text-body-small text-[#6B7280]">Floating chat interface with AI assistant</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Floating Button */}
        <div className="bg-white border-4 border-[#000] rounded-lg shadow-brutal-lg p-8">
          <h3 className="text-h3 mb-6">Floating Button</h3>
          <div className="bg-[#FFFCF2] border-2 border-[#E5E5E5] rounded-lg p-8 relative h-64">
            <div className="absolute bottom-6 right-6">
              <button className="w-16 h-16 bg-gradient-to-br from-[#0D7EFF] to-[#7209B7] text-white border-4 border-[#000] rounded-full shadow-brutal-lg hover:-translate-y-2 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center justify-center relative group">
                <MessageCircle className="w-7 h-7" strokeWidth={2.5} />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#FF006E] border-2 border-[#000] rounded-full animate-pulse" />
              </button>
            </div>
            <p className="text-body-small text-[#6B7280]">Fixed position: bottom-6 right-6</p>
          </div>
        </div>

        {/* Chat Window */}
        <div className="bg-white border-4 border-[#000] rounded-lg shadow-brutal-lg p-8">
          <h3 className="text-h3 mb-6">Chat Window</h3>
          <div className="bg-white border-4 border-[#000] rounded-lg shadow-brutal overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#0D7EFF] to-[#7209B7] border-b-4 border-[#000] p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white border-3 border-[#000] rounded-full flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-[#0D7EFF]" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    AI Assistant
                  </p>
                  <p className="text-xs text-white/80">Online</p>
                </div>
              </div>
              <button className="w-8 h-8 bg-white border-2 border-[#000] rounded flex items-center justify-center hover:bg-[#FFFCF2] transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="p-4 space-y-3 h-48 overflow-y-auto bg-[#FFFCF2]">
              {/* Bot Message */}
              <div className="flex gap-2">
                <div className="bg-white border-3 border-[#000] rounded-lg p-3 max-w-[80%] shadow-brutal-sm">
                  <p className="text-body-small">Ciao! 👋 Come posso aiutarti?</p>
                </div>
              </div>
              {/* User Message */}
              <div className="flex gap-2 justify-end">
                <div className="bg-[#0D7EFF] border-3 border-[#000] rounded-lg p-3 max-w-[80%] shadow-brutal-sm">
                  <p className="text-body-small text-white">Ciao! Vorrei info...</p>
                </div>
              </div>
            </div>

            {/* Input */}
            <div className="border-t-4 border-[#000] p-3 bg-white flex gap-2">
              <input
                type="text"
                placeholder="Scrivi un messaggio..."
                className="flex-1 px-3 py-2 border-3 border-[#000] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D7EFF]"
                style={{ fontFamily: 'Inter, sans-serif' }}
              />
              <button className="px-4 py-2 bg-[#0D7EFF] text-white border-3 border-[#000] rounded-lg shadow-brutal-sm hover:-translate-y-1 hover:shadow-brutal transition-all">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FormsSection() {
  return (
    <section id="forms" className="mb-32 scroll-mt-24">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 bg-[#FF006E] border-3 border-[#000] rounded-lg flex items-center justify-center">
          <Mail className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-h2">Form Components</h2>
          <p className="text-body-small text-[#6B7280]">Contact forms and input fields</p>
        </div>
      </div>

      <div className="bg-white border-4 border-[#000] rounded-lg shadow-brutal-lg p-8">
        <h3 className="text-h3 mb-6">Contact Form (Ask Me Section)</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Desktop Version */}
          <div>
            <p className="text-body-small font-bold mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Desktop
            </p>
            <div className="bg-[#1A1A1A] border-4 border-[#FF006E] rounded-lg shadow-brutal-pink p-6">
              <div className="w-14 h-14 bg-[#FF006E] rounded-lg flex items-center justify-center mb-4 border-3 border-[#000]">
                <Mail className="w-7 h-7 text-white" strokeWidth={2.5} />
              </div>
              
              <h3 className="text-body text-white mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}>
                Chiedi in anonimo
              </h3>
              
              <p className="text-body-small text-white/90 mb-4">
                Lascia la tua domanda qui. Rispondo pubblicamente o via email.
              </p>
              
              <form className="space-y-3">
                <input
                  type="text"
                  placeholder="Il tuo nome (opzionale)"
                  className="w-full px-4 py-3 bg-[#2D2D2D] border-3 border-[#FF006E] rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#FF006E]"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
                <input
                  type="email"
                  placeholder="Email (opzionale)"
                  className="w-full px-4 py-3 bg-[#2D2D2D] border-3 border-[#FF006E] rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#FF006E]"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
                <textarea
                  placeholder="La tua domanda..."
                  rows={4}
                  className="w-full px-4 py-3 bg-[#2D2D2D] border-3 border-[#FF006E] rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#FF006E] resize-none"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-[#FF006E] text-white border-3 border-[#000] rounded shadow-brutal transition-all hover:-translate-y-1 hover:shadow-brutal-lg font-bold text-sm"
                  style={{ fontFamily: 'Space Grotesk, sans-serif', textTransform: 'uppercase' }}
                >
                  Invia domanda
                </button>
              </form>
            </div>
          </div>

          {/* Mobile Version */}
          <div>
            <p className="text-body-small font-bold mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Mobile
            </p>
            <div className="max-w-[375px] mx-auto bg-[#1A1A1A] border-4 border-[#0D7EFF] rounded-lg shadow-brutal-blue p-6">
              <div className="w-12 h-12 bg-[#0D7EFF] rounded-lg flex items-center justify-center mb-4 border-3 border-[#000]">
                <MessageCircle className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
              
              <h3 className="text-sm text-white mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}>
                Chatta con il mio gemello digitale
              </h3>
              
              <p className="text-xs text-white/90 mb-4">
                Alimentato da Claude AI, conosce tutto il mio background.
              </p>
              
              <button 
                className="w-full px-4 py-3 bg-[#0D7EFF] text-white border-3 border-[#000] rounded shadow-brutal transition-all hover:-translate-y-1 hover:shadow-brutal-lg font-bold text-xs"
                style={{ fontFamily: 'Space Grotesk, sans-serif', textTransform: 'uppercase' }}
              >
                Inizia chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TimelineSection() {
  return (
    <section id="timeline" className="mb-32 scroll-mt-24">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 bg-[#FFD60A] border-3 border-[#000] rounded-lg flex items-center justify-center">
          <CalendarIcon className="w-6 h-6 text-[#0A0A0A]" />
        </div>
        <div>
          <h2 className="text-h2">Timeline Component</h2>
          <p className="text-body-small text-[#6B7280]">Journey milestones with vertical timeline</p>
        </div>
      </div>

      <div className="bg-white border-4 border-[#000] rounded-lg shadow-brutal-lg p-8">
        <h3 className="text-h3 mb-6">Milestone Cards</h3>
        
        <div className="space-y-8">
          {/* Example Milestone Card */}
          <div className="flex gap-6">
            {/* Timeline Icon */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-[#0D7EFF] border-4 border-[#000] rounded-full flex items-center justify-center shadow-brutal-sm flex-shrink-0">
                <Code className="w-5 h-5 text-white" />
              </div>
              <div className="w-1 h-full bg-gradient-to-b from-[#0D7EFF] to-[#7209B7] mt-2" />
            </div>

            {/* Content Card */}
            <div className="flex-1 bg-[#FFFCF2] border-4 border-[#000] rounded-lg shadow-brutal p-6 hover:-translate-y-1 hover:shadow-brutal-lg transition-all">
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-block px-3 py-1 bg-white border-2 border-[#000] rounded shadow-brutal-sm text-xs font-mono font-bold">
                  2018-2021
                </span>
                <NeoBadge color="blue">Developer</NeoBadge>
              </div>
              
              <h3 className="text-h3 mb-3 text-[#0A0A0A]">
                Full-Stack Developer
              </h3>
              
              <p className="text-body-small text-[#2D2D2D] mb-4">
                Ho sviluppato applicazioni web complesse utilizzando React, Node.js e PostgreSQL. Focus su performance e user experience.
              </p>
              
              <div className="space-y-3">
                <div>
                  <p className="text-xs font-bold mb-2 text-[#0A0A0A]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>SKILLS:</p>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Node.js', 'PostgreSQL', 'Docker'].map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-white border-2 border-[#000] rounded-sm text-xs"
                        style={{ fontFamily: 'Space Mono, monospace' }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Current Milestone */}
          <div className="flex gap-6">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-[#FF006E] to-[#FFD60A] border-4 border-[#000] rounded-full flex items-center justify-center shadow-brutal flex-shrink-0 animate-pulse">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
            </div>

            <div className="flex-1 bg-gradient-to-br from-[#FF006E] to-[#FFD60A] border-4 border-[#000] rounded-lg shadow-brutal-lg p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-block px-3 py-1 bg-white border-2 border-[#000] rounded shadow-brutal-sm text-xs font-mono font-bold">
                  2024-NOW
                </span>
                <NeoBadge color="yellow">Current</NeoBadge>
              </div>
              
              <h3 className="text-h3 mb-3 text-[#0A0A0A]">
                Senior Product Manager
              </h3>
              
              <p className="text-body-small text-[#0A0A0A]/90 mb-4">
                Guido team cross-funzionali nella creazione di prodotti che gli utenti amano. Focus su data-driven decisions e customer empathy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HeroSection() {
  return (
    <section id="hero" className="mb-32 scroll-mt-24">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 bg-gradient-to-br from-[#0D7EFF] via-[#FF006E] to-[#FFD60A] border-3 border-[#000] rounded-lg" />
        <div>
          <h2 className="text-h2">Hero Section</h2>
          <p className="text-body-small text-[#6B7280]">Homepage hero with floating shapes</p>
        </div>
      </div>

      <div className="bg-white border-4 border-[#000] rounded-lg shadow-brutal-lg p-8">
        <h3 className="text-h3 mb-6">Hero Layout</h3>
        
        <div className="bg-[#FFFCF2] border-4 border-[#000] rounded-lg min-h-[400px] relative overflow-hidden p-8 flex items-center justify-center">
          {/* Floating Decorative Shapes */}
          <div className="absolute top-[10%] right-[5%] w-20 h-20 bg-[#0D7EFF] border-4 border-[#000] rounded-full opacity-80 animate-float" />
          <div className="absolute top-[30%] left-[3%] w-16 h-16 bg-[#FF006E] border-4 border-[#000] rotate-45 opacity-80" />
          <div className="absolute bottom-[15%] right-[10%] w-16 h-16 bg-[#FFD60A] border-4 border-[#000] opacity-80" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />
          <div className="absolute bottom-[30%] left-[8%] w-12 h-12 bg-[#7209B7] border-4 border-[#000] rounded-full opacity-70" />
          
          {/* Content */}
          <div className="relative z-10 text-center max-w-[800px]">
            <div className="flex justify-center items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-[#FF006E]" />
              <NeoBadge color="pink">Product Manager</NeoBadge>
            </div>
            
            <h1 className="text-5xl md:text-6xl mb-6 text-[#0A0A0A] relative" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 900, lineHeight: '1.1' }}>
              Trasformo{' '}
              <span className="relative inline-block">
                fallimenti
                <span className="absolute -bottom-2 left-0 w-full h-3 bg-[#0D7EFF] rotate-1 -z-10" />
              </span>
              {' '}in{' '}
              <span className="text-[#FF006E]">feature</span>
            </h1>
            
            <p className="text-body-large text-[#2D2D2D] mb-8">
              Da designer a developer a{' '}
              <strong className="text-[#FF006E]">Product Manager</strong>.{' '}
              Ho raccolto i pezzi di ogni fallimento per costruire prodotti che le persone amano.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="px-6 py-3 bg-[#0D7EFF] text-white border-3 border-[#000] rounded-lg shadow-brutal hover:-translate-y-1 hover:shadow-brutal-lg transition-all font-bold">
                Scopri di più
              </button>
              <button className="px-6 py-3 bg-white text-[#0A0A0A] border-3 border-[#000] rounded-lg shadow-brutal hover:-translate-y-1 hover:shadow-brutal-lg transition-all font-bold">
                Contattami
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function WorkTogetherSection() {
  return (
    <section id="services" className="mb-32 scroll-mt-24">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 bg-[#7209B7] border-3 border-[#000] rounded-lg flex items-center justify-center">
          <Briefcase className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-h2">Work Together Section</h2>
          <p className="text-body-small text-[#6B7280]">Collaboration cards with pricing</p>
        </div>
      </div>

      <div className="bg-white border-4 border-[#000] rounded-lg shadow-brutal-lg p-8">
        <h3 className="text-h3 mb-6">Service Cards</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Standard Service */}
          <div className="bg-white border-4 border-[#000] rounded-lg shadow-brutal hover:-translate-y-2 hover:shadow-brutal-lg transition-all p-6">
            <div className="w-12 h-12 bg-[#0D7EFF] border-3 border-[#000] rounded-lg flex items-center justify-center mb-4">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            
            <h3 className="text-body mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}>
              Brainstorming Session
            </h3>
            
            <p className="text-3xl font-bold text-[#0D7EFF] mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              €150
              <span className="text-sm text-[#6B7280] font-normal">/ora</span>
            </p>
            
            <p className="text-body-small text-[#6B7280] mb-4">
              Una call di 60 minuti per discutere il tuo progetto, sfide o opportunità.
            </p>
            
            <button className="w-full px-4 py-2 bg-[#0D7EFF] text-white border-3 border-[#000] rounded-lg shadow-brutal-sm hover:-translate-y-1 hover:shadow-brutal transition-all font-bold text-sm">
              Prenota ora
            </button>
          </div>

          {/* Featured Service */}
          <div className="bg-gradient-to-br from-[#FF006E] to-[#FFD60A] border-4 border-[#000] rounded-lg shadow-brutal-lg hover:-translate-y-2 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all p-6 relative">
            <div className="absolute -top-3 -right-3">
              <NeoBadge color="yellow">Popular</NeoBadge>
            </div>
            
            <div className="w-12 h-12 bg-[#0A0A0A] border-3 border-[#000] rounded-lg flex items-center justify-center mb-4">
              <Palette className="w-6 h-6 text-[#FFD60A]" />
            </div>
            
            <h3 className="text-body mb-2 text-white" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}>
              Consulenza Strategica
            </h3>
            
            <p className="text-3xl font-bold text-white mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              €500
              <span className="text-sm text-white/80 font-normal">/progetto</span>
            </p>
            
            <p className="text-body-small text-white/90 mb-4">
              Analisi completa, roadmap strategica e piano d'azione per il tuo prodotto.
            </p>
            
            <button className="w-full px-4 py-2 bg-white text-[#0A0A0A] border-3 border-[#000] rounded-lg shadow-brutal-sm hover:-translate-y-1 hover:shadow-brutal transition-all font-bold text-sm">
              Scopri di più
            </button>
          </div>

          {/* Premium Service */}
          <div className="bg-white border-4 border-[#000] rounded-lg shadow-brutal hover:-translate-y-2 hover:shadow-brutal-lg transition-all p-6">
            <div className="w-12 h-12 bg-[#7209B7] border-3 border-[#000] rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            
            <h3 className="text-body mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}>
              PM Mentorship
            </h3>
            
            <p className="text-3xl font-bold text-[#7209B7] mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              €300
              <span className="text-sm text-[#6B7280] font-normal">/mese</span>
            </p>
            
            <p className="text-body-small text-[#6B7280] mb-4">
              Supporto continuo per crescere come Product Manager con feedback personalizzato.
            </p>
            
            <button className="w-full px-4 py-2 bg-white text-[#0A0A0A] border-3 border-[#000] rounded-lg shadow-brutal-sm hover:bg-[#7209B7] hover:text-white hover:-translate-y-1 hover:shadow-brutal transition-all font-bold text-sm">
              Candidati
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}