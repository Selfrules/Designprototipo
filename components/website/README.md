# Design System Components for Website Repository

These components are ready to be copied to the **Selfrules/website** repository.

## Files Included

### Core Components
1. **`NeoButton.tsx`** - Neobrutalist button component with primary and secondary variants
2. **`NeoBadge.tsx`** - Colored badge component for categories and status

### Design System Documentation Page
3. **`DesignSystemPage.tsx`** - Main design system documentation page
4. **`DesignSystemSections.tsx`** - Blog, Patterns, and Navigation sections
5. **`DesignSystemAdditional.tsx`** - ChatBot, Forms, Timeline, Hero, and Services sections

## Installation Instructions

### Step 1: Copy Components

From this directory, copy all files to your website repository's `components/` directory:

```bash
# Navigate to your website repository
cd /path/to/website

# Create components directory if it doesn't exist
mkdir -p components

# Copy all component files
cp /path/to/Designprototipo/components/website/*.tsx ./components/
```

### Step 2: Create Route for Design System Page

#### For Next.js App Router (Next.js 13+)

Create `app/design-system/page.tsx`:

```tsx
'use client';

import { DesignSystemPage } from '@/components/DesignSystemPage';
import { useRouter } from 'next/navigation';

export default function DesignSystemRoute() {
  const router = useRouter();

  return <DesignSystemPage onBack={() => router.push('/')} />;
}
```

#### For Next.js Pages Router (Next.js 12 and below)

Create `pages/design-system.tsx`:

```tsx
import { DesignSystemPage } from '@/components/DesignSystemPage';
import { useRouter } from 'next/router';

export default function DesignSystemRoute() {
  const router = useRouter();

  return <DesignSystemPage onBack={() => router.push('/')} />;
}
```

### Step 3: Verify Imports

Make sure your `tsconfig.json` has path aliases configured:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

### Step 4: Install Dependencies

Ensure you have the required dependencies:

```bash
npm install lucide-react
```

### Step 5: Test

Run your development server and visit `/design-system`:

```bash
npm run dev
```

Visit `http://localhost:3000/design-system` to see the design system documentation page.

## Component Usage

### NeoButton

```tsx
import { NeoButton } from '@/components/NeoButton';

function MyComponent() {
  return (
    <div>
      <NeoButton variant="primary" onClick={() => console.log('Clicked!')}>
        Primary Button
      </NeoButton>

      <NeoButton variant="secondary">
        Secondary Button
      </NeoButton>
    </div>
  );
}
```

**Props:**
- `variant`: 'primary' | 'secondary' (default: 'primary')
- `onClick`: Function to call on click
- `className`: Additional CSS classes
- `fullWidth`: Boolean to make button full width
- `children`: Button content

### NeoBadge

```tsx
import { NeoBadge } from '@/components/NeoBadge';

function MyComponent() {
  return (
    <div>
      <NeoBadge color="blue">Design</NeoBadge>
      <NeoBadge color="pink">Featured</NeoBadge>
      <NeoBadge color="yellow">New</NeoBadge>
      <NeoBadge color="purple">Premium</NeoBadge>
      <NeoBadge color="neutral">Info</NeoBadge>
    </div>
  );
}
```

**Props:**
- `color`: 'blue' | 'pink' | 'yellow' | 'purple' | 'neutral' (default: 'blue')
- `className`: Additional CSS classes
- `children`: Badge content

### DesignSystemPage

```tsx
import { DesignSystemPage } from '@/components/DesignSystemPage';

function MyPage() {
  return (
    <DesignSystemPage
      onBack={() => {
        // Navigate back to home or previous page
        router.push('/');
      }}
    />
  );
}
```

**Props:**
- `onBack`: Function to call when "Back" button is clicked

## Sections Included in Design System Page

The `DesignSystemPage` component includes the following sections:

1. **Colors** - Brand colors, neutrals, and semantic colors
2. **Typography** - Type scale, font families, and usage
3. **Spacing** - 8pt spacing grid and usage examples
4. **Components** - Buttons, badges, inputs, and cards
5. **Effects** - Shadows, border radius, and animations
6. **Accessibility** - Color contrast and focus states
7. **Blog Components** - Reading progress, TOC, CTAs, share buttons, article cards
8. **Patterns & Textures** - Dot patterns, grids, textured cards, decorative shapes
9. **Navigation** - Headers, links, breadcrumbs, pagination
10. **ChatBot** - Floating chat button and chat window
11. **Forms** - Contact forms and input fields
12. **Timeline** - Journey milestones with vertical timeline
13. **Hero** - Hero section with floating shapes
14. **Services** - Service cards with pricing
15. **Icons** - Lucide React icon showcase

## Customization

### Changing Colors

Edit the color values in the component files or override with Tailwind classes:

```tsx
<NeoButton
  variant="primary"
  className="bg-[#FF0000]" // Override blue with red
>
  Custom Color
</NeoButton>
```

### Changing Fonts

The components use inline styles for fonts. To change globally, update in your `globals.css`:

```css
h1, h2, h3, h4, h5, h6 {
  font-family: 'Your Heading Font', sans-serif;
}

body {
  font-family: 'Your Body Font', sans-serif;
}
```

### Changing Shadows

Shadows are defined in `tailwind.config.ts`. Update the `boxShadow` section:

```ts
boxShadow: {
  'brutal': '8px 8px 0px 0px #000000', // Change offset or color
}
```

## Troubleshooting

### Issue: Components not rendering

**Solution:** Check that you've:
1. Installed `lucide-react`
2. Copied all required files (NeoButton.tsx, NeoBadge.tsx, etc.)
3. Set up path aliases in tsconfig.json

### Issue: Fonts not loading

**Solution:** Ensure Google Fonts import is in `app/globals.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;900&family=Inter:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap');
```

### Issue: Styles not applying

**Solution:** Verify that `globals.css` and `tailwind.config.ts` have been replaced with the new versions.

## Next Steps

After copying these components:

1. Replace `app/globals.css` with the new version
2. Replace `tailwind.config.ts` with the new version
3. Replace `tailwind.config.test.ts` with the new version
4. Update existing components to use the new design system
5. Test thoroughly across different devices and browsers

For complete migration instructions, see **[MIGRATION_GUIDE.md](../../MIGRATION_GUIDE.md)**.

---

**Happy building! 🎨**
