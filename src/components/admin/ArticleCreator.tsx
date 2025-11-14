import React, { useState } from 'react';
import { Sparkles, Plus, Save, Calendar, Eye, Send, Wand2, RefreshCw, Tag, Clock } from 'lucide-react';

export function ArticleCreator() {
  const [topic, setTopic] = useState('');
  const [keywords, setKeywords] = useState('');
  const [generatedDraft, setGeneratedDraft] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Product');
  const [scheduledDate, setScheduledDate] = useState('');
  const [content, setContent] = useState('');

  const categories = ['Product', 'Strategy', 'Design', 'Development', 'OKRs', 'Leadership'];

  const handleGenerate = async () => {
    setIsGenerating(true);
    
    // Mock AI generation
    setTimeout(() => {
      const mockDraft = `# ${topic}

## Introduzione
Negli ultimi mesi ho riflettuto molto su ${topic}, specialmente nel contesto del Product Management moderno. 

## Il problema
La sfida principale che vedo è che molti PM si concentrano troppo sugli strumenti invece che sui principi fondamentali. Keywords: ${keywords}

## La mia esperienza
Nel mio percorso da designer a developer a PM, ho imparato che...

## 3 Lezioni chiave

### 1. Inizia con il perché
Non importa quanto sia bella la soluzione se risolve il problema sbagliato.

### 2. Misura ciò che conta
Le metriche vanity sono tentanti, ma i KPI significativi fanno la differenza.

### 3. Fallisci velocemente
Ogni errore è un'opportunità di apprendimento se sai ascoltare.

## Conclusione
${topic} è fondamentale per qualsiasi PM che vuole avere impatto reale. La chiave è...`;

      setGeneratedDraft(mockDraft);
      setContent(mockDraft);
      setTitle(topic);
      setIsGenerating(false);
    }, 2000);
  };

  const handleSaveDraft = () => {
    alert('Bozza salvata! (mock)');
  };

  const handleSchedule = () => {
    if (!scheduledDate) {
      alert('Seleziona una data di pubblicazione');
      return;
    }
    alert(`Articolo programmato per ${scheduledDate} (mock)`);
  };

  const handlePublishNow = () => {
    alert('Articolo pubblicato! (mock)');
  };

  return (
    <div className="p-6 md:p-8 max-w-[1400px] mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-h2 text-[#0A0A0A] mb-2">
          Crea nuovo articolo
        </h1>
        <p className="text-body text-[#6B7280]">
          Usa l'AI per generare bozze o scrivi da zero
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - AI Generator */}
        <div className="lg:col-span-1 space-y-6">
          {/* AI Generator Card */}
          <div className="bg-gradient-to-br from-[#7209B7] to-[#FF006E] border-4 border-[#000] rounded-lg shadow-brutal-lg p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm border-2 border-white/40 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <h2
                className="text-white"
                style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '18px' }}
              >
                AI Generator
              </h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block mb-2 text-white text-body-small">
                  Argomento principale
                </label>
                <input
                  type="text"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="es. Product-Market Fit"
                  className="w-full px-4 py-3 bg-white/95 backdrop-blur-sm border-3 border-[#000] rounded-lg shadow-brutal-sm focus:outline-none focus:shadow-brutal transition-all"
                  style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}
                />
              </div>

              <div>
                <label className="block mb-2 text-white text-body-small">
                  Keywords (separate con virgola)
                </label>
                <input
                  type="text"
                  value={keywords}
                  onChange={(e) => setKeywords(e.target.value)}
                  placeholder="OKR, metrics, strategy"
                  className="w-full px-4 py-3 bg-white/95 backdrop-blur-sm border-3 border-[#000] rounded-lg shadow-brutal-sm focus:outline-none focus:shadow-brutal transition-all"
                  style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}
                />
              </div>

              <button
                onClick={handleGenerate}
                disabled={!topic || isGenerating}
                className={`w-full flex items-center justify-center gap-2 px-6 py-4 bg-white text-[#7209B7] border-4 border-[#000] rounded-lg shadow-brutal transition-all ${
                  !topic || isGenerating
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:-translate-y-1 hover:shadow-brutal-lg'
                }`}
                style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '14px' }}
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="w-5 h-5 animate-spin" />
                    Generazione in corso...
                  </>
                ) : (
                  <>
                    <Wand2 className="w-5 h-5" />
                    Genera bozza con AI
                  </>
                )}
              </button>
            </div>

            {generatedDraft && (
              <div className="mt-4 p-3 bg-white/20 backdrop-blur-sm border-2 border-white/40 rounded-lg">
                <p className="text-white text-body-small">
                  ✓ Bozza generata! Modifica nell'editor →
                </p>
              </div>
            )}
          </div>

          {/* Metadata */}
          <div className="bg-white border-4 border-[#000] rounded-lg shadow-brutal p-6">
            <h3
              className="text-[#0A0A0A] mb-4"
              style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '16px' }}
            >
              Metadata
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block mb-2 text-[#2D2D2D] text-body-small">
                  Categoria
                </label>
                <div className="relative">
                  <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280]" />
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white border-3 border-[#000] rounded-lg shadow-brutal-sm focus:outline-none focus:shadow-brutal transition-all appearance-none"
                    style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}
                  >
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block mb-2 text-[#2D2D2D] text-body-small">
                  Tempo di lettura stimato
                </label>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280]" />
                  <input
                    type="text"
                    placeholder="8 min"
                    className="w-full pl-10 pr-4 py-3 bg-white border-3 border-[#000] rounded-lg shadow-brutal-sm focus:outline-none focus:shadow-brutal transition-all"
                    style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2 text-[#2D2D2D] text-body-small">
                  Data pubblicazione
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280]" />
                  <input
                    type="date"
                    value={scheduledDate}
                    onChange={(e) => setScheduledDate(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white border-3 border-[#000] rounded-lg shadow-brutal-sm focus:outline-none focus:shadow-brutal transition-all"
                    style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Editor */}
        <div className="lg:col-span-2 space-y-6">
          {/* Title */}
          <div className="bg-white border-4 border-[#000] rounded-lg shadow-brutal p-6">
            <label className="block mb-3 text-[#2D2D2D] text-body-small">
              Titolo articolo
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Inserisci un titolo accattivante..."
              className="w-full px-4 py-3 bg-white border-3 border-[#000] rounded-lg shadow-brutal-sm focus:outline-none focus:shadow-brutal transition-all text-[#0A0A0A]"
              style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: '20px' }}
            />
          </div>

          {/* Content Editor */}
          <div className="bg-white border-4 border-[#000] rounded-lg shadow-brutal p-6">
            <div className="flex items-center justify-between mb-4">
              <label className="text-[#2D2D2D] text-body-small">
                Contenuto (Markdown)
              </label>
              <div className="flex gap-2">
                <button
                  className="px-3 py-1.5 bg-[#FFFCF2] border-2 border-[#000] rounded text-[#2D2D2D] hover:bg-[#0D7EFF] hover:text-white transition-all text-body-small"
                  style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>
            </div>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Scrivi il tuo articolo qui o usa l'AI per generare una bozza..."
              rows={20}
              className="w-full px-4 py-3 bg-white border-3 border-[#000] rounded-lg shadow-brutal-sm focus:outline-none focus:shadow-brutal transition-all resize-y font-mono"
              style={{ fontSize: '14px', lineHeight: '1.6' }}
            />
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={handleSaveDraft}
              className="flex items-center gap-2 px-6 py-3 bg-white text-[#2D2D2D] border-3 border-[#000] rounded-lg shadow-brutal-sm hover:-translate-y-0.5 hover:shadow-brutal transition-all"
              style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: '14px' }}
            >
              <Save className="w-4 h-4" />
              Salva bozza
            </button>

            <button
              onClick={handleSchedule}
              className="flex items-center gap-2 px-6 py-3 bg-[#FFD60A] text-[#0A0A0A] border-3 border-[#000] rounded-lg shadow-brutal-sm hover:-translate-y-0.5 hover:shadow-brutal transition-all"
              style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: '14px' }}
            >
              <Calendar className="w-4 h-4" />
              Programma
            </button>

            <button
              onClick={handlePublishNow}
              className="flex items-center gap-2 px-6 py-3 bg-[#0D7EFF] text-white border-3 border-[#000] rounded-lg shadow-brutal hover:-translate-y-0.5 hover:shadow-brutal-lg transition-all ml-auto"
              style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '14px' }}
            >
              <Send className="w-4 h-4" />
              Pubblica ora
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
