# Migration Guide: Neobrutalist Design System

> Complete guide to migrate the Neobrutalist design system to the Selfrules/website repository

---

## Table of Contents

1. [Overview](#overview)
2. [Prerequisites](#prerequisites)
3. [Step-by-Step Migration](#step-by-step-migration)
4. [File Replacement Guide](#file-replacement-guide)
5. [Component Migration](#component-migration)
6. [Testing & Validation](#testing--validation)
7. [Troubleshooting](#troubleshooting)

---

## Overview

### Goal
Replace the existing design system files in the **Selfrules/website** repository with the Neobrutalist design system from **Designprototipo**, while maintaining the existing content structure.

### What You'll Get
- **Content**: Blog posts, articles, and page structure from Selfrules/website
- **UI/Design**: Neobrutalist components, colors, and styling from Designprototipo

### Files to Migrate
1. `app/globals.css` - Global styles and design tokens
2. `tailwind.config.ts` - Tailwind configuration
3. `tailwind.config.test.ts` - Design token tests
4. Design System documentation page components

---

## Prerequisites

### Required Tools
- Node.js (v18 or higher)
- Git
- npm or yarn
- Code editor (VS Code recommended)

### Repository Access
```bash
# Clone the website repository
git clone https://github.com/Selfrules/website.git
cd website

# Create a new branch for the migration
git checkout -b design-system-migration
```

### Backup Current Files
```bash
# Backup existing design system files
mkdir -p backup/design-system
cp app/globals.css backup/design-system/
cp tailwind.config.ts backup/design-system/
cp tailwind.config.test.ts backup/design-system/
```

---

## Step-by-Step Migration

### Step 1: Replace Global CSS

**Location:** `app/globals.css`

**Action:** Replace the entire file with the new `app/globals.css` from this repository.

**What's Included:**
- Neobrutalist color palette (Electric Blue, Neon Pink, Cyber Yellow, Deep Purple, Lime Green)
- Typography system (Space Grotesk, Inter, Space Mono)
- Brutal shadows (solid, offset shadows)
- Responsive typography scale
- Custom animations (float, wiggle, pulse-spotify)
- Article content styles

**Changes to Verify:**
```css
/* Before */
--primary-color: ...

/* After */
--electric-blue: #0D7EFF;
--neon-pink: #FF006E;
--cyber-yellow: #FFD60A;
```

**Command:**
```bash
# From the root of Designprototipo repository
cp app/globals.css /path/to/website/app/globals.css
```

---

### Step 2: Replace Tailwind Configuration

**Location:** `tailwind.config.ts`

**Action:** Replace the entire file with the new `tailwind.config.ts` from this repository.

**What's Included:**
- Complete color system with semantic mappings
- Brutal borders (3px-8px widths)
- Brutal shadows with color variants
- 8pt spacing grid (brutal-xs to brutal-6xl)
- Custom animations (float, wiggle, marquee, morph)
- Background patterns (grid, dots, diagonal)
- Custom font sizes (display, headings, body)
- Extended breakpoints (xs to 3xl)

**Command:**
```bash
# From the root of Designprototipo repository
cp tailwind.config.ts /path/to/website/tailwind.config.ts
```

---

### Step 3: Replace Tailwind Tests

**Location:** `tailwind.config.test.ts`

**Action:** Replace the entire file with the new `tailwind.config.test.ts` from this repository.

**What's Included:**
- Tests for all brand colors
- Tests for semantic color mappings
- Tests for borders, shadows, spacing
- Tests for typography and breakpoints
- Configuration integrity tests

**Command:**
```bash
# From the root of Designprototipo repository
cp tailwind.config.test.ts /path/to/website/tailwind.config.test.ts
```

---

### Step 4: Install Dependencies

The new design system may require additional dependencies. Verify and install:

```bash
cd /path/to/website

# Install or update dependencies
npm install lucide-react@latest
npm install class-variance-authority
npm install tailwind-merge
npm install clsx

# Install dev dependencies
npm install -D @types/node
npm install -D tailwindcss
```

---

### Step 5: Add Custom Components

Create the core Neobrutalist components in your website repository.

#### 5.1 Create NeoButton Component

**Location:** `components/NeoButton.tsx`

```tsx
import React from 'react';

interface NeoButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
}

export function NeoButton({
  children,
  variant = 'primary',
  onClick,
  className = '',
  fullWidth = false
}: NeoButtonProps) {
  const baseClasses = `
    inline-flex items-center justify-center gap-2
    px-6 md:px-10 py-3 md:py-4
    border-4 border-[#000] rounded-lg
    transition-all duration-200
    uppercase tracking-wider
    ${fullWidth ? 'w-full' : ''}
  `;

  const variantClasses = {
    primary: `
      bg-[#0D7EFF] text-white
      shadow-brutal
      hover:-translate-y-1 hover:shadow-brutal-lg
      active:translate-y-0 active:shadow-brutal-sm
    `,
    secondary: `
      bg-white text-[#0A0A0A]
      shadow-brutal
      hover:bg-[#FFD60A] hover:-translate-y-1 hover:shadow-brutal-lg
      active:translate-y-0 active:shadow-brutal-sm
    `,
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={{
        fontFamily: 'Space Grotesk, sans-serif',
        fontSize: '14px',
        fontWeight: 700,
      }}
    >
      {children}
    </button>
  );
}
```

**Command:**
```bash
# Create the component file
mkdir -p components
# Copy content above into components/NeoButton.tsx
```

#### 5.2 Create NeoBadge Component

**Location:** `components/NeoBadge.tsx`

```tsx
import React from 'react';

interface NeoBadgeProps {
  children: React.ReactNode;
  color?: 'blue' | 'pink' | 'yellow' | 'purple' | 'neutral';
  className?: string;
}

export function NeoBadge({ children, color = 'blue', className = '' }: NeoBadgeProps) {
  const colorClasses = {
    blue: 'bg-[#0D7EFF] text-white border-[#000]',
    pink: 'bg-[#FF006E] text-white border-[#000]',
    yellow: 'bg-[#FFD60A] text-[#0A0A0A] border-[#000]',
    purple: 'bg-[#7209B7] text-white border-[#000]',
    neutral: 'bg-white text-[#0A0A0A] border-[#000]',
  };

  return (
    <span
      className={`inline-block px-4 py-2 border-3 ${colorClasses[color]} rounded shadow-brutal-sm transition-transform duration-200 hover:-translate-y-1 ${className}`}
      style={{
        fontFamily: 'Space Grotesk, sans-serif',
        fontSize: '13px',
        fontWeight: 700,
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
      }}
    >
      {children}
    </span>
  );
}
```

---

### Step 6: Create Design System Page

The design system documentation page showcases all components and design tokens. This is a large file, so it's been created in separate files:

1. **`components/DesignSystemPage.tsx`** - Main page component
2. **`components/DesignSystemSections.tsx`** - Blog, Patterns, Navigation sections
3. **`components/DesignSystemAdditional.tsx`** - ChatBot, Forms, Timeline, Hero, Services sections

These files are included in the repository and should be copied to your components directory.

**Commands:**
```bash
# Copy all three design system page components
cp components/DesignSystemPage.tsx /path/to/website/components/
cp components/DesignSystemSections.tsx /path/to/website/components/
cp components/DesignSystemAdditional.tsx /path/to/website/components/
```

#### Add Route for Design System Page

**Location:** `app/design-system/page.tsx` (Next.js App Router)

```tsx
'use client';

import { DesignSystemPage } from '@/components/DesignSystemPage';
import { useRouter } from 'next/navigation';

export default function DesignSystemRoute() {
  const router = useRouter();

  return <DesignSystemPage onBack={() => router.push('/')} />;
}
```

**Or for Pages Router:**

**Location:** `pages/design-system.tsx`

```tsx
import { DesignSystemPage } from '@/components/DesignSystemPage';
import { useRouter } from 'next/router';

export default function DesignSystemRoute() {
  const router = useRouter();

  return <DesignSystemPage onBack={() => router.push('/')} />;
}
```

---

### Step 7: Update Existing Components

Now that you have the new design system, you'll need to update your existing components to use the new styles and colors.

#### Update Button Components

**Before:**
```tsx
<button className="bg-blue-500 text-white px-4 py-2 rounded">
  Click me
</button>
```

**After:**
```tsx
<button className="bg-[#0D7EFF] text-white px-6 py-3 border-4 border-[#000] rounded-lg shadow-brutal hover:-translate-y-1 hover:shadow-brutal-lg transition-all font-bold">
  Click me
</button>
```

**Or use NeoButton:**
```tsx
<NeoButton variant="primary">
  Click me
</NeoButton>
```

#### Update Card Components

**Before:**
```tsx
<div className="bg-white shadow-md rounded p-4">
  Content
</div>
```

**After:**
```tsx
<div className="bg-white border-4 border-[#000] rounded-lg shadow-brutal p-6 hover:-translate-y-2 hover:shadow-brutal-lg transition-all">
  Content
</div>
```

#### Update Badge Components

**Before:**
```tsx
<span className="bg-blue-500 text-white px-2 py-1 rounded">
  Badge
</span>
```

**After:**
```tsx
<NeoBadge color="blue">
  Badge
</NeoBadge>
```

---

### Step 8: Update Typography

Replace standard typography classes with Neobrutalist classes.

**Headings:**
```tsx
// Before
<h1 className="text-4xl font-bold">Title</h1>

// After
<h1 className="text-h1">Title</h1>
```

**Body Text:**
```tsx
// Before
<p className="text-base">Paragraph text</p>

// After
<p className="text-body">Paragraph text</p>
```

**Available Typography Classes:**
- `.text-hero` - Hero headlines (72px desktop, 36px mobile)
- `.text-h1` - Main headings (46px desktop, 28px mobile)
- `.text-h2` - Section headings (37px desktop, 24px mobile)
- `.text-h3` - Subsection headings (24px desktop, 20px mobile)
- `.text-body-large` - Lead paragraphs (19px desktop, 18px mobile)
- `.text-body` - Standard body text (17px desktop, 16px mobile)
- `.text-body-small` - Small text (15px desktop, 14px mobile)

---

### Step 9: Run Tests

After migration, run the design token tests to ensure everything is configured correctly.

```bash
# Run Tailwind config tests
npm test tailwind.config.test.ts

# Or if using Jest
npm run test -- tailwind.config.test.ts
```

Expected output: All tests should pass, validating:
- All brand colors exist
- Semantic mappings are correct
- Borders, shadows, and spacing are properly configured

---

### Step 10: Build and Preview

```bash
# Clear Next.js cache
rm -rf .next

# Build the project
npm run build

# Run development server
npm run dev
```

Visit:
- `http://localhost:3000` - Your main site
- `http://localhost:3000/design-system` - Design system documentation page

---

## File Replacement Guide

### Quick Reference Table

| Original File (website repo) | Replacement File (Designprototipo repo) | Priority |
|------------------------------|----------------------------------------|----------|
| `app/globals.css` | `app/globals.css` | **HIGH** |
| `tailwind.config.ts` | `tailwind.config.ts` | **HIGH** |
| `tailwind.config.test.ts` | `tailwind.config.test.ts` | **MEDIUM** |
| N/A | `components/NeoButton.tsx` | **HIGH** |
| N/A | `components/NeoBadge.tsx` | **HIGH** |
| N/A | `components/DesignSystemPage.tsx` | **MEDIUM** |
| N/A | `components/DesignSystemSections.tsx` | **MEDIUM** |
| N/A | `components/DesignSystemAdditional.tsx` | **MEDIUM** |
| N/A | `DESIGN_SYSTEM_GUIDELINES.md` | **LOW** |

### Commands Summary

```bash
# Navigate to website repo
cd /path/to/website

# Create migration branch
git checkout -b design-system-migration

# Backup existing files
mkdir -p backup/design-system
cp app/globals.css backup/design-system/
cp tailwind.config.ts backup/design-system/
cp tailwind.config.test.ts backup/design-system/

# Copy new files from Designprototipo
cp /path/to/Designprototipo/app/globals.css ./app/
cp /path/to/Designprototipo/tailwind.config.ts ./
cp /path/to/Designprototipo/tailwind.config.test.ts ./
cp /path/to/Designprototipo/DESIGN_SYSTEM_GUIDELINES.md ./docs/

# Create components directory if it doesn't exist
mkdir -p components

# Copy component files (you'll need to create these based on the content above)
# Or copy from Designprototipo/components/ if available

# Install dependencies
npm install

# Build and test
npm run build
npm run dev
```

---

## Component Migration

### Priority Components to Update

#### 1. Navigation/Header
**File:** `components/Header.tsx` or `components/Navigation.tsx`

**Changes:**
- Replace background with `bg-[#FFFCF2]`
- Add `border-b-4 border-[#000]`
- Use `NeoButton` for CTA buttons
- Update font to Space Grotesk for nav items

**Example:**
```tsx
<header className="sticky top-0 z-50 bg-[#FFFCF2] border-b-4 border-[#000]">
  <nav className="container mx-auto px-8 py-4 flex items-center justify-between">
    <div className="font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
      Your Brand
    </div>
    <div className="flex gap-6">
      <a href="#" className="text-sm hover:text-[#0D7EFF] transition-colors"
         style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>
        Home
      </a>
      <NeoButton variant="primary">Contact</NeoButton>
    </div>
  </nav>
</header>
```

#### 2. Hero Section
**File:** `components/Hero.tsx` or similar

**Changes:**
- Add floating geometric shapes
- Add grid pattern background
- Use `text-hero` for headline
- Use `NeoButton` for CTAs

**Example:**
```tsx
<section className="relative min-h-screen flex items-center justify-center bg-[#FFFCF2] border-b-4 border-[#000] overflow-hidden">
  {/* Grid Pattern Background */}
  <div
    className="absolute inset-0 opacity-5"
    style={{
      backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
      backgroundSize: "40px 40px",
    }}
  />

  {/* Floating Shapes */}
  <div className="absolute top-[10%] right-[5%] w-[120px] h-[120px] bg-[#0D7EFF] border-4 border-[#000] rounded-full opacity-80 animate-float" />
  <div className="absolute bottom-[15%] left-[8%] w-[70px] h-[70px] bg-[#FFD60A] border-4 border-[#000] opacity-80 animate-wiggle" />

  {/* Content */}
  <div className="relative z-10 text-center max-w-[900px] px-6">
    <NeoBadge color="pink" className="mb-6">Product Manager</NeoBadge>
    <h1 className="text-hero mb-6">
      Your Headline Here
    </h1>
    <p className="text-body-large text-[#2D2D2D] mb-8">
      Your subtitle or description
    </p>
    <div className="flex gap-4 justify-center">
      <NeoButton variant="primary">Get Started</NeoButton>
      <NeoButton variant="secondary">Learn More</NeoButton>
    </div>
  </div>
</section>
```

#### 3. Blog Cards
**File:** `components/BlogCard.tsx` or similar

**Changes:**
- Add brutal borders and shadows
- Use `NeoBadge` for categories
- Add hover lift effect

**Example:**
```tsx
<article className="bg-white border-4 border-[#000] rounded-lg shadow-brutal hover:-translate-y-2 hover:shadow-brutal-lg transition-all overflow-hidden">
  {/* Featured Image */}
  <div className="h-48 bg-gradient-to-br from-[#0D7EFF] to-[#7209B7] border-b-4 border-[#000] relative">
    <div className="absolute top-4 left-4">
      <NeoBadge color="yellow">Featured</NeoBadge>
    </div>
  </div>

  {/* Content */}
  <div className="p-6">
    <h3 className="text-h3 mb-2">Article Title</h3>
    <p className="text-body-small text-[#6B7280] mb-4">
      Article excerpt goes here...
    </p>
    <div className="flex items-center gap-4 text-xs text-[#6B7280]">
      <span>5 min read</span>
      <span>Nov 16, 2025</span>
    </div>
  </div>
</article>
```

#### 4. Footer
**File:** `components/Footer.tsx`

**Changes:**
- Use dark background `bg-[#0A0A0A]`
- White text `text-white`
- Add top border `border-t-4 border-[#000]`

**Example:**
```tsx
<footer className="bg-[#0A0A0A] text-white border-t-4 border-[#000] py-16">
  <div className="container mx-auto px-8">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* Footer content */}
    </div>
  </div>
</footer>
```

---

## Testing & Validation

### Visual Testing Checklist

- [ ] **Colors**: All brand colors appear correctly
- [ ] **Typography**: Fonts load properly (Space Grotesk, Inter, Space Mono)
- [ ] **Shadows**: Brutal shadows render without blur
- [ ] **Borders**: 3-4px solid black borders on interactive elements
- [ ] **Animations**: Hover effects work smoothly
- [ ] **Responsive**: Mobile breakpoints work correctly
- [ ] **Accessibility**: Color contrast meets WCAG AA standards

### Functional Testing

```bash
# Test build
npm run build

# Check for TypeScript errors
npm run type-check

# Run linter
npm run lint

# Run tests
npm test
```

### Browser Testing

Test in:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

### Performance Testing

```bash
# Run Lighthouse audit
npm run build
npm run start

# In Chrome DevTools:
# - Open DevTools
# - Go to Lighthouse tab
# - Run audit for Performance, Accessibility, Best Practices, SEO
```

**Target Scores:**
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 90+

---

## Troubleshooting

### Issue: Fonts Not Loading

**Symptom:** Text appears in system fonts instead of Space Grotesk/Inter

**Solution:**
1. Check that Google Fonts import is in `app/globals.css`:
   ```css
   @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;900&family=Inter:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap');
   ```

2. Verify font declarations in Tailwind config:
   ```ts
   fontFamily: {
     heading: ['Space Grotesk', 'sans-serif'],
     body: ['Inter', 'sans-serif'],
     mono: ['Space Mono', 'monospace'],
   }
   ```

3. Clear Next.js cache and rebuild:
   ```bash
   rm -rf .next
   npm run dev
   ```

---

### Issue: Shadows Not Appearing

**Symptom:** Elements don't have brutal shadows

**Solution:**
1. Check Tailwind config has shadow utilities:
   ```ts
   boxShadow: {
     'brutal-sm': '4px 4px 0px 0px #000000',
     'brutal': '6px 6px 0px 0px #000000',
     'brutal-lg': '10px 10px 0px 0px #000000',
   }
   ```

2. Verify you're using correct classes:
   ```tsx
   className="shadow-brutal"  // ✅ Correct
   className="shadow-md"      // ❌ Wrong (standard Tailwind shadow)
   ```

3. Check that globals.css utilities are defined:
   ```css
   .shadow-brutal {
     box-shadow: 6px 6px 0 #000;
   }
   ```

---

### Issue: Colors Not Working

**Symptom:** `bg-[#0D7EFF]` not applying color

**Solution:**
1. Ensure Tailwind is processing the file:
   ```ts
   // tailwind.config.ts
   content: [
     './app/**/*.{js,ts,jsx,tsx,mdx}',
     './components/**/*.{js,ts,jsx,tsx,mdx}',
   ]
   ```

2. Alternatively, use color tokens:
   ```tsx
   className="bg-electric-blue"  // Use named color from config
   className="bg-primary"        // Use semantic color
   ```

3. Rebuild Tailwind:
   ```bash
   npm run dev
   ```

---

### Issue: Build Errors

**Symptom:** TypeScript or build errors

**Common Errors & Solutions:**

**Error: `Cannot find module 'lucide-react'`**
```bash
npm install lucide-react
```

**Error: `Property 'brutal' does not exist`**
- Check that `tailwind.config.ts` is properly typed
- Restart TypeScript server in VS Code: `Cmd+Shift+P` → "Restart TypeScript Server"

**Error: `Unexpected token` in CSS**
- Ensure `@tailwind` directives are at the top of globals.css
- Check for syntax errors in CSS custom properties

---

### Issue: Responsive Breakpoints Not Working

**Symptom:** Mobile/tablet layouts not displaying correctly

**Solution:**
1. Verify breakpoints in Tailwind config:
   ```ts
   screens: {
     'xs': '480px',
     'sm': '640px',
     'md': '768px',
     'lg': '1024px',
     'xl': '1280px',
     '2xl': '1536px',
   }
   ```

2. Use mobile-first approach:
   ```tsx
   className="text-h3 md:text-h2 lg:text-h1"  // ✅ Correct
   className="lg:text-h1 md:text-h2 text-h3"  // ❌ Wrong (desktop-first)
   ```

3. Test at different viewport sizes in DevTools

---

### Issue: Design System Page Not Rendering

**Symptom:** `/design-system` route shows 404 or blank page

**Solution:**

**For App Router (Next.js 13+):**
1. Create `app/design-system/page.tsx`:
   ```tsx
   'use client';

   import { DesignSystemPage } from '@/components/DesignSystemPage';
   import { useRouter } from 'next/navigation';

   export default function DesignSystemRoute() {
     const router = useRouter();
     return <DesignSystemPage onBack={() => router.push('/')} />;
   }
   ```

**For Pages Router:**
1. Create `pages/design-system.tsx`:
   ```tsx
   import { DesignSystemPage } from '@/components/DesignSystemPage';
   import { useRouter } from 'next/router';

   export default function DesignSystemRoute() {
     const router = useRouter();
     return <DesignSystemPage onBack={() => router.push('/')} />;
   }
   ```

2. Verify component imports are correct
3. Check console for errors

---

## Next Steps

After successful migration:

### 1. Content Migration
- Update existing pages with new components
- Replace all buttons with `NeoButton`
- Replace all badges with `NeoBadge`
- Update card layouts with brutal styling

### 2. Create Additional Components
Based on your needs, create:
- `NeoCard` - Reusable card component
- `NeoInput` - Form input with brutal styling
- `NeoModal` - Modal/dialog component
- `NeoTable` - Table component

### 3. Documentation
- Add design system link to main navigation
- Document custom components in Storybook (optional)
- Create component usage examples for team

### 4. Performance Optimization
- Optimize images with Next.js Image component
- Lazy load heavy components
- Code split by route
- Enable font optimization in Next.js config

### 5. Deploy
```bash
# Commit changes
git add .
git commit -m "Migrate to Neobrutalist design system"

# Push to GitHub
git push origin design-system-migration

# Create Pull Request
# Review changes
# Merge to main
# Deploy to production
```

---

## Support & Resources

### Documentation
- [Design System Guidelines](./DESIGN_SYSTEM_GUIDELINES.md) - Complete design system documentation
- [Tailwind CSS Docs](https://tailwindcss.com/docs) - Tailwind CSS reference
- [Next.js Docs](https://nextjs.org/docs) - Next.js documentation
- [Lucide Icons](https://lucide.dev/) - Icon library

### Design Tokens Reference

**Colors:**
```css
--electric-blue: #0D7EFF
--neon-pink: #FF006E
--cyber-yellow: #FFD60A
--deep-purple: #7209B7
--lime-green: #06FFA5
```

**Fonts:**
- Headings: Space Grotesk (400, 500, 600, 700, 900)
- Body: Inter (400, 500, 600, 700)
- Code: Space Mono (400, 700)

**Spacing (8pt grid):**
- brutal-xs: 8px
- brutal-sm: 16px
- brutal-md: 24px
- brutal-lg: 32px
- brutal-xl: 48px
- brutal-2xl: 64px

**Shadows:**
- shadow-brutal-sm: 4px 4px 0 #000
- shadow-brutal: 6px 6px 0 #000
- shadow-brutal-lg: 10px 10px 0 #000

---

## Conclusion

You now have a complete migration guide to transform your Selfrules/website repository with the Neobrutalist design system. The migration maintains your existing content while applying a bold, vibrant, and accessible UI.

**Key Takeaways:**
✅ Replace 3 core files (globals.css, tailwind.config.ts, tailwind.config.test.ts)
✅ Add 2 core components (NeoButton, NeoBadge)
✅ Create Design System documentation page
✅ Update existing components gradually
✅ Test thoroughly before deploying

If you encounter issues not covered in this guide, refer to the [Design System Guidelines](./DESIGN_SYSTEM_GUIDELINES.md) or check the troubleshooting section.

**Happy building! 🎨⚡️**

---

**Version:** 1.0.0
**Last Updated:** January 16, 2025
**Maintained by:** Mattia Cintura
