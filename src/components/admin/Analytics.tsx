import React from 'react';
import { TrendingUp, Users, Eye, Clock, ArrowUp, ArrowDown, Sparkles, Calendar } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

export function Analytics() {
  // Mock data for charts
  const visitorsData = [
    { day: 'Lun', visitors: 245, pageviews: 678 },
    { day: 'Mar', visitors: 312, pageviews: 892 },
    { day: 'Mer', visitors: 289, pageviews: 745 },
    { day: 'Gio', visitors: 401, pageviews: 1123 },
    { day: 'Ven', visitors: 378, pageviews: 998 },
    { day: 'Sab', visitors: 198, pageviews: 456 },
    { day: 'Dom', visitors: 156, pageviews: 389 },
  ];

  const topArticles = [
    { title: 'Product-Market Fit', views: 1234, engagement: 78 },
    { title: 'OKR vs KPI', views: 987, engagement: 65 },
    { title: 'Design Systems', views: 756, engagement: 82 },
    { title: 'Code Review', views: 654, engagement: 71 },
    { title: 'Il fallimento come feature', views: 543, engagement: 88 },
  ];

  const trafficSources = [
    { name: 'Diretto', value: 35, color: '#0D7EFF' },
    { name: 'LinkedIn', value: 28, color: '#7209B7' },
    { name: 'Google', value: 22, color: '#FFD60A' },
    { name: 'Twitter', value: 10, color: '#FF006E' },
    { name: 'Altri', value: 5, color: '#2D2D2D' },
  ];

  const conversionFunnel = [
    { stage: 'Visite', count: 12456, percentage: 100 },
    { stage: 'Articoli letti', count: 6789, percentage: 54.5 },
    { stage: 'CTA cliccati', count: 2340, percentage: 18.8 },
    { stage: 'Form compilati', count: 234, percentage: 1.9 },
  ];

  const stats = [
    { label: 'Visite totali', value: '12,456', change: '+23%', trend: 'up', icon: Users, color: '#0D7EFF' },
    { label: 'Tempo medio', value: '4m 32s', change: '+12%', trend: 'up', icon: Clock, color: '#7209B7' },
    { label: 'Bounce rate', value: '42%', change: '-8%', trend: 'down', icon: Eye, color: '#FFD60A' },
    { label: 'Conversioni', value: '234', change: '+34%', trend: 'up', icon: TrendingUp, color: '#FF006E' },
  ];

  const aiInsights = [
    {
      priority: 'high',
      title: 'Picco di traffico nel pomeriggio',
      description: 'Gli utenti sono più attivi tra le 14:00 e le 16:00. Programma i post in questa fascia oraria per massimizzare l\'engagement.',
      action: 'Ottimizza scheduling',
    },
    {
      priority: 'high',
      title: 'Articoli su OKR performano meglio',
      description: 'Gli articoli categorizzati come "OKR" hanno un engagement +45% superiore alla media. Considera di creare più contenuti su questo tema.',
      action: 'Crea contenuti OKR',
    },
    {
      priority: 'medium',
      title: 'Mobile traffic in crescita',
      description: 'Il 68% del traffico proviene da mobile. Verifica che l\'esperienza mobile sia ottimale.',
      action: 'Test mobile UX',
    },
  ];

  return (
    <div className="p-6 md:p-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-h2 text-[#0A0A0A] mb-2">
            Analytics Dashboard
          </h1>
          <p className="text-body text-[#6B7280]">
            Panoramica delle performance del sito
          </p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-white border-3 border-[#000] rounded-lg shadow-brutal-sm">
          <Calendar className="w-4 h-4 text-[#6B7280]" />
          <span className="text-body-small text-[#2D2D2D]">Ultimi 7 giorni</span>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          const TrendIcon = stat.trend === 'up' ? ArrowUp : ArrowDown;
          const trendColor = stat.trend === 'up' ? '#10B981' : '#EF4444';
          
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
                <div
                  className="flex items-center gap-1 px-2 py-1 rounded"
                  style={{ backgroundColor: `${trendColor}20`, color: trendColor }}
                >
                  <TrendIcon className="w-3 h-3" />
                  <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '11px', fontWeight: 700 }}>
                    {stat.change}
                  </span>
                </div>
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

      {/* AI Insights */}
      <div className="bg-gradient-to-br from-[#0D7EFF] to-[#7209B7] border-4 border-[#000] rounded-lg shadow-brutal-lg p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-white/20 backdrop-blur-sm border-2 border-white/40 rounded-lg flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <h2
            className="text-white"
            style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '20px' }}
          >
            Top 3 Insights AI di questa settimana
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {aiInsights.map((insight, index) => (
            <div
              key={index}
              className="bg-white/95 backdrop-blur-sm border-3 border-[#000] rounded-lg p-5"
            >
              <div className="flex items-start justify-between mb-3">
                <h3
                  className="text-[#0A0A0A] flex-1"
                  style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: '14px' }}
                >
                  {insight.title}
                </h3>
                {insight.priority === 'high' && (
                  <span
                    className="px-2 py-0.5 bg-[#FF006E] text-white rounded-full border-2 border-[#000] flex-shrink-0"
                    style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', fontWeight: 700 }}
                  >
                    Alta
                  </span>
                )}
              </div>
              <p className="text-body-small text-[#6B7280] mb-4">
                {insight.description}
              </p>
              <button
                className="w-full px-4 py-2 bg-[#0D7EFF] text-white border-3 border-[#000] rounded-lg shadow-brutal-sm hover:-translate-y-0.5 hover:shadow-brutal transition-all text-body-small"
                style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}
              >
                {insight.action}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Visitors Chart */}
        <div className="bg-white border-4 border-[#000] rounded-lg shadow-brutal p-6">
          <h3
            className="text-[#0A0A0A] mb-6"
            style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '18px' }}
          >
            Visite e Pageviews
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={visitorsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E5E5" />
              <XAxis dataKey="day" stroke="#6B7280" style={{ fontSize: '12px' }} />
              <YAxis stroke="#6B7280" style={{ fontSize: '12px' }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#FFFCF2',
                  border: '3px solid #000',
                  borderRadius: '8px',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '12px',
                }}
              />
              <Line type="monotone" dataKey="visitors" stroke="#0D7EFF" strokeWidth={3} />
              <Line type="monotone" dataKey="pageviews" stroke="#7209B7" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Traffic Sources */}
        <div className="bg-white border-4 border-[#000] rounded-lg shadow-brutal p-6">
          <h3
            className="text-[#0A0A0A] mb-6"
            style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '18px' }}
          >
            Sorgenti di traffico
          </h3>
          <div className="flex items-center justify-between">
            <ResponsiveContainer width="50%" height={250}>
              <PieChart>
                <Pie
                  data={trafficSources}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  stroke="#000"
                  strokeWidth={2}
                >
                  {trafficSources.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#FFFCF2',
                    border: '3px solid #000',
                    borderRadius: '8px',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '12px',
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-3">
              {trafficSources.map((source, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div
                    className="w-4 h-4 rounded border-2 border-[#000]"
                    style={{ backgroundColor: source.color }}
                  />
                  <div>
                    <p className="text-body-small text-[#0A0A0A]">{source.name}</p>
                    <p className="text-body-small text-[#6B7280]">{source.value}%</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top Articles */}
        <div className="bg-white border-4 border-[#000] rounded-lg shadow-brutal p-6">
          <h3
            className="text-[#0A0A0A] mb-6"
            style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '18px' }}
          >
            Top Articoli
          </h3>
          <div className="space-y-3">
            {topArticles.map((article, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-[#FFFCF2] border-2 border-[#E5E5E5] rounded-lg hover:border-[#0D7EFF] transition-colors"
              >
                <div className="flex-1 min-w-0">
                  <p
                    className="text-[#0A0A0A] truncate mb-1"
                    style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: '14px' }}
                  >
                    {index + 1}. {article.title}
                  </p>
                  <p className="text-body-small text-[#6B7280]">
                    {article.views} visualizzazioni · {article.engagement}% engagement
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Conversion Funnel */}
        <div className="bg-white border-4 border-[#000] rounded-lg shadow-brutal p-6">
          <h3
            className="text-[#0A0A0A] mb-6"
            style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '18px' }}
          >
            Funnel di conversione
          </h3>
          <div className="space-y-4">
            {conversionFunnel.map((step, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-body-small text-[#0A0A0A]">{step.stage}</span>
                  <span
                    className="text-[#0A0A0A]"
                    style={{ fontFamily: 'Space Mono, monospace', fontSize: '14px', fontWeight: 700 }}
                  >
                    {step.count.toLocaleString()} ({step.percentage}%)
                  </span>
                </div>
                <div className="h-8 bg-[#E5E5E5] border-3 border-[#000] rounded-lg overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#0D7EFF] to-[#7209B7] border-r-3 border-[#000] transition-all duration-500"
                    style={{ width: `${step.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Heatmap Placeholder */}
      <div className="bg-white border-4 border-[#000] rounded-lg shadow-brutal p-6">
        <h3
          className="text-[#0A0A0A] mb-4"
          style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '18px' }}
        >
          Heatmap comportamenti utente
        </h3>
        <div className="bg-[#FFFCF2] border-3 border-[#E5E5E5] rounded-lg p-12 text-center">
          <Eye className="w-16 h-16 text-[#6B7280] mx-auto mb-4" />
          <p className="text-body text-[#6B7280] mb-2">
            Heatmap interattiva disponibile
          </p>
          <p className="text-body-small text-[#6B7280]">
            In produzione integrazione con Hotjar o Microsoft Clarity
          </p>
        </div>
      </div>
    </div>
  );
}
