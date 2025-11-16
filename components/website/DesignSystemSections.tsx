import React from 'react';
import { 
  FileText, Clock, Calendar, Eye, ChevronDown, Zap, Twitter, Linkedin,
  Facebook, Link2, Grid3x3, Menu, ArrowRight, ChevronRight
} from 'lucide-react';
import { NeoBadge } from './NeoBadge';

export function BlogComponentsSection() {
  return (
    <section id="blog" className="mb-32 scroll-mt-24">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 bg-[#FF006E] border-3 border-[#000] rounded-lg flex items-center justify-center">
          <FileText className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-h2">Blog Components</h2>
          <p className="text-body-small text-[#6B7280]">Components for engaging blog experiences</p>
        </div>
      </div>

      {/* Reading Progress Bar */}
      <div className="bg-white border-4 border-[#000] rounded-lg shadow-brutal-lg p-8 mb-8">
        <h3 className="text-h3 mb-6">Reading Progress Bar</h3>
        <div className="space-y-6">
          <div>
            <p className="text-body-small text-[#6B7280] mb-4">Fixed top progress indicator that shows article reading completion</p>
            <div className="bg-[#FFFCF2] border-3 border-[#000] rounded-lg p-4 relative overflow-hidden">
              <div className="h-1 bg-[#E5E5E5] rounded-full mb-4">
                <div className="h-full bg-[#0D7EFF] rounded-full transition-all duration-300" style={{ width: '60%' }} />
              </div>
              <p className="text-body-small text-[#6B7280]">Scroll progress: 60%</p>
            </div>
          </div>
          
          {/* Desktop vs Mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-body-small font-bold mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Desktop (Top Fixed)
              </p>
              <div className="bg-[#FFFCF2] border-3 border-[#000] rounded-lg h-40 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#0D7EFF]" style={{ width: '45%' }} />
                <div className="p-4 text-xs text-[#6B7280]">
                  Progress bar stays at viewport top
                </div>
              </div>
            </div>
            <div>
              <p className="text-body-small font-bold mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Mobile (Header)
              </p>
              <div className="bg-[#FFFCF2] border-3 border-[#000] rounded-lg h-40 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#FF006E]" style={{ width: '70%' }} />
                <div className="p-4 text-xs text-[#6B7280]">
                  Responsive, thinner on mobile
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="bg-white border-4 border-[#000] rounded-lg shadow-brutal-lg p-8 mb-8">
        <h3 className="text-h3 mb-6">Table of Contents (ToC)</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <p className="text-body-small font-bold mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Desktop (Sticky Sidebar)
            </p>
            <div className="bg-[#FFFCF2] border-3 border-[#000] rounded-lg p-6">
              <h4 className="text-sm font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                📑 Table of Contents
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#0D7EFF] font-bold">→</span>
                  <a href="#" className="text-sm text-[#0D7EFF] hover:underline">Introduction</a>
                </li>
                <li className="flex items-start gap-2 pl-4">
                  <span className="text-[#6B7280]">→</span>
                  <a href="#" className="text-sm text-[#6B7280] hover:text-[#0D7EFF] transition-colors">Key Concepts</a>
                </li>
                <li className="flex items-start gap-2 pl-4">
                  <span className="text-[#6B7280]">→</span>
                  <a href="#" className="text-sm text-[#6B7280] hover:text-[#0D7EFF] transition-colors">Implementation</a>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6B7280]">→</span>
                  <a href="#" className="text-sm text-[#6B7280] hover:text-[#0D7EFF] transition-colors">Conclusion</a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <p className="text-body-small font-bold mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Mobile (Collapsible)
            </p>
            <div className="bg-[#FFFCF2] border-3 border-[#000] rounded-lg p-4">
              <button className="w-full flex items-center justify-between text-sm font-bold py-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                <span>📑 Table of Contents</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Boxes */}
      <div className="bg-white border-4 border-[#000] rounded-lg shadow-brutal-lg p-8 mb-8">
        <h3 className="text-h3 mb-6">CTA Boxes</h3>
        <div className="space-y-6">
          {/* Inline CTA */}
          <div>
            <p className="text-body-small font-bold mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Inline CTA (In-Article)
            </p>
            <div className="bg-gradient-to-r from-[#0D7EFF] to-[#7209B7] border-4 border-[#000] rounded-lg p-6 text-white">
              <h4 className="text-body mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}>
                💡 Want to learn more?
              </h4>
              <p className="text-body-small mb-4 text-white/90">
                Subscribe to get weekly insights on product management and design.
              </p>
              <button className="px-4 py-2 bg-[#FFD60A] text-[#0A0A0A] border-3 border-[#000] rounded-lg shadow-brutal-sm hover:-translate-y-1 hover:shadow-brutal transition-all font-bold text-sm">
                Subscribe Now
              </button>
            </div>
          </div>

          {/* End-of-Section CTA */}
          <div>
            <p className="text-body-small font-bold mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              End-of-Section CTA
            </p>
            <div className="bg-[#FFD60A] border-4 border-[#000] rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#0A0A0A] border-3 border-[#000] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-[#FFD60A]" />
                </div>
                <div className="flex-1">
                  <h4 className="text-body mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}>
                    Ready to take action?
                  </h4>
                  <p className="text-body-small mb-4 text-[#2D2D2D]">
                    Apply these concepts to your next project.
                  </p>
                  <button className="px-4 py-2 bg-[#0A0A0A] text-white border-3 border-[#000] rounded-lg shadow-brutal-sm hover:-translate-y-1 hover:shadow-brutal transition-all font-bold text-sm">
                    Get Started →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Share Buttons */}
      <div className="bg-white border-4 border-[#000] rounded-lg shadow-brutal-lg p-8 mb-8">
        <h3 className="text-h3 mb-6">Social Share</h3>
        <div className="flex flex-wrap gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-[#1DA1F2] text-white border-3 border-[#000] rounded-lg shadow-brutal-sm hover:-translate-y-1 hover:shadow-brutal transition-all font-bold text-sm">
            <Twitter className="w-4 h-4" />
            Twitter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-[#0A66C2] text-white border-3 border-[#000] rounded-lg shadow-brutal-sm hover:-translate-y-1 hover:shadow-brutal transition-all font-bold text-sm">
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-[#1877F2] text-white border-3 border-[#000] rounded-lg shadow-brutal-sm hover:-translate-y-1 hover:shadow-brutal transition-all font-bold text-sm">
            <Facebook className="w-4 h-4" />
            Facebook
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border-3 border-[#000] rounded-lg shadow-brutal-sm hover:-translate-y-1 hover:shadow-brutal transition-all font-bold text-sm">
            <Link2 className="w-4 h-4" />
            Copy Link
          </button>
        </div>
      </div>

      {/* Blog Article Card */}
      <div className="bg-white border-4 border-[#000] rounded-lg shadow-brutal-lg p-8">
        <h3 className="text-h3 mb-6">Blog Article Card</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Desktop Version */}
          <div>
            <p className="text-body-small font-bold mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Desktop
            </p>
            <div className="bg-white border-4 border-[#000] rounded-lg shadow-brutal hover:-translate-y-2 hover:shadow-brutal-lg transition-all overflow-hidden cursor-pointer">
              <div className="h-48 bg-gradient-to-br from-[#0D7EFF] to-[#7209B7] border-b-4 border-[#000] relative">
                <div className="absolute top-4 left-4">
                  <NeoBadge color="yellow">Product Management</NeoBadge>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-body mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}>
                  How I Turned Failure into Feature
                </h4>
                <p className="text-body-small text-[#6B7280] mb-4">
                  A deep dive into product management lessons learned from shipping products that users actually love...
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-xs text-[#6B7280]">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      15 Nov 2025
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      8 min
                    </span>
                  </div>
                  <Eye className="w-4 h-4 text-[#6B7280]" />
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Version */}
          <div>
            <p className="text-body-small font-bold mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Mobile
            </p>
            <div className="max-w-[320px] mx-auto bg-white border-4 border-[#000] rounded-lg shadow-brutal">
              <div className="h-40 bg-gradient-to-br from-[#FF006E] to-[#FFD60A] border-b-4 border-[#000] relative">
                <div className="absolute top-3 left-3">
                  <NeoBadge color="blue">Design</NeoBadge>
                </div>
              </div>
              <div className="p-4">
                <h4 className="text-sm mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}>
                  Design System 101
                </h4>
                <p className="text-xs text-[#6B7280] mb-3">
                  Building scalable design systems...
                </p>
                <div className="flex items-center gap-3 text-xs text-[#6B7280]">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    12 Nov
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    5 min
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PatternsTexturesSection() {
  return (
    <section id="patterns" className="mb-32 scroll-mt-24">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 bg-[#7209B7] border-3 border-[#000] rounded-lg flex items-center justify-center">
          <Grid3x3 className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-h2">Patterns & Textures</h2>
          <p className="text-body-small text-[#6B7280]">Background patterns and decorative elements</p>
        </div>
      </div>

      {/* Dot Pattern */}
      <div className="bg-white border-4 border-[#000] rounded-lg shadow-brutal-lg p-8 mb-8">
        <h3 className="text-h3 mb-6">Dot Pattern</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-body-small font-bold mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Light Background
            </p>
            <div 
              className="h-48 border-3 border-[#000] rounded-lg relative"
              style={{
                backgroundColor: '#FFFCF2'
              }}
            >
              <div 
                className="absolute inset-0 rounded-lg"
                style={{
                  backgroundImage: 'radial-gradient(circle, #0A0A0A 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                  opacity: 0.1
                }}
              />
            </div>
          </div>
          <div>
            <p className="text-body-small font-bold mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Dark Background
            </p>
            <div 
              className="h-48 border-3 border-[#000] rounded-lg relative"
              style={{
                backgroundColor: '#0A0A0A'
              }}
            >
              <div 
                className="absolute inset-0 rounded-lg"
                style={{
                  backgroundImage: 'radial-gradient(circle, #FFFFFF 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                  opacity: 0.1
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Grid Pattern */}
      <div className="bg-white border-4 border-[#000] rounded-lg shadow-brutal-lg p-8 mb-8">
        <h3 className="text-h3 mb-6">Grid Pattern</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-body-small font-bold mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Subtle Grid
            </p>
            <div 
              className="h-48 border-3 border-[#000] rounded-lg bg-[#FFFCF2]"
              style={{
                backgroundImage: 'linear-gradient(#E5E5E5 1px, transparent 1px), linear-gradient(90deg, #E5E5E5 1px, transparent 1px)',
                backgroundSize: '30px 30px'
              }}
            />
          </div>
          <div>
            <p className="text-body-small font-bold mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Bold Grid
            </p>
            <div 
              className="h-48 border-3 border-[#000] rounded-lg bg-white"
              style={{
                backgroundImage: 'linear-gradient(#0A0A0A 2px, transparent 2px), linear-gradient(90deg, #0A0A0A 2px, transparent 2px)',
                backgroundSize: '40px 40px'
              }}
            />
          </div>
        </div>
      </div>

      {/* Texture Cards */}
      <div className="bg-white border-4 border-[#000] rounded-lg shadow-brutal-lg p-8 mb-8">
        <h3 className="text-h3 mb-6">Textured Cards</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Noise Texture */}
          <div className="relative overflow-hidden border-4 border-[#000] rounded-lg h-64">
            <div 
              className="absolute inset-0 bg-[#0D7EFF]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.1'/%3E%3C/svg%3E")`,
              }}
            />
            <div className="relative z-10 p-6 text-white">
              <h4 className="text-body mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}>
                Noise Texture
              </h4>
              <p className="text-body-small text-white/90">
                Subtle grain adds depth
              </p>
            </div>
          </div>

          {/* Gradient + Dots */}
          <div 
            className="relative overflow-hidden border-4 border-[#000] rounded-lg h-64 bg-gradient-to-br from-[#FF006E] to-[#7209B7]"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '24px 24px'
            }}
          >
            <div className="relative z-10 p-6 text-white">
              <h4 className="text-body mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}>
                Gradient + Dots
              </h4>
              <p className="text-body-small text-white/90">
                Combined patterns
              </p>
            </div>
          </div>

          {/* Diagonal Lines */}
          <div 
            className="relative overflow-hidden border-4 border-[#000] rounded-lg h-64 bg-[#FFD60A]"
            style={{
              backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.05) 10px, rgba(0,0,0,0.05) 20px)'
            }}
          >
            <div className="relative z-10 p-6">
              <h4 className="text-body mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}>
                Diagonal Stripes
              </h4>
              <p className="text-body-small text-[#2D2D2D]">
                Dynamic movement
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Shapes */}
      <div className="bg-white border-4 border-[#000] rounded-lg shadow-brutal-lg p-8">
        <h3 className="text-h3 mb-6">Decorative Shapes</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Floating Shapes */}
          <div className="bg-[#FFFCF2] border-3 border-[#000] rounded-lg h-64 relative overflow-hidden">
            <div className="absolute top-4 right-4 w-20 h-20 bg-[#0D7EFF] opacity-20 rounded-full" />
            <div className="absolute bottom-6 left-6 w-16 h-16 bg-[#FF006E] opacity-20 rotate-45" />
            <div className="absolute top-1/2 left-1/3 w-12 h-12 bg-[#FFD60A] opacity-20 rounded-lg" />
            <div className="relative z-10 p-6">
              <h4 className="text-body mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}>
                Floating Shapes
              </h4>
              <p className="text-body-small text-[#6B7280]">
                Background decoration for hero sections
              </p>
            </div>
          </div>

          {/* Corner Accents */}
          <div className="bg-white border-3 border-[#000] rounded-lg h-64 relative overflow-hidden">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#7209B7] opacity-10 rotate-12" />
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#0D7EFF] opacity-10 rounded-full" />
            <div className="relative z-10 p-6">
              <h4 className="text-body mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}>
                Corner Accents
              </h4>
              <p className="text-body-small text-[#6B7280]">
                Subtle depth for cards
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function NavigationComponentsSection() {
  return (
    <section id="navigation" className="mb-32 scroll-mt-24">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 bg-[#0D7EFF] border-3 border-[#000] rounded-lg flex items-center justify-center">
          <Menu className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-h2">Navigation Components</h2>
          <p className="text-body-small text-[#6B7280]">Menus, links, and navigation patterns</p>
        </div>
      </div>

      {/* Header/Menu */}
      <div className="bg-white border-4 border-[#000] rounded-lg shadow-brutal-lg p-8 mb-8">
        <h3 className="text-h3 mb-6">Header & Menu</h3>
        <div className="space-y-6">
          {/* Desktop Header */}
          <div>
            <p className="text-body-small font-bold mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Desktop Header
            </p>
            <div className="bg-white border-4 border-[#000] rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#0D7EFF] to-[#FF006E] border-2 border-[#000] rounded" />
                  <span className="font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    Mattia Cintura
                  </span>
                </div>
                <nav className="flex items-center gap-6">
                  <a href="#" className="text-sm hover:text-[#0D7EFF] transition-colors" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>
                    Home
                  </a>
                  <a href="#" className="text-sm hover:text-[#0D7EFF] transition-colors" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>
                    Blog
                  </a>
                  <a href="#" className="text-sm hover:text-[#0D7EFF] transition-colors" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>
                    Portfolio
                  </a>
                  <button className="px-4 py-2 bg-[#0D7EFF] text-white border-3 border-[#000] rounded-lg shadow-brutal-sm hover:-translate-y-1 hover:shadow-brutal transition-all text-sm font-bold">
                    Contact
                  </button>
                </nav>
              </div>
            </div>
          </div>

          {/* Mobile Header */}
          <div>
            <p className="text-body-small font-bold mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Mobile Header
            </p>
            <div className="max-w-[375px] bg-white border-4 border-[#000] rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-gradient-to-br from-[#0D7EFF] to-[#FF006E] border-2 border-[#000] rounded" />
                  <span className="text-sm font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    MC
                  </span>
                </div>
                <button className="p-2 border-2 border-[#000] rounded">
                  <Menu className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Links & Text Styles */}
      <div className="bg-white border-4 border-[#000] rounded-lg shadow-brutal-lg p-8 mb-8">
        <h3 className="text-h3 mb-6">Links & Colored Text</h3>
        <div className="space-y-6">
          {/* Standard Links */}
          <div>
            <p className="text-body-small font-bold mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Link Styles
            </p>
            <div className="space-y-3 bg-[#FFFCF2] border-2 border-[#E5E5E5] rounded-lg p-6">
              <p className="text-body">
                This is a{' '}
                <a href="#" className="text-[#0D7EFF] hover:underline font-bold">
                  standard link
                </a>{' '}
                with hover underline.
              </p>
              <p className="text-body">
                This is a{' '}
                <a href="#" className="text-[#FF006E] underline hover:no-underline font-bold">
                  pink link
                </a>{' '}
                with reverse hover.
              </p>
              <p className="text-body">
                This is an{' '}
                <a href="#" className="inline-flex items-center gap-1 text-[#7209B7] hover:text-[#0D7EFF] transition-colors font-bold">
                  external link
                  <ArrowRight className="w-3 h-3" />
                </a>
              </p>
            </div>
          </div>

          {/* Colored Text */}
          <div>
            <p className="text-body-small font-bold mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Colored Text Highlights
            </p>
            <div className="bg-[#FFFCF2] border-2 border-[#E5E5E5] rounded-lg p-6">
              <p className="text-body mb-3">
                Highlight{' '}
                <strong className="text-[#0D7EFF]">important concepts</strong>{' '}
                with color to{' '}
                <strong className="text-[#FF006E]">draw attention</strong>{' '}
                and create{' '}
                <strong className="text-[#7209B7]">visual hierarchy</strong>.
              </p>
              <p className="text-body">
                Use{' '}
                <code className="px-2 py-0.5 bg-[#FFD60A] border-2 border-[#000] rounded text-sm font-mono font-bold">
                  inline code
                </code>{' '}
                with yellow background for technical terms.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="bg-white border-4 border-[#000] rounded-lg shadow-brutal-lg p-8 mb-8">
        <h3 className="text-h3 mb-6">Breadcrumbs</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-body-small font-bold mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Desktop
            </p>
            <div className="bg-[#FFFCF2] border-2 border-[#E5E5E5] rounded-lg p-4">
              <nav className="flex items-center gap-2 text-sm">
                <a href="#" className="text-[#6B7280] hover:text-[#0D7EFF] transition-colors">
                  Home
                </a>
                <ChevronRight className="w-3.5 h-3.5 text-[#6B7280]" />
                <a href="#" className="text-[#6B7280] hover:text-[#0D7EFF] transition-colors">
                  Blog
                </a>
                <ChevronRight className="w-3.5 h-3.5 text-[#6B7280]" />
                <span className="text-[#0A0A0A] font-bold">Current Article</span>
              </nav>
            </div>
          </div>
          <div>
            <p className="text-body-small font-bold mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Mobile (Compact)
            </p>
            <div className="bg-[#FFFCF2] border-2 border-[#E5E5E5] rounded-lg p-4 max-w-[320px]">
              <nav className="flex items-center gap-2 text-xs">
                <a href="#" className="text-[#6B7280]">
                  Blog
                </a>
                <ChevronRight className="w-3 h-3 text-[#6B7280]" />
                <span className="text-[#0A0A0A] font-bold truncate">
                  Current Article
                </span>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="bg-white border-4 border-[#000] rounded-lg shadow-brutal-lg p-8">
        <h3 className="text-h3 mb-6">Pagination</h3>
        <div className="flex flex-wrap items-center justify-center gap-2">
          <button className="w-10 h-10 bg-white border-3 border-[#000] rounded-lg shadow-brutal-sm hover:-translate-y-1 hover:shadow-brutal transition-all flex items-center justify-center font-bold">
            ←
          </button>
          <button className="w-10 h-10 bg-white border-3 border-[#000] rounded-lg shadow-brutal-sm hover:-translate-y-1 hover:shadow-brutal transition-all flex items-center justify-center font-bold text-sm">
            1
          </button>
          <button className="w-10 h-10 bg-[#0D7EFF] text-white border-3 border-[#000] rounded-lg shadow-brutal flex items-center justify-center font-bold text-sm">
            2
          </button>
          <button className="w-10 h-10 bg-white border-3 border-[#000] rounded-lg shadow-brutal-sm hover:-translate-y-1 hover:shadow-brutal transition-all flex items-center justify-center font-bold text-sm">
            3
          </button>
          <span className="px-2 text-[#6B7280]">...</span>
          <button className="w-10 h-10 bg-white border-3 border-[#000] rounded-lg shadow-brutal-sm hover:-translate-y-1 hover:shadow-brutal transition-all flex items-center justify-center font-bold text-sm">
            10
          </button>
          <button className="w-10 h-10 bg-white border-3 border-[#000] rounded-lg shadow-brutal-sm hover:-translate-y-1 hover:shadow-brutal transition-all flex items-center justify-center font-bold">
            →
          </button>
        </div>
      </div>
    </section>
  );
}
