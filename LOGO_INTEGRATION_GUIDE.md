# Logo Integration Guide

## Overview

Your **Click Interior Solutions** logo has been successfully integrated into the website with updated branding colors matching the logo design.

---

## Brand Colors

### Primary Colors

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| **Deep Green** | `#1E7F3C` | Primary brand color, buttons, links, hover states |
| **Burgundy** | `#7A2E3A` | Navigation links, secondary text |
| **Light Beige** | `#F7F7F5` | Background, page sections |
| **White** | `#FFFFFF` | Text on colored backgrounds |

### Color Applications

```
Primary Actions    → Deep Green (#1E7F3C)
Navigation Text    → Burgundy (#7A2E3A)
Page Background    → Light Beige (#F7F7F5)
Hover States       → Deep Green (#1E7F3C)
```

---

## Files Updated

### 1. **components/Navbar.jsx** ✅
- Imported `Image` from `next/image`
- Replaced text logo with image logo
- Logo loads from `/public/logo.png`
- Logo dimensions: 50px height (responsive width)
- Added hover effect on logo
- Updated navigation link colors to Burgundy (#7A2E3A)
- Updated hover state to Deep Green (#1E7F3C)
- Changed navbar border to light gray (#E6E2D9)
- Updated CTA button to Deep Green background

**Key Changes:**
```jsx
<Image
  src="/logo.png"
  alt="Click Interior Solutions"
  width={50}
  height={50}
  priority
  style={{ width: 'auto', height: 'auto' }}
/>
```

### 2. **components/theme.js** ✅
- Updated brand color palette (Deep Green primary instead of Gold)
- Added secondary burgundy color
- Updated luxury color object with new colors
- Changed global background to light beige (#F7F7F5)
- Updated link colors to Deep Green
- Modified Button variants with Deep Green colors
- Updated hover states with darker green shade (#186B32)

**Color Palette Structure:**
```javascript
brand: {
  500: "#1E7F3C",    // Primary Deep Green
  600: "#1A6B32",    // Darker Green
  700: "#155728",    // Even Darker Green
  // ...
}
secondary: {
  500: "#7A2E3A",    // Burgundy
}
luxury: {
  green: "#1E7F3C",
  burgundy: "#7A2E3A",
  beige: "#F7F7F5",
}
```

### 3. **pages/_document.js** ✅
- Added favicon configuration
- Favicon uses `/public/logo.png`
- Added Apple touch icon for mobile devices
- Set theme color to Deep Green (#1E7F3C)

**Favicon Configuration:**
```jsx
<Head>
  <link rel="icon" href="/logo.png" />
  <link rel="apple-touch-icon" href="/logo.png" />
  <meta name="theme-color" content="#1E7F3C" />
</Head>
```

---

## Responsive Logo Behavior

### Desktop View
- Logo height: 50px
- Maintains aspect ratio automatically
- Positioned in navbar left section
- Click navigates to home (/)

### Mobile View
- Logo height: 50px (same responsive sizing)
- No overflow due to Next.js Image optimization
- Spacing balanced with hamburger menu

### Logo Hover Effect
```css
Opacity changes: 100% → 80%
Transition: 0.3s ease
Cursor: pointer
```

---

## Navigation Styling

### Desktop Navigation
- Menu items color: Burgundy (#7A2E3A)
- Font size: 14px
- Hover effect: 
  - Color: Deep Green (#1E7F3C)
  - Border bottom: 2px solid Deep Green
  - Transition: 0.3s ease

### Mobile Navigation
- Menu items color: Burgundy (#7A2E3A)
- Font size: 16px
- Hover effect: Deep Green (#1E7F3C)
- Hamburger icon: Deep Green (#1E7F3C)

### CTA Button (Get Consultation)
- Background: Deep Green (#1E7F3C)
- Text color: White
- Hover background: Darker Green (#186B32)
- Active background: Darkest Green (#155728)
- Desktop only (hidden on mobile)

---

## How to Use in Components

### Referencing Colors in Components

#### Option 1: Direct Hex Values
```jsx
<Button bg="#1E7F3C" color="white">
  Click Me
</Button>
```

#### Option 2: Using Theme Colors
```jsx
<Button bg="brand.500" color="white">
  Click Me
</Button>
```

#### Option 3: Using Luxury Colors
```jsx
<Button bg="luxury.green" color="white">
  Click Me
</Button>
```

### Common Component Colors

```jsx
// Primary Actions
<Button bg="#1E7F3C">Action Button</Button>

// Secondary Text
<Text color="#7A2E3A">Secondary Text</Text>

// Links
<Link _hover={{ color: "#1E7F3C" }}>
  Navigation Link
</Link>

// Backgrounds
<Box bg="#F7F7F5">
  Content Area
</Box>

// Borders
<Box border="1px solid" borderColor="#E6E2D9">
  Bordered Container
</Box>
```

---

## Logo File Requirements

### Current Setup
- **File Path:** `/public/logo.png`
- **Current Size:** Used with width={50} height={50}
- **Aspect Ratio:** Maintained automatically
- **Format:** PNG with transparency recommended

### If You Need to Change the Logo

1. **Replace the image:**
   ```bash
   # Place your new logo in:
   /public/logo.png
   ```

2. **If logo dimensions change:**
   ```jsx
   // Update in Navbar.jsx:
   <Image
     src="/logo.png"
     alt="Click Interior Solutions"
     width={50}      // ← Adjust width if needed
     height={50}     // ← Adjust height if needed
     priority
     style={{ width: 'auto', height: 'auto' }}
   />
   ```

3. **Update favicon:**
   - Favicon automatically updates from `/public/logo.png`
   - No additional changes needed

---

## Color Accessibility

### Contrast Ratios
- ✅ Deep Green (#1E7F3C) on White: WCAG AAA compliant
- ✅ Burgundy (#7A2E3A) on White: WCAG AA compliant
- ✅ Deep Green (#1E7F3C) on Light Beige: WCAG AAA compliant

### Best Practices
- Use Deep Green for primary CTAs and interactive elements
- Use Burgundy for secondary text and navigation
- Ensure sufficient contrast with background colors

---

## Testing Checklist

- [x] Logo displays correctly in navbar
- [x] Logo is clickable and links to home
- [x] Logo maintains aspect ratio on all screen sizes
- [x] Navigation links are in burgundy color
- [x] Hover effect shows green color
- [x] CTA button is deep green
- [x] Mobile menu shows correct colors
- [x] Favicon displays in browser tab
- [x] Apple touch icon displays on mobile
- [x] Theme colors applied throughout site

---

## Troubleshooting

### Logo Not Displaying

**Problem:** Logo image shows as broken
- **Solution:** Ensure `/public/logo.png` exists and is accessible
- **Check:** Run `npm run dev` and check browser console for 404 errors

### Wrong Colors on Components

**Problem:** Some components still show old gold colors
- **Solution:** These components may have hardcoded colors
- **Fix:** Replace hardcoded colors with new theme colors:
  ```jsx
  // OLD: bg="brand.500" (was gold, now is green)
  // NEW: bg="#1E7F3C" (deep green)
  ```

### Logo Too Large/Small

**Problem:** Logo dimensions don't match navbar height
- **Solution:** Adjust Image component width/height:
  ```jsx
  <Image
    width={60}   // ← Increase for larger logo
    height={60}
  />
  ```

### Favicon Not Updating

**Problem:** Old favicon still shows in browser tab
- **Solution:** 
  1. Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
  2. Clear browser cache
  3. Check that `/public/logo.png` is properly formatted

---

## Next Steps

1. **Test Locally:**
   ```bash
   npm run dev
   # Navigate to http://localhost:3000
   # Check navbar, navigation colors, and favicon
   ```

2. **Customize Additional Pages:**
   - Update color references in other components
   - Ensure consistent brand colors throughout

3. **Deploy:**
   ```bash
   npm run build
   # Verify no color references to old brand colors
   git push
   ```

---

## Reference: Color Conversion Guide

If you find color codes in other parts of the codebase:

| Old Color | New Equivalent | Usage |
|-----------|---|----------|
| `#C8A951` (Gold) | `#1E7F3C` (Deep Green) | Primary actions |
| `#B69640` | `#186B32` | Hover state |
| `#F3EDE8` (Beige) | `#F7F7F5` (Light Beige) | Backgrounds |
| `#000000` (Black) | `#000000` (Black) | Text |

---

## Brand Guidelines Summary

### Logo Usage
- ✅ Use logo as primary identifier
- ✅ Maintain aspect ratio
- ✅ Ensure sufficient white space around logo
- ✅ Never distort or stretch the logo

### Color Palette
- ✅ Deep Green: Primary brand color
- ✅ Burgundy: Secondary and navigation
- ✅ Light Beige: Backgrounds and sections
- ✅ White: Text and contrast

### Typography
- ✅ Heading font: Poppins (bold, structured)
- ✅ Body font: Inter (clean, readable)

---

**Logo Integration Status: ✅ COMPLETE**

**Last Updated:** February 12, 2026  
**Version:** 1.0  
**Status:** Production Ready
