import React from 'react';
import { TrendingUp, Users, FileText, MessageSquare, Calendar, Clock, ArrowRight, Sparkles } from 'lucide-react';

interface AdminDashboardProps {
  onNavigate: (view: 'articles' | 'conversations' | 'analytics') => void;
}

export function AdminDashboard({ onNavigate }: AdminDashboardProps) {
  // Mock data
  const stats = [
    { label: 'Visite totali', value: '12,456', change: '+23%', icon: Users, color: '#0D7EFF' },
    { label: 'Articoli pubblicati', value: '24', change: '+3', icon: FileText, color: '#7209B7' },
    { label: 'Conversazioni', value: '89', change: '+12', icon: MessageSquare, color: '#FF006E' },
    { label: 'Tasso conversione', value: '18%', change: '+5%', icon: TrendingUp, color: '#FFD60A' },
  ];

  const recentActivity = [
    { type: 'article', title: 'Nuovo articolo pubblicato: "Product-Market Fit"', time: '2 ore fa', color: '#7209B7' },
    { type: 'conversation', title: 'Nuova conversazione da Marco R.', time: '3 ore fa', color: '#FF006E' },
    { type: 'article', title: 'Articolo "OKR vs KPI" programmato per domani', time: '5 ore fa', color: '#7209B7' },
    { type: 'conversation', title: '3 nuove conversazioni da categorizzare', time: '1 giorno fa', color: '#FF006E' },
  ];

  const aiInsights = [
    {
      title: 'Picco di traffico dalle 14:00 alle 16:00',
      description: 'Considera di pubblicare articoli in questa fascia oraria',
      priority: 'high',
    },
    {
      title: 'Articoli su "OKR" performano meglio',
      description: '+45% engagement rispetto ad altri topic',
      priority: 'medium',
    },
    {
      title: '12 lead qualificati nelle conversazioni',
      description: 'Follow-up consigliato entro 48h',
      priority: 'high',
    },
  ];

  const quickActions = [
    { label: 'Scrivi nuovo articolo', icon: FileText, onClick: () => onNavigate('articles'), color: '#7209B7' },
    { label: 'Gestisci conversazioni', icon: MessageSquare, onClick: () => onNavigate('conversations'), color: '#FF006E' },
    { label: 'Vedi Analytics', icon: TrendingUp, onClick: () => onNavigate('analytics'), color: '#0D7EFF' },
  ];

  return (
    <div className="p-6 md:p-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-h2 text-[#0A0A0A] mb-2">
          Benvenuto, Mattia 👋
        </h1>
        <p className="text-body text-[#6B7280]">
          Ecco un riepilogo della tua attività
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-white border-4 border-[#000] rounded-lg shadow-brutal p-6"
            >
              <div className="flex items-center justify-between mb-3">
                <div
                  className="w-12 h-12 rounded-lg border-3 border-[#000] flex items-center justify-center"
                  style={{ backgroundColor: stat.color }}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span
                  className="px-2 py-1 bg-[#FFD60A]/20 border-2 border-[#FFD60A] rounded text-[#0A0A0A]"
                  style={{ fontFamily: 'Space Mono, monospace', fontSize: '11px', fontWeight: 700 }}
                >
                  {stat.change}
                </span>
              </div>
              <p className="text-body-small text-[#6B7280] mb-1">{stat.label}</p>
              <p
                className="text-[#0A0A0A]"
                style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '28px' }}
              >
                {stat.value}
              </p>
            </div>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* AI Insights - Takes 2 columns */}
        <div className="lg:col-span-2 bg-gradient-to-br from-[#0D7EFF] to-[#7209B7] border-4 border-[#000] rounded-lg shadow-brutal-lg p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm border-2 border-white/40 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <h2
              className="text-white"
              style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '20px' }}
            >
              AI Insights
            </h2>
          </div>

          <div className="space-y-3">
            {aiInsights.map((insight, index) => (
              <div
                key={index}
                className="bg-white/95 backdrop-blur-sm border-3 border-[#000] rounded-lg p-4"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3
                        className="text-[#0A0A0A]"
                        style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: '14px' }}
                      >
                        {insight.title}
                      </h3>
                      {insight.priority === 'high' && (
                        <span
                          className="px-2 py-0.5 bg-[#FF006E] text-white rounded-full border-2 border-[#000]"
                          style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', fontWeight: 700 }}
                        >
                          Alta
                        </span>
                      )}
                    </div>
                    <p className="text-body-small text-[#6B7280]">
                      {insight.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white border-4 border-[#000] rounded-lg shadow-brutal p-6">
          <h2
            className="text-[#0A0A0A] mb-4"
            style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '18px' }}
          >
            Azioni rapide
          </h2>
          <div className="space-y-3">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <button
                  key={index}
                  onClick={action.onClick}
                  className="w-full flex items-center justify-between p-4 border-3 border-[#000] rounded-lg shadow-brutal-sm hover:-translate-y-0.5 hover:shadow-brutal transition-all text-left group"
                  style={{ backgroundColor: action.color }}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-white" />
                    <span
                      className="text-white"
                      style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: '14px' }}
                    >
                      {action.label}
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white border-4 border-[#000] rounded-lg shadow-brutal p-6">
        <div className="flex items-center justify-between mb-6">
          <h2
            className="text-[#0A0A0A]"
            style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '18px' }}
          >
            Attività recente
          </h2>
          <Clock className="w-5 h-5 text-[#6B7280]" />
        </div>

        <div className="space-y-3">
          {recentActivity.map((activity, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 bg-[#FFFCF2] border-2 border-[#E5E5E5] rounded-lg hover:border-[#0D7EFF] transition-colors"
            >
              <div
                className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                style={{ backgroundColor: activity.color }}
              />
              <div className="flex-1 min-w-0">
                <p className="text-body-small text-[#0A0A0A] mb-1">
                  {activity.title}
                </p>
                <p className="text-body-small text-[#6B7280]">
                  {activity.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
