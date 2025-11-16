import React from 'react';
import { 
  TrendingUp, Users, FileText, ArrowUp, ArrowDown, Sparkles,
  AlertCircle, CheckCircle, Clock, Calendar, BarChart3
} from 'lucide-react';
import { NeoBadge } from './NeoBadge';

export function AdminComponentsSection() {
  return (
    <section id="admin" className="mb-32 scroll-mt-24">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 bg-gradient-to-br from-[#7209B7] to-[#FF006E] border-3 border-[#000] rounded-lg flex items-center justify-center">
          <BarChart3 className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-h2">Admin Components</h2>
          <p className="text-body-small text-[#6B7280]">Dashboard, analytics, and management interfaces</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="bg-white border-4 border-[#000] rounded-lg shadow-brutal-lg p-8 mb-8">
        <h3 className="text-h3 mb-6">Stats Cards</h3>
        <p className="text-body-small text-[#6B7280] mb-6">
          Dashboard cards showing key metrics with icon, value, and trend indicator
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Stat Card Example 1 */}
          <div className="bg-white border-4 border-[#000] rounded-lg shadow-brutal p-6">
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 bg-[#0D7EFF] rounded-lg border-3 border-[#000] flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <span className="px-2 py-1 bg-[#10B981]/20 border-2 border-[#10B981] rounded text-[#0A0A0A] text-xs font-mono font-bold">
                +23%
              </span>
            </div>
            <p className="text-body-small text-[#6B7280] mb-1">Visite totali</p>
            <p className="text-[#0A0A0A] text-3xl font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              12,456
            </p>
          </div>

          {/* Stat Card Example 2 */}
          <div className="bg-white border-4 border-[#000] rounded-lg shadow-brutal p-6">
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 bg-[#7209B7] rounded-lg border-3 border-[#000] flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <span className="px-2 py-1 bg-[#FFD60A]/20 border-2 border-[#FFD60A] rounded text-[#0A0A0A] text-xs font-mono font-bold">
                +3
              </span>
            </div>
            <p className="text-body-small text-[#6B7280] mb-1">Articoli pubblicati</p>
            <p className="text-[#0A0A0A] text-3xl font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              24
            </p>
          </div>

          {/* Stat Card with Negative Trend */}
          <div className="bg-white border-4 border-[#000] rounded-lg shadow-brutal p-6">
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 bg-[#FFD60A] rounded-lg border-3 border-[#000] flex items-center justify-center">
                <Clock className="w-6 h-6 text-[#0A0A0A]" />
              </div>
              <span className="px-2 py-1 bg-[#EF4444]/20 border-2 border-[#EF4444] rounded text-[#0A0A0A] text-xs font-mono font-bold">
                -8%
              </span>
            </div>
            <p className="text-body-small text-[#6B7280] mb-1">Bounce rate</p>
            <p className="text-[#0A0A0A] text-3xl font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              42%
            </p>
          </div>

          {/* Stat Card with Icon Trend */}
          <div className="bg-white border-4 border-[#000] rounded-lg shadow-brutal p-6">
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 bg-[#FF006E] rounded-lg border-3 border-[#000] flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div className="flex items-center gap-1 px-2 py-1 bg-[#10B981]/20 border-2 border-[#10B981] rounded">
                <ArrowUp className="w-3 h-3 text-[#10B981]" />
                <span className="text-xs font-mono font-bold text-[#0A0A0A]">34%</span>
              </div>
            </div>
            <p className="text-body-small text-[#6B7280] mb-1">Conversioni</p>
            <p className="text-[#0A0A0A] text-3xl font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              234
            </p>
          </div>
        </div>
      </div>

      {/* AI Insights Cards */}
      <div className="bg-white border-4 border-[#000] rounded-lg shadow-brutal-lg p-8 mb-8">
        <h3 className="text-h3 mb-6">AI Insights Cards</h3>
        <p className="text-body-small text-[#6B7280] mb-6">
          Intelligent recommendations with priority levels
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* High Priority Insight */}
          <div className="bg-gradient-to-br from-[#0D7EFF] to-[#7209B7] border-4 border-[#000] rounded-lg shadow-brutal-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm border-2 border-white/40 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <h4 className="text-body text-white" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}>
                AI Insights
              </h4>
            </div>

            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-lg p-4">
                <div className="flex items-start gap-3 mb-2">
                  <AlertCircle className="w-5 h-5 text-[#FFD60A] flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h5 className="text-sm font-bold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        Picco di traffico nel pomeriggio
                      </h5>
                      <span className="px-2 py-0.5 bg-[#FF006E] border-2 border-[#000] rounded text-white text-xs font-bold">
                        HIGH
                      </span>
                    </div>
                    <p className="text-body-small text-white/90">
                      Gli utenti sono più attivi tra le 14:00 e le 16:00. Programma i post in questa fascia.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-lg p-4">
                <div className="flex items-start gap-3 mb-2">
                  <CheckCircle className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h5 className="text-sm font-bold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        Articoli su OKR performano meglio
                      </h5>
                      <span className="px-2 py-0.5 bg-[#FFD60A] border-2 border-[#000] rounded text-[#0A0A0A] text-xs font-bold">
                        MEDIUM
                      </span>
                    </div>
                    <p className="text-body-small text-white/90">
                      +45% engagement rispetto ad altri topic. Crea più contenuti su questo tema.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Alternative Layout */}
          <div className="bg-white border-4 border-[#000] rounded-lg shadow-brutal p-6">
            <h4 className="text-body mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}>
              Recommendations
            </h4>

            <div className="space-y-3">
              <div className="border-l-4 border-[#FF006E] bg-[#FFFCF2] p-4 rounded-r-lg">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-[#FF006E] border-2 border-[#000] rounded text-white text-xs font-bold">
                    URGENT
                  </span>
                  <p className="text-sm font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    12 lead qualificati da contattare
                  </p>
                </div>
                <p className="text-body-small text-[#6B7280]">
                  Follow-up consigliato entro 48h per massimizzare conversioni
                </p>
              </div>

              <div className="border-l-4 border-[#FFD60A] bg-[#FFFCF2] p-4 rounded-r-lg">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-[#FFD60A] border-2 border-[#000] rounded text-[#0A0A0A] text-xs font-bold">
                    MEDIUM
                  </span>
                  <p className="text-sm font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    Ottimizza meta description
                  </p>
                </div>
                <p className="text-body-small text-[#6B7280]">
                  5 articoli hanno description troppo corta ({"<"}120 caratteri)
                </p>
              </div>

              <div className="border-l-4 border-[#0D7EFF] bg-[#FFFCF2] p-4 rounded-r-lg">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-[#0D7EFF] border-2 border-[#000] rounded text-white text-xs font-bold">
                    INFO
                  </span>
                  <p className="text-sm font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    Backup completato con successo
                  </p>
                </div>
                <p className="text-body-small text-[#6B7280]">
                  Ultimo backup: 2 ore fa • 2.4 MB
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Activity Timeline */}
      <div className="bg-white border-4 border-[#000] rounded-lg shadow-brutal-lg p-8 mb-8">
        <h3 className="text-h3 mb-6">Activity Timeline</h3>
        <p className="text-body-small text-[#6B7280] mb-6">
          Chronological list of recent activities with timestamps
        </p>

        <div className="space-y-4">
          <div className="flex gap-4 p-4 bg-[#FFFCF2] border-3 border-[#000] rounded-lg hover:shadow-brutal-sm transition-all">
            <div className="w-10 h-10 bg-[#7209B7] border-2 border-[#000] rounded-lg flex items-center justify-center flex-shrink-0">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-body-small text-[#0A0A0A] mb-1">
                Nuovo articolo pubblicato: <strong>"Product-Market Fit"</strong>
              </p>
              <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                <Clock className="w-3.5 h-3.5" />
                2 ore fa
              </div>
            </div>
          </div>

          <div className="flex gap-4 p-4 bg-[#FFFCF2] border-3 border-[#000] rounded-lg hover:shadow-brutal-sm transition-all">
            <div className="w-10 h-10 bg-[#FF006E] border-2 border-[#000] rounded-lg flex items-center justify-center flex-shrink-0">
              <Users className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-body-small text-[#0A0A0A] mb-1">
                Nuova conversazione da <strong>Marco R.</strong>
              </p>
              <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                <Clock className="w-3.5 h-3.5" />
                3 ore fa
              </div>
            </div>
          </div>

          <div className="flex gap-4 p-4 bg-[#FFFCF2] border-3 border-[#000] rounded-lg hover:shadow-brutal-sm transition-all">
            <div className="w-10 h-10 bg-[#0D7EFF] border-2 border-[#000] rounded-lg flex items-center justify-center flex-shrink-0">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-body-small text-[#0A0A0A] mb-1">
                Articolo <strong>"OKR vs KPI"</strong> programmato per domani
              </p>
              <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                <Clock className="w-3.5 h-3.5" />
                5 ore fa
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Priority Badges */}
      <div className="bg-white border-4 border-[#000] rounded-lg shadow-brutal-lg p-8 mb-8">
        <h3 className="text-h3 mb-6">Priority Badges</h3>
        <p className="text-body-small text-[#6B7280] mb-6">
          Status and priority indicators for tasks and items
        </p>

        <div className="space-y-6">
          <div>
            <p className="text-body-small font-bold mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Priority Levels
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1.5 bg-[#FF006E] border-2 border-[#000] rounded text-white text-sm font-bold">
                URGENT
              </span>
              <span className="px-3 py-1.5 bg-[#FFD60A] border-2 border-[#000] rounded text-[#0A0A0A] text-sm font-bold">
                HIGH
              </span>
              <span className="px-3 py-1.5 bg-[#0D7EFF] border-2 border-[#000] rounded text-white text-sm font-bold">
                MEDIUM
              </span>
              <span className="px-3 py-1.5 bg-[#6B7280] border-2 border-[#000] rounded text-white text-sm font-bold">
                LOW
              </span>
            </div>
          </div>

          <div>
            <p className="text-body-small font-bold mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Status Indicators
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1.5 bg-[#10B981] border-2 border-[#000] rounded text-white text-sm font-bold">
                ✓ PUBLISHED
              </span>
              <span className="px-3 py-1.5 bg-[#FFD60A] border-2 border-[#000] rounded text-[#0A0A0A] text-sm font-bold">
                ◷ DRAFT
              </span>
              <span className="px-3 py-1.5 bg-[#7209B7] border-2 border-[#000] rounded text-white text-sm font-bold">
                ⏱ SCHEDULED
              </span>
              <span className="px-3 py-1.5 bg-[#EF4444] border-2 border-[#000] rounded text-white text-sm font-bold">
                ✕ ARCHIVED
              </span>
            </div>
          </div>

          <div>
            <p className="text-body-small font-bold mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Trend Indicators
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="flex items-center gap-1 px-3 py-1.5 bg-[#10B981]/20 border-2 border-[#10B981] rounded text-[#0A0A0A] text-sm font-mono font-bold">
                <ArrowUp className="w-3.5 h-3.5 text-[#10B981]" />
                +23%
              </span>
              <span className="flex items-center gap-1 px-3 py-1.5 bg-[#EF4444]/20 border-2 border-[#EF4444] rounded text-[#0A0A0A] text-sm font-mono font-bold">
                <ArrowDown className="w-3.5 h-3.5 text-[#EF4444]" />
                -8%
              </span>
              <span className="px-3 py-1.5 bg-[#6B7280]/20 border-2 border-[#6B7280] rounded text-[#0A0A0A] text-sm font-mono font-bold">
                ± 0%
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions Grid */}
      <div className="bg-white border-4 border-[#000] rounded-lg shadow-brutal-lg p-8">
        <h3 className="text-h3 mb-6">Quick Actions</h3>
        <p className="text-body-small text-[#6B7280] mb-6">
          Large action buttons for common dashboard tasks
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <button className="bg-[#7209B7] border-4 border-[#000] rounded-lg shadow-brutal hover:-translate-y-2 hover:shadow-brutal-lg transition-all p-6 text-left group">
            <div className="w-12 h-12 bg-white border-3 border-[#000] rounded-lg flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform">
              <FileText className="w-6 h-6 text-[#7209B7]" />
            </div>
            <h4 className="text-body text-white mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}>
              Scrivi nuovo articolo
            </h4>
            <p className="text-body-small text-white/80">
              Crea e pubblica contenuti
            </p>
          </button>

          <button className="bg-[#FF006E] border-4 border-[#000] rounded-lg shadow-brutal hover:-translate-y-2 hover:shadow-brutal-lg transition-all p-6 text-left group">
            <div className="w-12 h-12 bg-white border-3 border-[#000] rounded-lg flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform">
              <Users className="w-6 h-6 text-[#FF006E]" />
            </div>
            <h4 className="text-body text-white mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}>
              Gestisci conversazioni
            </h4>
            <p className="text-body-small text-white/80">
              Rispondi ai messaggi
            </p>
          </button>

          <button className="bg-[#0D7EFF] border-4 border-[#000] rounded-lg shadow-brutal hover:-translate-y-2 hover:shadow-brutal-lg transition-all p-6 text-left group">
            <div className="w-12 h-12 bg-white border-3 border-[#000] rounded-lg flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform">
              <TrendingUp className="w-6 h-6 text-[#0D7EFF]" />
            </div>
            <h4 className="text-body text-white mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}>
              Vedi Analytics
            </h4>
            <p className="text-body-small text-white/80">
              Monitora performance
            </p>
          </button>
        </div>
      </div>
    </section>
  );
}

export function DataVisualizationSection() {
  return (
    <section id="charts" className="mb-32 scroll-mt-24">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 bg-[#FFD60A] border-3 border-[#000] rounded-lg flex items-center justify-center">
          <BarChart3 className="w-6 h-6 text-[#0A0A0A]" />
        </div>
        <div>
          <h2 className="text-h2">Data Visualization</h2>
          <p className="text-body-small text-[#6B7280]">Charts and graphs with Recharts integration</p>
        </div>
      </div>

      <div className="bg-white border-4 border-[#000] rounded-lg shadow-brutal-lg p-8">
        <h3 className="text-h3 mb-6">Chart Styling</h3>
        <p className="text-body-small text-[#6B7280] mb-6">
          All charts use the neobrutalist color palette and thick borders
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Chart Color Palette */}
          <div className="bg-[#FFFCF2] border-3 border-[#000] rounded-lg p-6">
            <h4 className="text-body mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}>
              Chart Color Palette
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#0D7EFF] border-3 border-[#000] rounded" />
                <div>
                  <p className="text-body-small font-mono font-bold">#0D7EFF</p>
                  <p className="text-xs text-[#6B7280]">Primary data series</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#7209B7] border-3 border-[#000] rounded" />
                <div>
                  <p className="text-body-small font-mono font-bold">#7209B7</p>
                  <p className="text-xs text-[#6B7280]">Secondary data series</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#FF006E] border-3 border-[#000] rounded" />
                <div>
                  <p className="text-body-small font-mono font-bold">#FF006E</p>
                  <p className="text-xs text-[#6B7280]">Accent data series</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#FFD60A] border-3 border-[#000] rounded" />
                <div>
                  <p className="text-body-small font-mono font-bold">#FFD60A</p>
                  <p className="text-xs text-[#6B7280]">Highlight data series</p>
                </div>
              </div>
            </div>
          </div>

          {/* Chart Configuration */}
          <div className="bg-[#FFFCF2] border-3 border-[#000] rounded-lg p-6">
            <h4 className="text-body mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}>
              Recharts Configuration
            </h4>
            <div className="bg-[#0A0A0A] border-2 border-[#000] rounded p-4">
              <pre className="text-xs font-mono text-[#0D7EFF] overflow-x-auto">
{`<LineChart data={data}>
  <CartesianGrid 
    stroke="#E5E5E5" 
    strokeWidth={2} 
  />
  <Line 
    type="monotone" 
    dataKey="value"
    stroke="#0D7EFF"
    strokeWidth={3}
    dot={{ 
      fill: "#0D7EFF",
      stroke: "#000",
      strokeWidth: 2,
      r: 4 
    }}
  />
</LineChart>`}
              </pre>
            </div>
          </div>
        </div>

        <div className="mt-6 p-6 bg-[#FFD60A]/10 border-3 border-[#FFD60A] rounded-lg">
          <p className="text-body-small text-[#0A0A0A]">
            <strong>📊 Chart Guidelines:</strong> Use thick strokes (3px+), bold colors, and black borders on data points. 
            Grid lines should be light gray (#E5E5E5) with 2px width. All charts should be wrapped in cards with border-4 and shadow-brutal.
          </p>
        </div>
      </div>
    </section>
  );
}
