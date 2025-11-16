/**
 * Tailwind Design System Configuration Tests
 *
 * Tests to verify that all design tokens are properly configured
 * according to the Neobrutalist Design System specification.
 *
 * This test suite validates:
 * - Brand colors (Electric Blue, Neon Pink, Cyber Yellow, Deep Purple, Lime Green)
 * - Semantic color mappings
 * - Functional colors
 * - Border utilities (brutal widths and radius)
 * - Box shadows (brutal shadows with colors)
 * - Spacing (8pt brutal grid)
 * - Typography (font families and sizes)
 */

import tailwindConfig from './tailwind.config';
import resolveConfig from 'tailwindcss/resolveConfig';

const fullConfig = resolveConfig(tailwindConfig);

describe('Neobrutalist Design System - Tailwind Configuration', () => {

  // ============================================
  // BRAND COLORS TESTS
  // ============================================

  describe('Brand Colors', () => {
    it('should have electric-blue defined (#0D7EFF)', () => {
      expect(fullConfig.theme.colors).toHaveProperty('electric-blue');
      expect(fullConfig.theme.colors['electric-blue']).toBe('#0D7EFF');
    });

    it('should have neon-pink defined (#FF006E)', () => {
      expect(fullConfig.theme.colors).toHaveProperty('neon-pink');
      expect(fullConfig.theme.colors['neon-pink']).toBe('#FF006E');
    });

    it('should have cyber-yellow defined (#FFD60A)', () => {
      expect(fullConfig.theme.colors).toHaveProperty('cyber-yellow');
      expect(fullConfig.theme.colors['cyber-yellow']).toBe('#FFD60A');
    });

    it('should have deep-purple defined (#7209B7)', () => {
      expect(fullConfig.theme.colors).toHaveProperty('deep-purple');
      expect(fullConfig.theme.colors['deep-purple']).toBe('#7209B7');
    });

    it('should have lime-green defined (#06FFA5)', () => {
      expect(fullConfig.theme.colors).toHaveProperty('lime-green');
      expect(fullConfig.theme.colors['lime-green']).toBe('#06FFA5');
    });

    it('should have teal defined (#2A687A)', () => {
      expect(fullConfig.theme.colors).toHaveProperty('teal');
      expect(fullConfig.theme.colors['teal']).toBe('#2A687A');
    });
  });

  // ============================================
  // SEMANTIC COLORS TESTS
  // ============================================

  describe('Semantic Colors', () => {
    it('should map primary to electric-blue', () => {
      expect(fullConfig.theme.colors.primary?.DEFAULT).toBe('#0D7EFF');
    });

    it('should map secondary to neon-pink', () => {
      expect(fullConfig.theme.colors.secondary?.DEFAULT).toBe('#FF006E');
    });

    it('should map accent to cyber-yellow', () => {
      expect(fullConfig.theme.colors.accent?.DEFAULT).toBe('#FFD60A');
    });

    it('should have purple mapped to deep-purple', () => {
      expect(fullConfig.theme.colors.purple?.DEFAULT).toBe('#7209B7');
    });

    it('should have lime mapped to lime-green', () => {
      expect(fullConfig.theme.colors.lime?.DEFAULT).toBe('#06FFA5');
    });

    it('should have primary color scale (50-900)', () => {
      const primary = fullConfig.theme.colors.primary;
      expect(primary).toHaveProperty('50');
      expect(primary).toHaveProperty('100');
      expect(primary).toHaveProperty('200');
      expect(primary).toHaveProperty('300');
      expect(primary).toHaveProperty('400');
      expect(primary).toHaveProperty('500');
      expect(primary).toHaveProperty('600');
      expect(primary).toHaveProperty('700');
      expect(primary).toHaveProperty('800');
      expect(primary).toHaveProperty('900');
    });

    it('should have secondary color scale (50-900)', () => {
      const secondary = fullConfig.theme.colors.secondary;
      expect(secondary).toHaveProperty('50');
      expect(secondary).toHaveProperty('100');
      expect(secondary).toHaveProperty('500');
      expect(secondary).toHaveProperty('900');
    });
  });

  // ============================================
  // FUNCTIONAL COLORS TESTS
  // ============================================

  describe('Functional Colors', () => {
    it('should have brutal-black defined (#000000)', () => {
      expect(fullConfig.theme.colors).toHaveProperty('brutal-black');
      expect(fullConfig.theme.colors['brutal-black']).toBe('#000000');
    });

    it('should have brutal-white defined (#FFFFFF)', () => {
      expect(fullConfig.theme.colors).toHaveProperty('brutal-white');
      expect(fullConfig.theme.colors['brutal-white']).toBe('#FFFFFF');
    });

    it('should have cream background color (#FFFCF2)', () => {
      expect(fullConfig.theme.colors).toHaveProperty('cream');
      expect(fullConfig.theme.colors['cream']).toBe('#FFFCF2');
    });

    it('should have surface-light defined (#FFF5E1)', () => {
      expect(fullConfig.theme.colors).toHaveProperty('surface-light');
      expect(fullConfig.theme.colors['surface-light']).toBe('#FFF5E1');
    });

    it('should have surface-dark defined (#1A1A1A)', () => {
      expect(fullConfig.theme.colors).toHaveProperty('surface-dark');
      expect(fullConfig.theme.colors['surface-dark']).toBe('#1A1A1A');
    });

    it('should have text colors defined', () => {
      expect(fullConfig.theme.colors).toHaveProperty('text-primary');
      expect(fullConfig.theme.colors['text-primary']).toBe('#0A0A0A');

      expect(fullConfig.theme.colors).toHaveProperty('text-secondary');
      expect(fullConfig.theme.colors['text-secondary']).toBe('#2D2D2D');

      expect(fullConfig.theme.colors).toHaveProperty('text-tertiary');
      expect(fullConfig.theme.colors['text-tertiary']).toBe('#6B7280');
    });

    it('should have spotify-green for integration (#1DB954)', () => {
      expect(fullConfig.theme.colors).toHaveProperty('spotify-green');
      expect(fullConfig.theme.colors['spotify-green']).toBe('#1DB954');
    });

    it('should have semantic functional colors', () => {
      expect(fullConfig.theme.colors).toHaveProperty('success');
      expect(fullConfig.theme.colors['success']).toBe('#06FFA5');

      expect(fullConfig.theme.colors).toHaveProperty('error');
      expect(fullConfig.theme.colors['error']).toBe('#FF006E');

      expect(fullConfig.theme.colors).toHaveProperty('warning');
      expect(fullConfig.theme.colors['warning']).toBe('#FFD60A');

      expect(fullConfig.theme.colors).toHaveProperty('info');
      expect(fullConfig.theme.colors['info']).toBe('#0D7EFF');
    });
  });

  // ============================================
  // BORDER WIDTH TESTS
  // ============================================

  describe('Border Widths', () => {
    it('should have brutal border utilities', () => {
      expect(fullConfig.theme.borderWidth).toHaveProperty('brutal');
      expect(fullConfig.theme.borderWidth.brutal).toBe('4px');
    });

    it('should have brutal-thin (3px)', () => {
      expect(fullConfig.theme.borderWidth).toHaveProperty('brutal-thin');
      expect(fullConfig.theme.borderWidth['brutal-thin']).toBe('3px');
    });

    it('should have brutal-thick (6px)', () => {
      expect(fullConfig.theme.borderWidth).toHaveProperty('brutal-thick');
      expect(fullConfig.theme.borderWidth['brutal-thick']).toBe('6px');
    });

    it('should have brutal-extra-thick (8px)', () => {
      expect(fullConfig.theme.borderWidth).toHaveProperty('brutal-extra-thick');
      expect(fullConfig.theme.borderWidth['brutal-extra-thick']).toBe('8px');
    });

    it('should have standard numerical border widths', () => {
      expect(fullConfig.theme.borderWidth).toHaveProperty('3');
      expect(fullConfig.theme.borderWidth['3']).toBe('3px');

      expect(fullConfig.theme.borderWidth).toHaveProperty('6');
      expect(fullConfig.theme.borderWidth['6']).toBe('6px');
    });
  });

  // ============================================
  // BOX SHADOW TESTS
  // ============================================

  describe('Box Shadows', () => {
    it('should have brutal shadow (6px 6px)', () => {
      expect(fullConfig.theme.boxShadow).toHaveProperty('brutal');
      expect(fullConfig.theme.boxShadow.brutal).toBe('6px 6px 0px 0px #000000');
    });

    it('should have brutal-sm shadow (4px 4px)', () => {
      expect(fullConfig.theme.boxShadow).toHaveProperty('brutal-sm');
      expect(fullConfig.theme.boxShadow['brutal-sm']).toBe('4px 4px 0px 0px #000000');
    });

    it('should have brutal-md shadow (8px 8px)', () => {
      expect(fullConfig.theme.boxShadow).toHaveProperty('brutal-md');
      expect(fullConfig.theme.boxShadow['brutal-md']).toBe('8px 8px 0px 0px #000000');
    });

    it('should have brutal-lg shadow (10px 10px)', () => {
      expect(fullConfig.theme.boxShadow).toHaveProperty('brutal-lg');
      expect(fullConfig.theme.boxShadow['brutal-lg']).toBe('10px 10px 0px 0px #000000');
    });

    it('should have brutal-xl shadow (16px 16px)', () => {
      expect(fullConfig.theme.boxShadow).toHaveProperty('brutal-xl');
      expect(fullConfig.theme.boxShadow['brutal-xl']).toBe('16px 16px 0px 0px #000000');
    });

    it('should have brutal-hover shadow (12px 12px)', () => {
      expect(fullConfig.theme.boxShadow).toHaveProperty('brutal-hover');
      expect(fullConfig.theme.boxShadow['brutal-hover']).toBe('12px 12px 0px 0px #000000');
    });

    it('should have colored shadows for all brand colors', () => {
      expect(fullConfig.theme.boxShadow).toHaveProperty('brutal-colored-blue');
      expect(fullConfig.theme.boxShadow['brutal-colored-blue']).toBe('8px 8px 0px 0px #0D7EFF');

      expect(fullConfig.theme.boxShadow).toHaveProperty('brutal-colored-pink');
      expect(fullConfig.theme.boxShadow['brutal-colored-pink']).toBe('8px 8px 0px 0px #FF006E');

      expect(fullConfig.theme.boxShadow).toHaveProperty('brutal-colored-yellow');
      expect(fullConfig.theme.boxShadow['brutal-colored-yellow']).toBe('8px 8px 0px 0px #FFD60A');

      expect(fullConfig.theme.boxShadow).toHaveProperty('brutal-colored-purple');
      expect(fullConfig.theme.boxShadow['brutal-colored-purple']).toBe('8px 8px 0px 0px #7209B7');

      expect(fullConfig.theme.boxShadow).toHaveProperty('brutal-colored-teal');
      expect(fullConfig.theme.boxShadow['brutal-colored-teal']).toBe('8px 8px 0px 0px #2A687A');

      expect(fullConfig.theme.boxShadow).toHaveProperty('brutal-colored-lime');
      expect(fullConfig.theme.boxShadow['brutal-colored-lime']).toBe('8px 8px 0px 0px #06FFA5');
    });

    it('should have colored shadow variants (sm, lg)', () => {
      // Small variants
      expect(fullConfig.theme.boxShadow).toHaveProperty('brutal-colored-blue-sm');
      expect(fullConfig.theme.boxShadow['brutal-colored-blue-sm']).toBe('4px 4px 0px 0px #0D7EFF');

      expect(fullConfig.theme.boxShadow).toHaveProperty('brutal-colored-pink-sm');
      expect(fullConfig.theme.boxShadow['brutal-colored-pink-sm']).toBe('4px 4px 0px 0px #FF006E');

      // Large variants
      expect(fullConfig.theme.boxShadow).toHaveProperty('brutal-colored-blue-lg');
      expect(fullConfig.theme.boxShadow['brutal-colored-blue-lg']).toBe('12px 12px 0px 0px #0D7EFF');

      expect(fullConfig.theme.boxShadow).toHaveProperty('brutal-colored-yellow-lg');
      expect(fullConfig.theme.boxShadow['brutal-colored-yellow-lg']).toBe('12px 12px 0px 0px #FFD60A');
    });
  });

  // ============================================
  // BORDER RADIUS TESTS
  // ============================================

  describe('Border Radius', () => {
    it('should have brutal border radius (6px)', () => {
      expect(fullConfig.theme.borderRadius).toHaveProperty('brutal');
      expect(fullConfig.theme.borderRadius.brutal).toBe('6px');
    });

    it('should have brutal-sm border radius (4px)', () => {
      expect(fullConfig.theme.borderRadius).toHaveProperty('brutal-sm');
      expect(fullConfig.theme.borderRadius['brutal-sm']).toBe('4px');
    });

    it('should have brutal-md border radius (6px)', () => {
      expect(fullConfig.theme.borderRadius).toHaveProperty('brutal-md');
      expect(fullConfig.theme.borderRadius['brutal-md']).toBe('6px');
    });

    it('should have brutal-lg border radius (8px)', () => {
      expect(fullConfig.theme.borderRadius).toHaveProperty('brutal-lg');
      expect(fullConfig.theme.borderRadius['brutal-lg']).toBe('8px');
    });

    it('should have brutal-xl border radius (12px)', () => {
      expect(fullConfig.theme.borderRadius).toHaveProperty('brutal-xl');
      expect(fullConfig.theme.borderRadius['brutal-xl']).toBe('12px');
    });
  });

  // ============================================
  // SPACING TESTS (8PT GRID)
  // ============================================

  describe('Brutal Spacing (8pt Grid)', () => {
    it('should have brutal-xs spacing (8px)', () => {
      expect(fullConfig.theme.spacing).toHaveProperty('brutal-xs');
      expect(fullConfig.theme.spacing['brutal-xs']).toBe('8px');
    });

    it('should have brutal-sm spacing (16px)', () => {
      expect(fullConfig.theme.spacing).toHaveProperty('brutal-sm');
      expect(fullConfig.theme.spacing['brutal-sm']).toBe('16px');
    });

    it('should have brutal-md spacing (24px)', () => {
      expect(fullConfig.theme.spacing).toHaveProperty('brutal-md');
      expect(fullConfig.theme.spacing['brutal-md']).toBe('24px');
    });

    it('should have brutal-lg spacing (32px)', () => {
      expect(fullConfig.theme.spacing).toHaveProperty('brutal-lg');
      expect(fullConfig.theme.spacing['brutal-lg']).toBe('32px');
    });

    it('should have brutal-xl spacing (48px)', () => {
      expect(fullConfig.theme.spacing).toHaveProperty('brutal-xl');
      expect(fullConfig.theme.spacing['brutal-xl']).toBe('48px');
    });

    it('should have brutal-2xl spacing (64px)', () => {
      expect(fullConfig.theme.spacing).toHaveProperty('brutal-2xl');
      expect(fullConfig.theme.spacing['brutal-2xl']).toBe('64px');
    });

    it('should have brutal-3xl spacing (80px)', () => {
      expect(fullConfig.theme.spacing).toHaveProperty('brutal-3xl');
      expect(fullConfig.theme.spacing['brutal-3xl']).toBe('80px');
    });

    it('should have brutal-4xl spacing (96px)', () => {
      expect(fullConfig.theme.spacing).toHaveProperty('brutal-4xl');
      expect(fullConfig.theme.spacing['brutal-4xl']).toBe('96px');
    });

    it('should have brutal-5xl spacing (128px)', () => {
      expect(fullConfig.theme.spacing).toHaveProperty('brutal-5xl');
      expect(fullConfig.theme.spacing['brutal-5xl']).toBe('128px');
    });

    it('should have brutal-6xl spacing (160px)', () => {
      expect(fullConfig.theme.spacing).toHaveProperty('brutal-6xl');
      expect(fullConfig.theme.spacing['brutal-6xl']).toBe('160px');
    });
  });

  // ============================================
  // TYPOGRAPHY TESTS
  // ============================================

  describe('Typography', () => {
    it('should have custom font families', () => {
      expect(fullConfig.theme.fontFamily).toHaveProperty('heading');
      expect(fullConfig.theme.fontFamily.heading).toContain('Space Grotesk');

      expect(fullConfig.theme.fontFamily).toHaveProperty('body');
      expect(fullConfig.theme.fontFamily.body).toContain('Inter');

      expect(fullConfig.theme.fontFamily).toHaveProperty('mono');
      expect(fullConfig.theme.fontFamily.mono).toContain('Space Mono');

      expect(fullConfig.theme.fontFamily).toHaveProperty('sans');
      expect(fullConfig.theme.fontFamily.sans).toContain('Inter');
    });

    it('should have display font sizes', () => {
      expect(fullConfig.theme.fontSize).toHaveProperty('display-1');
      expect(fullConfig.theme.fontSize).toHaveProperty('display-2');
      expect(fullConfig.theme.fontSize).toHaveProperty('display-3');
    });

    it('should have heading font sizes (h1-h6)', () => {
      expect(fullConfig.theme.fontSize).toHaveProperty('h1');
      expect(fullConfig.theme.fontSize).toHaveProperty('h2');
      expect(fullConfig.theme.fontSize).toHaveProperty('h3');
      expect(fullConfig.theme.fontSize).toHaveProperty('h4');
      expect(fullConfig.theme.fontSize).toHaveProperty('h5');
      expect(fullConfig.theme.fontSize).toHaveProperty('h6');
    });

    it('should have body font sizes', () => {
      expect(fullConfig.theme.fontSize).toHaveProperty('body-xl');
      expect(fullConfig.theme.fontSize).toHaveProperty('body-lg');
      expect(fullConfig.theme.fontSize).toHaveProperty('body');
      expect(fullConfig.theme.fontSize).toHaveProperty('body-sm');
      expect(fullConfig.theme.fontSize).toHaveProperty('body-xs');
    });

    it('should have mobile-specific font sizes', () => {
      expect(fullConfig.theme.fontSize).toHaveProperty('hero-mobile');
      expect(fullConfig.theme.fontSize).toHaveProperty('h1-mobile');
      expect(fullConfig.theme.fontSize).toHaveProperty('h2-mobile');
    });
  });

  // ============================================
  // RESPONSIVE BREAKPOINTS TESTS
  // ============================================

  describe('Responsive Breakpoints', () => {
    it('should have custom screen sizes', () => {
      expect(fullConfig.theme.screens).toHaveProperty('xs');
      expect(fullConfig.theme.screens.xs).toBe('480px');

      expect(fullConfig.theme.screens).toHaveProperty('sm');
      expect(fullConfig.theme.screens.sm).toBe('640px');

      expect(fullConfig.theme.screens).toHaveProperty('md');
      expect(fullConfig.theme.screens.md).toBe('768px');

      expect(fullConfig.theme.screens).toHaveProperty('lg');
      expect(fullConfig.theme.screens.lg).toBe('1024px');

      expect(fullConfig.theme.screens).toHaveProperty('xl');
      expect(fullConfig.theme.screens.xl).toBe('1280px');

      expect(fullConfig.theme.screens).toHaveProperty('2xl');
      expect(fullConfig.theme.screens['2xl']).toBe('1536px');

      expect(fullConfig.theme.screens).toHaveProperty('3xl');
      expect(fullConfig.theme.screens['3xl']).toBe('1920px');
    });
  });

  // ============================================
  // ANIMATIONS TESTS
  // ============================================

  describe('Animations', () => {
    it('should have custom keyframes defined', () => {
      expect(fullConfig.theme.keyframes).toHaveProperty('float');
      expect(fullConfig.theme.keyframes).toHaveProperty('wiggle');
      expect(fullConfig.theme.keyframes).toHaveProperty('pulse-spotify');
      expect(fullConfig.theme.keyframes).toHaveProperty('marquee');
      expect(fullConfig.theme.keyframes).toHaveProperty('morph');
      expect(fullConfig.theme.keyframes).toHaveProperty('rotate-slow');
    });

    it('should have custom animations', () => {
      expect(fullConfig.theme.animation).toHaveProperty('float');
      expect(fullConfig.theme.animation).toHaveProperty('wiggle');
      expect(fullConfig.theme.animation).toHaveProperty('pulse-spotify');
      expect(fullConfig.theme.animation).toHaveProperty('marquee');
      expect(fullConfig.theme.animation).toHaveProperty('morph');
      expect(fullConfig.theme.animation).toHaveProperty('rotate-slow');
    });
  });

  // ============================================
  // BACKGROUND PATTERNS TESTS
  // ============================================

  describe('Background Patterns', () => {
    it('should have custom background patterns', () => {
      expect(fullConfig.theme.backgroundImage).toHaveProperty('grid-pattern');
      expect(fullConfig.theme.backgroundImage).toHaveProperty('dots-pattern');
      expect(fullConfig.theme.backgroundImage).toHaveProperty('diagonal-pattern');
    });

    it('should have background pattern sizes', () => {
      expect(fullConfig.theme.backgroundSize).toHaveProperty('grid-sm');
      expect(fullConfig.theme.backgroundSize['grid-sm']).toBe('20px 20px');

      expect(fullConfig.theme.backgroundSize).toHaveProperty('grid');
      expect(fullConfig.theme.backgroundSize['grid']).toBe('40px 40px');

      expect(fullConfig.theme.backgroundSize).toHaveProperty('grid-lg');
      expect(fullConfig.theme.backgroundSize['grid-lg']).toBe('60px 60px');
    });
  });

  // ============================================
  // Z-INDEX TESTS
  // ============================================

  describe('Z-Index Layers', () => {
    it('should have standard z-index values', () => {
      expect(fullConfig.theme.zIndex).toHaveProperty('dropdown');
      expect(fullConfig.theme.zIndex.dropdown).toBe('1000');

      expect(fullConfig.theme.zIndex).toHaveProperty('sticky');
      expect(fullConfig.theme.zIndex.sticky).toBe('1020');

      expect(fullConfig.theme.zIndex).toHaveProperty('modal');
      expect(fullConfig.theme.zIndex.modal).toBe('1050');

      expect(fullConfig.theme.zIndex).toHaveProperty('tooltip');
      expect(fullConfig.theme.zIndex.tooltip).toBe('1070');
    });
  });

  // ============================================
  // COMPREHENSIVE CHECKS
  // ============================================

  describe('Configuration Integrity', () => {
    it('should extend theme without overriding defaults', () => {
      // Verify standard Tailwind utilities still exist
      expect(fullConfig.theme.colors).toHaveProperty('blue');
      expect(fullConfig.theme.colors).toHaveProperty('red');
      expect(fullConfig.theme.colors).toHaveProperty('gray');
      expect(fullConfig.theme.colors).toHaveProperty('green');
    });

    it('should have dark mode enabled', () => {
      expect(tailwindConfig.darkMode).toBe('class');
    });

    it('should have content paths configured', () => {
      expect(tailwindConfig.content).toContain('./pages/**/*.{js,ts,jsx,tsx,mdx}');
      expect(tailwindConfig.content).toContain('./components/**/*.{js,ts,jsx,tsx,mdx}');
      expect(tailwindConfig.content).toContain('./app/**/*.{js,ts,jsx,tsx,mdx}');
      expect(tailwindConfig.content).toContain('./src/**/*.{js,ts,jsx,tsx,mdx}');
    });

    it('should have container configuration', () => {
      expect(fullConfig.theme.container).toBeDefined();
      expect(fullConfig.theme.container.center).toBe(true);
    });
  });

  // ============================================
  // TEXT SHADOW TESTS
  // ============================================

  describe('Text Shadows', () => {
    it('should have brutal text shadows', () => {
      expect(fullConfig.theme.textShadow).toHaveProperty('brutal');
      expect(fullConfig.theme.textShadow.brutal).toBe('3px 3px 0px #000000');

      expect(fullConfig.theme.textShadow).toHaveProperty('brutal-sm');
      expect(fullConfig.theme.textShadow['brutal-sm']).toBe('2px 2px 0px #000000');

      expect(fullConfig.theme.textShadow).toHaveProperty('brutal-lg');
      expect(fullConfig.theme.textShadow['brutal-lg']).toBe('4px 4px 0px #000000');
    });
  });

  // ============================================
  // TRANSITION TESTS
  // ============================================

  describe('Transitions', () => {
    it('should have custom transition durations', () => {
      expect(fullConfig.theme.transitionDuration).toHaveProperty('200');
      expect(fullConfig.theme.transitionDuration['200']).toBe('200ms');

      expect(fullConfig.theme.transitionDuration).toHaveProperty('400');
      expect(fullConfig.theme.transitionDuration['400']).toBe('400ms');
    });

    it('should have custom timing functions', () => {
      expect(fullConfig.theme.transitionTimingFunction).toHaveProperty('bounce');
    });
  });

  // ============================================
  // TIMELINE COMPONENTS TESTS
  // ============================================

  describe('Journey Timeline Components', () => {
    it('should have timeline dot glow shadows', () => {
      expect(fullConfig.theme.boxShadow).toHaveProperty('timeline-dot-glow');
      expect(fullConfig.theme.boxShadow['timeline-dot-glow']).toBe('0 0 0 8px rgba(13, 126, 255, 0.2)');

      expect(fullConfig.theme.boxShadow).toHaveProperty('timeline-dot-glow-lg');
      expect(fullConfig.theme.boxShadow['timeline-dot-glow-lg']).toBe('0 0 0 12px rgba(13, 126, 255, 0.1)');
    });

    it('should have colored timeline dot glow shadows', () => {
      expect(fullConfig.theme.boxShadow).toHaveProperty('timeline-dot-glow-pink');
      expect(fullConfig.theme.boxShadow['timeline-dot-glow-pink']).toBe('0 0 0 8px rgba(255, 0, 110, 0.2)');

      expect(fullConfig.theme.boxShadow).toHaveProperty('timeline-dot-glow-yellow');
      expect(fullConfig.theme.boxShadow['timeline-dot-glow-yellow']).toBe('0 0 0 8px rgba(255, 214, 10, 0.2)');

      expect(fullConfig.theme.boxShadow).toHaveProperty('timeline-dot-glow-purple');
      expect(fullConfig.theme.boxShadow['timeline-dot-glow-purple']).toBe('0 0 0 8px rgba(114, 9, 183, 0.2)');
    });

    it('should have timeline gradient background images', () => {
      expect(fullConfig.theme.backgroundImage).toHaveProperty('timeline-gradient');
      expect(fullConfig.theme.backgroundImage['timeline-gradient']).toBe('linear-gradient(to bottom, #7209B7 0%, #FFD60A 33%, #FF006E 66%, #0D7EFF 100%)');

      expect(fullConfig.theme.backgroundImage).toHaveProperty('timeline-gradient-purple-blue');
      expect(fullConfig.theme.backgroundImage['timeline-gradient-purple-blue']).toBe('linear-gradient(to bottom, #7209B7 0%, #0D7EFF 100%)');

      expect(fullConfig.theme.backgroundImage).toHaveProperty('timeline-gradient-yellow-pink');
      expect(fullConfig.theme.backgroundImage['timeline-gradient-yellow-pink']).toBe('linear-gradient(to bottom, #FFD60A 0%, #FF006E 100%)');

      expect(fullConfig.theme.backgroundImage).toHaveProperty('timeline-gradient-full');
      expect(fullConfig.theme.backgroundImage['timeline-gradient-full']).toBe('linear-gradient(to bottom, #7209B7 0%, #FFD60A 25%, #FF006E 50%, #0D7EFF 75%, #7209B7 100%)');
    });

    it('should have pulse-dot animation keyframes', () => {
      expect(fullConfig.theme.keyframes).toHaveProperty('pulse-dot');
      expect(fullConfig.theme.keyframes['pulse-dot']).toBeDefined();
      expect(fullConfig.theme.keyframes['pulse-dot']['0%, 100%']).toEqual({ boxShadow: '0 0 0 8px rgba(13, 126, 255, 0.2)' });
      expect(fullConfig.theme.keyframes['pulse-dot']['50%']).toEqual({ boxShadow: '0 0 0 12px rgba(13, 126, 255, 0.1)' });
    });

    it('should have pulse-dot animation', () => {
      expect(fullConfig.theme.animation).toHaveProperty('pulse-dot');
      expect(fullConfig.theme.animation['pulse-dot']).toBe('pulse-dot 2s ease-in-out infinite');
    });
  });
});
