# Neobrutalist Design System Guidelines

> A comprehensive design system following Atomic Design methodology by Brad Frost

---

## Table of Contents

1. [Introduction](#introduction)
2. [Design Principles](#design-principles)
3. [Atomic Design Methodology](#atomic-design-methodology)
4. [Design Tokens](#design-tokens)
5. [Atoms](#atoms)
6. [Molecules](#molecules)
7. [Organisms](#organisms)
8. [Templates](#templates)
9. [Pages](#pages)
10. [Component Library](#component-library)
11. [Implementation Guidelines](#implementation-guidelines)

---

## Introduction

This design system implements a **Neobrutalist** aesthetic - a bold, vibrant, and unapologetically digital design language that embraces thick borders, vibrant colors, and pronounced shadows. The system is built following Brad Frost's Atomic Design methodology, ensuring scalability, consistency, and maintainability.

### Core Philosophy

- **Bold & Expressive**: Design should make a statement
- **Function First**: Every design decision serves a purpose
- **Accessible**: WCAG AA compliant color contrast
- **Responsive**: Mobile-first approach to all components
- **Systematic**: Every element follows consistent rules

---

## Design Principles

### 1. Brutalist Aesthetic
- **Thick Black Borders**: All elements use 3-4px solid black borders
- **Hard Shadows**: Box shadows are solid, offset, and colored (no blur)
- **Bold Typography**: Space Grotesk for headings, Inter for body
- **Vibrant Colors**: High-saturation colors (#0D7EFF, #FF006E, #FFD60A, #7209B7)

### 2. Visual Hierarchy
- **Size & Weight**: Larger, bolder elements = more important
- **Color Coding**: Consistent color usage for categories
- **Spacing**: Generous whitespace (8pt grid system)
- **Contrast**: Dark text (#0A0A0A) on light backgrounds (#FFFCF2)

### 3. Interaction Design
- **Hover States**: Lift elements upward (-translate-y) with larger shadows
- **Active States**: Push elements down with smaller shadows
- **Transitions**: All interactions use 200ms duration
- **Feedback**: Visual confirmation for all user actions

### 4. Accessibility
- **Color Contrast**: Minimum 4.5:1 for body text, 3:1 for large text
- **Focus States**: Clear keyboard focus indicators
- **Screen Readers**: Semantic HTML and ARIA labels
- **Reduced Motion**: Respect `prefers-reduced-motion` preference

---

## Atomic Design Methodology

Following Brad Frost's Atomic Design, we organize our design system into five distinct stages:

### Atoms
The basic building blocks of our interface - indivisible elements that can't be broken down further without losing their meaning.

**Examples:** Colors, Typography, Buttons, Icons, Inputs, Badges

### Molecules
Simple groups of atoms functioning together as a unit.

**Examples:** Search bar (input + button), Form field (label + input + error), Card header (title + badge)

### Organisms
Complex UI components composed of molecules and/or atoms.

**Examples:** Navigation bar, Hero section, Blog card, Footer

### Templates
Page-level layouts that place organisms into a structure, showing the content structure without actual content.

**Examples:** Homepage template, Blog post template, Contact page template

### Pages
Specific instances of templates with real content applied.

**Examples:** Homepage, About page, Individual blog posts

---

## Design Tokens

### Color Palette

#### Brand Colors
```css
--electric-blue: #0D7EFF;    /* Primary brand color */
--neon-pink: #FF006E;        /* Secondary/accent color */
--cyber-yellow: #FFD60A;     /* Tertiary/highlight color */
--deep-purple: #7209B7;      /* Quaternary color */
--lime-green: #06FFA5;       /* Success/active state */
```

#### Surface Colors
```css
--bg-cream: #FFFCF2;         /* Main background */
--bg-dark: #0A0A0A;          /* Dark sections */
--surface-light: #FFF5E1;    /* Cards, panels */
--surface-dark: #1A1A1A;     /* Dark mode surfaces */
```

#### Text Colors
```css
--text-primary: #0A0A0A;     /* Primary text */
--text-secondary: #2D2D2D;   /* Secondary text */
--text-tertiary: #6B7280;    /* Tertiary/muted text */
```

#### Functional Colors
```css
--border-black: #000000;     /* All borders */
--shadow-black: #000000;     /* Shadow color */
--spotify-green: #1DB954;    /* Third-party integrations */
```

#### Color Usage Guidelines
- **Electric Blue**: Primary buttons, links, feature highlights
- **Neon Pink**: Badges, tags, secondary accents
- **Cyber Yellow**: Hover states, warnings, highlights
- **Deep Purple**: Premium features, special badges
- **Lime Green**: Success states, active indicators

### Typography

#### Font Families
```css
--font-heading: 'Space Grotesk', sans-serif;
--font-body: 'Inter', sans-serif;
--font-mono: 'Space Mono', monospace;
```

#### Type Scale (Mobile First)

**Mobile (< 768px)**
```css
.text-hero       { font-size: 36px; line-height: 1.0; font-weight: 900; }
.text-h1         { font-size: 28px; line-height: 1.1; font-weight: 700; }
.text-h2         { font-size: 24px; line-height: 1.2; font-weight: 700; }
.text-h3         { font-size: 20px; line-height: 1.3; font-weight: 600; }
.text-body-large { font-size: 18px; line-height: 1.6; font-weight: 400; }
.text-body       { font-size: 16px; line-height: 1.6; font-weight: 400; }
.text-body-small { font-size: 14px; line-height: 1.5; font-weight: 400; }
```

**Tablet (768px - 1023px)**
```css
.text-hero { font-size: 52px; }
.text-h1   { font-size: 38px; }
.text-h2   { font-size: 30px; }
```

**Desktop (≥ 1024px)**
```css
.text-hero       { font-size: 72px; }
.text-h1         { font-size: 46px; }
.text-h2         { font-size: 37px; }
.text-h3         { font-size: 24px; }
.text-body-large { font-size: 19px; }
.text-body       { font-size: 17px; }
.text-body-small { font-size: 15px; }
```

#### Typography Rules
- **Headings**: Always use Space Grotesk, always use color #0A0A0A
- **Body Text**: Always use Inter, color #2D2D2D for paragraphs
- **Code**: Always use Space Mono
- **Letter Spacing**: Uppercase text uses 0.05em tracking
- **Line Height**: Body text 1.6-1.7, headings 1.0-1.3

### Spacing

#### 8pt Grid System
All spacing follows multiples of 8px for vertical rhythm and consistency.

```css
--brutal-xs:  8px;   /* Tight spacing */
--brutal-sm:  16px;  /* Small spacing */
--brutal-md:  24px;  /* Medium spacing */
--brutal-lg:  32px;  /* Large spacing */
--brutal-xl:  48px;  /* Extra large spacing */
--brutal-2xl: 64px;  /* Maximum spacing */
```

#### Spacing Guidelines
- **Component Padding**: Minimum 16px (brutal-sm)
- **Section Spacing**: Use 48-64px (brutal-xl to brutal-2xl)
- **Element Margins**: Use 16-32px (brutal-sm to brutal-lg)
- **Grid Gaps**: Use 24px (brutal-md) for cards/grids

### Shadows

#### Shadow Scale
```css
.shadow-brutal-sm { box-shadow: 3px 3px 0 #000; }
.shadow-brutal    { box-shadow: 6px 6px 0 #000; }
.shadow-brutal-lg { box-shadow: 10px 10px 0 #000; }
```

#### Colored Shadows
```css
.shadow-brutal-blue   { box-shadow: 6px 6px 0 var(--electric-blue); }
.shadow-brutal-pink   { box-shadow: 6px 6px 0 var(--neon-pink); }
.shadow-brutal-yellow { box-shadow: 6px 6px 0 var(--cyber-yellow); }
.shadow-brutal-purple { box-shadow: 6px 6px 0 var(--deep-purple); }
```

#### Shadow Usage
- **Default**: Black shadows for all elements
- **Hover State**: Increase shadow size (6px → 10px offset)
- **Active State**: Decrease shadow size (6px → 3px offset)
- **Colored Shadows**: Use for special emphasis or categories

### Borders

#### Border Widths
```css
--border-brutal-thin:  3px;  /* Minimal borders */
--border-brutal:       4px;  /* Standard borders */
--border-brutal-thick: 6px;  /* Emphasis borders */
--border-brutal-extra: 8px;  /* Maximum borders */
```

#### Border Radius
```css
--radius-brutal-sm: 4px;   /* Small radius */
--radius-brutal:    6px;   /* Standard radius */
--radius-brutal-lg: 8px;   /* Large radius */
```

#### Border Guidelines
- **All Interactive Elements**: Use 4px solid black borders
- **Cards & Containers**: Use 3-4px borders with 6-8px radius
- **Buttons**: Use 4px borders with 8px radius
- **Inputs**: Use 3px borders with 6px radius

---

## Atoms

### Colors

All atomic colors should be defined as CSS variables and used consistently throughout the application.

**Implementation:**
```css
:root {
  --electric-blue: #0D7EFF;
  --neon-pink: #FF006E;
  --cyber-yellow: #FFD60A;
  --deep-purple: #7209B7;
  --lime-green: #06FFA5;
}
```

### Icons

**Source:** Lucide React
**Size Scale:** 16px (sm), 20px (md), 24px (lg), 32px (xl)
**Color:** Inherit from parent or use brand colors

**Guidelines:**
- Icons should always be paired with text labels for accessibility
- Use consistent icon sizes within components
- Prefer outline style over filled for consistency

### Buttons

The most fundamental interactive atom in our system.

#### Button Component (NeoButton)

**Anatomy:**
- Text label (uppercase, Space Grotesk, 700 weight)
- Optional icon (left or right)
- 4px solid black border
- 8px border radius
- Brutal shadow

**Variants:**

**Primary Button**
```tsx
<NeoButton variant="primary">
  Click Me
</NeoButton>
```
- Background: Electric Blue (#0D7EFF)
- Text: White
- Border: 4px solid black
- Shadow: 6px 6px 0 black
- Hover: -translate-y-1, shadow-brutal-lg
- Active: translate-y-0, shadow-brutal-sm

**Secondary Button**
```tsx
<NeoButton variant="secondary">
  Learn More
</NeoButton>
```
- Background: White
- Text: Black (#0A0A0A)
- Border: 4px solid black
- Shadow: 6px 6px 0 black
- Hover: bg-cyber-yellow, -translate-y-1, shadow-brutal-lg
- Active: translate-y-0, shadow-brutal-sm

**Sizing:**
- Padding: 12px 24px (mobile), 16px 40px (desktop)
- Font Size: 14px
- Height: Auto (based on padding)

**States:**
- Default: shadow-brutal
- Hover: -translate-y-1 + shadow-brutal-lg
- Active: translate-y-0 + shadow-brutal-sm
- Disabled: opacity-50, pointer-events-none

### Badges

Small, colored labels used for categorization and status.

#### Badge Component (NeoBadge)

**Anatomy:**
- Text label (uppercase, Space Grotesk, 700 weight, 13px)
- 3px solid black border
- Small shadow (3px 3px 0)
- Compact padding (8px 16px)

**Color Variants:**
```tsx
<NeoBadge color="blue">Design</NeoBadge>
<NeoBadge color="pink">Featured</NeoBadge>
<NeoBadge color="yellow">New</NeoBadge>
<NeoBadge color="purple">Premium</NeoBadge>
<NeoBadge color="neutral">Info</NeoBadge>
```

**Usage:**
- **Blue**: Design projects, primary category
- **Pink**: Featured items, special status
- **Yellow**: New items, warnings
- **Purple**: Premium features
- **Neutral**: General information

### Input Fields

**Anatomy:**
- Label (14px, 600 weight, Space Grotesk)
- Input field (16px, 400 weight, Inter)
- 3px solid black border
- 6px border radius
- Optional helper text
- Error state with red border

**States:**
- Default: border-[#000]
- Focus: ring-2 ring-electric-blue
- Error: border-[#d4183d]
- Disabled: opacity-50, bg-gray-100

### Typography Elements

#### Headings (H1-H6)
- Font: Space Grotesk
- Color: #0A0A0A
- Weight: 600-900
- Use semantic HTML tags

#### Paragraphs
- Font: Inter
- Color: #2D2D2D
- Weight: 400
- Line height: 1.6-1.7

#### Links
- Color: Electric Blue (#0D7EFF)
- Underline on hover
- Font weight: 500-600

---

## Molecules

Molecules combine atoms to create functional groups.

### Form Field

**Composition:** Label + Input + Helper Text + Error Message

```tsx
<div className="space-y-2">
  <label className="text-sm font-semibold text-[#0A0A0A]">
    Email Address
  </label>
  <input
    type="email"
    className="w-full px-4 py-3 border-3 border-[#000] rounded-brutal"
  />
  <p className="text-sm text-[#6B7280]">
    We'll never share your email.
  </p>
</div>
```

### Card Header

**Composition:** Title + Badge/Icon + Optional Action Button

```tsx
<div className="flex items-start justify-between">
  <div className="space-y-2">
    <h3 className="text-h3">Project Title</h3>
    <NeoBadge color="blue">Design</NeoBadge>
  </div>
  <button className="...">...</button>
</div>
```

### Search Bar

**Composition:** Input + Search Icon + Search Button

**Usage:**
- Navigation bars
- Filter panels
- Main search features

### Button Group

**Composition:** Multiple buttons in a row (primary + secondary)

```tsx
<div className="flex gap-3">
  <NeoButton variant="primary">Save</NeoButton>
  <NeoButton variant="secondary">Cancel</NeoButton>
</div>
```

---

## Organisms

Complex, standalone UI sections composed of molecules and atoms.

### Navigation Bar (Header)

**Composition:**
- Logo/Brand (left)
- Navigation Links (center/right)
- CTA Button (right)
- Mobile Menu Toggle

**Specifications:**
- Height: 80px (mobile), 100px (desktop)
- Background: Cream (#FFFCF2)
- Border Bottom: 4px solid black
- Sticky position on scroll

**Responsive Behavior:**
- Desktop: Horizontal navigation
- Mobile: Hamburger menu → drawer

### Hero Section

**Composition:**
- Badge/Pill (status/role)
- Headline (text-hero)
- Subheading (text-body-large)
- CTA Button Group
- Decorative geometric shapes (background)
- Grid pattern overlay

**Specifications:**
- Min Height: 90vh (mobile), 100vh (desktop)
- Background: Cream with grid pattern
- Padding: 64px (mobile), 120px (desktop)
- Centered content with max-width 900px

### Blog Card

**Composition:**
- Image (aspect ratio 16:9)
- Badge (category)
- Title (text-h3)
- Excerpt (text-body)
- Read Time
- CTA Link/Button

**Specifications:**
- Border: 4px solid black
- Shadow: shadow-brutal
- Hover: Lift effect + shadow-brutal-lg
- Border Radius: 8px

### Footer

**Composition:**
- Logo + Tagline
- Navigation Columns (Services, Company, Legal)
- Social Links
- Copyright Notice

**Specifications:**
- Background: #0A0A0A (dark)
- Text: White
- Border Top: 4px solid black
- Padding: 64px (mobile), 80px (desktop)

---

## Templates

Page structures without actual content.

### Homepage Template

**Structure:**
1. Header (sticky)
2. Hero Section
3. Journey/About Section
4. Featured Work Section
5. Blog Section (latest posts)
6. CTA Section
7. Footer

### Blog Post Template

**Structure:**
1. Header (sticky)
2. Article Hero (title, meta, featured image)
3. Article Content (prose)
4. Related Posts
5. CTA Section
6. Footer

### Contact Template

**Structure:**
1. Header (sticky)
2. Page Hero (title, description)
3. Contact Form Section
4. Contact Information
5. Footer

---

## Pages

Actual content applied to templates.

### Homepage
- Real hero headline and copy
- Actual journey milestones
- Real project cards
- Published blog posts

### About Page
- Personal story
- Skills and expertise
- Timeline/Experience
- Work philosophy

### Blog Listing Page
- All published articles
- Filter by category
- Search functionality
- Pagination

### Individual Blog Post
- Complete article content
- Code examples
- Images and media
- Author bio

---

## Component Library

### UI Components (Radix UI Based)

All components from `/src/components/ui/` follow the Neobrutalist theme:

#### Accordion
- Border: 4px solid black
- Shadow: shadow-brutal
- Animated expand/collapse

#### Alert Dialog
- Overlay: Semi-transparent black
- Dialog: White background, 4px border, shadow-brutal-lg
- Buttons: NeoButton variants

#### Avatar
- Border: 3px solid black
- Border radius: Full (circle)
- Fallback: Initials on colored background

#### Badge
- See NeoBadge component (Atoms section)

#### Button
- See NeoButton component (Atoms section)

#### Card
- Border: 4px solid black
- Shadow: shadow-brutal
- Border radius: 8px
- Padding: 24px
- Background: White or surface-light

#### Checkbox
- Size: 20px
- Border: 3px solid black
- Checked: Electric blue background
- Checkmark: White

#### Dialog
- Overlay: rgba(0,0,0,0.5)
- Content: White, 4px border, shadow-brutal-lg
- Max width: 500px
- Border radius: 8px

#### Dropdown Menu
- Border: 4px solid black
- Shadow: shadow-brutal-lg
- Items: Hover with yellow background
- Separator: 2px solid black

#### Form
- Uses form field molecules
- Validation states
- Error messages
- Helper text

#### Input
- Border: 3px solid black
- Padding: 12px 16px
- Border radius: 6px
- Focus: Ring 2px electric blue

#### Select
- Border: 3px solid black
- Dropdown: 4px border, shadow-brutal-lg
- Options: Hover yellow background

#### Slider
- Track: 4px solid black
- Thumb: 20px circle, 3px border
- Active: Electric blue

#### Switch
- Border: 3px solid black
- Background: Gray (off), Electric blue (on)
- Thumb: White circle

#### Tabs
- Active: Underline with cyber yellow
- Border bottom: 2px solid black
- Font: Space Grotesk, 600 weight

#### Textarea
- Same as Input but multi-line
- Min height: 100px
- Resize: vertical

#### Tooltip
- Background: Black
- Text: White
- Border: None
- Border radius: 4px
- Shadow: shadow-brutal-sm

---

## Implementation Guidelines

### Code Standards

#### Component Structure
```tsx
// 1. Imports
import React from 'react';
import { cn } from '@/lib/utils';

// 2. TypeScript Interface
interface ComponentProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

// 3. Component Definition
export function Component({
  children,
  variant = 'primary',
  className
}: ComponentProps) {
  // 4. Logic/Hooks

  // 5. Classes definition
  const baseClasses = 'border-4 border-[#000] shadow-brutal';
  const variantClasses = {
    primary: 'bg-[#0D7EFF] text-white',
    secondary: 'bg-white text-[#0A0A0A]'
  };

  // 6. Render
  return (
    <div className={cn(baseClasses, variantClasses[variant], className)}>
      {children}
    </div>
  );
}
```

#### CSS/Tailwind Guidelines
- Use Tailwind utility classes for spacing, colors, typography
- Define custom utilities in `globals.css` for repeated patterns
- Use CSS variables for colors to enable theming
- Follow mobile-first responsive design
- Use `cn()` utility for conditional classes

#### File Organization
```
src/
├── components/
│   ├── ui/              # Radix UI components (atoms)
│   ├── NeoButton.tsx    # Custom atoms
│   ├── NeoBadge.tsx     # Custom atoms
│   ├── Header.tsx       # Organisms
│   ├── Footer.tsx       # Organisms
│   └── HeroSection.tsx  # Organisms
├── styles/
│   └── globals.css      # Design tokens & utilities
├── lib/
│   └── utils.ts         # Helper functions
└── app/                 # Pages
```

### Responsive Design

#### Breakpoints
```css
xs:  480px   /* Small phones */
sm:  640px   /* Large phones */
md:  768px   /* Tablets */
lg:  1024px  /* Laptops */
xl:  1280px  /* Desktops */
2xl: 1536px  /* Large screens */
```

#### Mobile-First Approach
```tsx
// Start with mobile styles
className="text-h3 px-4 py-2
  // Then add tablet overrides
  md:text-h2 md:px-6 md:py-3
  // Finally desktop overrides
  lg:text-h1 lg:px-8 lg:py-4"
```

### Accessibility

#### Checklist
- [ ] All interactive elements keyboard accessible
- [ ] Color contrast meets WCAG AA (4.5:1 for text)
- [ ] Focus indicators visible
- [ ] Semantic HTML (`<button>`, `<nav>`, `<main>`, etc.)
- [ ] ARIA labels for icon-only buttons
- [ ] Alt text for images
- [ ] Form labels properly associated
- [ ] Respect `prefers-reduced-motion`

#### Example: Accessible Button
```tsx
<button
  className="..."
  aria-label="Submit form"
  disabled={isLoading}
  onClick={handleSubmit}
>
  {isLoading ? 'Loading...' : 'Submit'}
</button>
```

### Performance

#### Optimization Strategies
- Lazy load images with `loading="lazy"`
- Use Next.js Image component for optimization
- Code split large components
- Minimize animation complexity
- Use CSS transforms over position changes
- Debounce expensive operations

---

## Version History

- **v1.0.0** (2025-01-16) - Initial Neobrutalist Design System
  - Complete Atomic Design structure
  - Core component library
  - Design tokens defined
  - Accessibility guidelines

---

## Contributing

When adding new components:

1. **Follow Atomic Design** - Classify as atom, molecule, or organism
2. **Document Thoroughly** - Add to this guide with examples
3. **Test Accessibility** - Run WCAG checks
4. **Responsive Testing** - Test on mobile, tablet, desktop
5. **Code Review** - Ensure consistency with existing patterns

---

## Resources

- [Atomic Design by Brad Frost](https://atomicdesign.bradfrost.com/)
- [Radix UI Documentation](https://www.radix-ui.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Space Grotesk Font](https://fonts.google.com/specimen/Space+Grotesk)
- [Inter Font](https://fonts.google.com/specimen/Inter)

---

**Design System Maintained by:** [Your Name/Team]
**Last Updated:** January 16, 2025
**Version:** 1.0.0
