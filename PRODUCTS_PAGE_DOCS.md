# Products Page Documentation

## Overview

This documentation covers the Products feature for Click Interior Solutions website, including the main products page and dynamic product detail pages.

## File Structure

```
pages/
├── products.js              # Main products page with grid of categories
└── products/
    └── [slug].js           # Dynamic product detail page

components/
└── ProductTile.jsx         # Reusable product tile component

styles/
└── globals.css             # Global styles including product tile hover effects
```

## Pages

### 1. `/pages/products.js` - Products Listing Page

**Purpose**: Displays all product categories in a responsive grid layout.

**Features**:
- Hero section with brand messaging
- 7 product categories in responsive grid (1 column mobile, 2 columns tablet, 3 columns desktop)
- Product tiles with hover animations
- Consultation CTA section
- Brand color integration (Deep Green #1E7F3C)

**Product Categories**:
1. Solid Surface
2. Flooring
3. Sports Flooring
4. Panels
5. Alabaster Sheet
6. Wall Paper
7. Quartz

**Data Structure**:
```javascript
const PRODUCT_CATEGORIES = [
  {
    id: 1,
    title: "Solid Surface",
    slug: "solid-surface",
    description: "Premium solid surface solutions",
  },
  // ... more categories
];
```

**Grid Layout**:
- **Mobile** (base): 1 column
- **Tablet** (md): 2 columns
- **Desktop** (lg): 3 columns
- Gap: 6px on mobile, 8px on tablet/desktop

### 2. `/pages/products/[slug].js` - Product Detail Page

**Purpose**: Displays detailed information about a specific product category.

**Features**:
- Breadcrumb navigation
- Product image gallery section (placeholder)
- Product title and availability badge
- Full description
- Key features list with checkmarks
- Quote request and back buttons
- Related products section (shows 3 other categories)

**Dynamic Routes**:
- `/products/solid-surface`
- `/products/flooring`
- `/products/sports-flooring`
- `/products/panels`
- `/products/alabaster-sheet`
- `/products/wall-paper`
- `/products/quartz`

**Product Data Structure**:
```javascript
const PRODUCTS_DATA = {
  "solid-surface": {
    title: "Solid Surface",
    description: "...",
    fullDescription: "...",
    features: ["Feature 1", "Feature 2", ...],
    availability: "In Stock",
  },
  // ... more products
};
```

**Key Components**:
- Breadcrumb navigation with ChevronRightIcon
- Image gallery with placeholder
- Feature list with circular checkmarks
- Badge for stock status
- Related products grid

## Components

### ProductTile Component

**File**: `components/ProductTile.jsx`

**Purpose**: Reusable tile component for product categories.

**Props**:
```javascript
{
  category: {
    id: number,
    title: string,
    slug: string,
    description: string,
    backgroundImage?: string  // Optional background image URL
  }
}
```

**Features**:
- Responsive height: 300px
- Background image support (placeholder gradient if not provided)
- Dark overlay gradient (0.3-0.6 opacity, green-tinted)
- Hover effects:
  - Green accent border appears
  - Scale 1.02
  - Brightness increases on background
  - Arrow indicator fades in
- Product title and description displayed at bottom
- Uses Next.js Link for client-side navigation

**Styling**:
- Uses Chakra UI for component structure
- CSS classes for hover states defined in globals.css
- Smooth transitions (0.3s ease)
- Rounded corners (lg)

**Usage Example**:
```javascript
import { ProductTile } from "../components/ProductTile";

<ProductTile 
  category={{
    id: 1,
    title: "Solid Surface",
    slug: "solid-surface",
    description: "Premium solid surface solutions"
  }} 
/>
```

## Styling and Theme

### Brand Colors

- **Primary Green**: #1E7F3C
- **Secondary Burgundy**: #7A2E3A
- **Background Beige**: #F7F7F5

### Hover Effects (globals.css)

Product tiles have smooth hover animations:
- Border color transition to green (#1E7F3C)
- Slight scale animation (1.02x)
- Opacity animation for arrow indicator
- Background brightness increase
- All transitions use `0.3s ease`

### Responsive Design

**Breakpoints** (Chakra UI defaults):
- **base**: 0px (mobile)
- **sm**: 30em (640px)
- **md**: 48em (768px)
- **lg**: 62em (992px)
- **xl**: 80em (1280px)

**Grid Responsiveness**:
```javascript
templateColumns={{ 
  base: "1fr",           // Mobile: 1 column
  md: "repeat(2, 1fr)",  // Tablet: 2 columns
  lg: "repeat(3, 1fr)"   // Desktop: 3 columns
}}
```

## Navigation

### Links

- **Products Page Link**: `/products`
- **Individual Product Links**: `/products/[slug]`
  - Example: `/products/solid-surface`

### Breadcrumb Navigation

Product detail pages include breadcrumb navigation:
```
Home > Products > Product Name
```

Using Chakra UI's `<Breadcrumb>` component with `<ChevronRightIcon>` as separator.

## Image Handling

### Image Placeholders

- Main image: Gradient background (light gray to dark gray)
- Thumbnails: 4 placeholder boxes (80px each)
- Placeholder message: "Product Image Gallery"

### Future CMS Integration

Product images can be fetched from a CMS (Strapi) when available. Update the `PRODUCTS_DATA` object to include image URLs:

```javascript
const PRODUCTS_DATA = {
  "solid-surface": {
    title: "Solid Surface",
    description: "...",
    fullDescription: "...",
    features: [...],
    availability: "In Stock",
    images: [  // To be added
      "https://...",
      "https://...",
    ]
  }
};
```

## Features Implementation

### Key Features Display

Each product shows a list of key features with circular checkmarks:

```javascript
features: [
  "Non-porous",
  "Seamless Design",
  "Heat Resistant",
  "Easy to Clean",
  "Customizable Colors"
]
```

Displayed in a 2-column grid with green checkmark circles.

## Call-to-Action

### Primary CTAs

1. **Request Quote** (Products Detail Page)
   - Button: Solid green background
   - Links to: `/contact`

2. **Request Consultation** (Products Listing Page)
   - Button: Solid green background
   - Links to: `/contact`

### Secondary CTAs

- **Back to Products**: Outlined button with green text
- **Learn More**: Links to service/product pages

## Code Quality

### Best Practices

1. **Modular Components**: ProductTile component is reusable
2. **Consistent Styling**: Uses Chakra UI theme variables
3. **Responsive Design**: Mobile-first approach with breakpoints
4. **Semantic HTML**: Proper heading hierarchy (h1, h2, h3)
5. **Accessibility**: Breadcrumb navigation, proper button semantics
6. **Performance**: Static data (no API calls), optimized grid rendering

### TypeScript (Optional Enhancement)

For future TypeScript migration:

```typescript
interface ProductCategory {
  id: number;
  title: string;
  slug: string;
  description: string;
  backgroundImage?: string;
}

interface ProductDetail extends ProductCategory {
  fullDescription: string;
  features: string[];
  availability: "In Stock" | "Coming Soon";
}
```

## Future Enhancements

1. **CMS Integration**
   - Fetch products from Strapi
   - Dynamic image uploads
   - Rich text descriptions

2. **Image Gallery**
   - Multiple images per product
   - Image carousel
   - Zoom functionality

3. **Filtering & Search**
   - Filter products by category
   - Search functionality
   - Price range filtering

4. **Product Customization**
   - Color variants
   - Size options
   - Specification downloads (PDF)

5. **User Reviews**
   - Product ratings
   - Customer testimonials
   - Review section

6. **Inventory Management**
   - Real-time stock status
   - Pre-order capability
   - Availability calendar

7. **Analytics**
   - Track product views
   - Popular products
   - Conversion tracking

## Testing Checklist

- [ ] Products page loads without errors
- [ ] All 7 product categories display in grid
- [ ] Product tiles show hover animations
- [ ] Clicking product tile navigates to detail page
- [ ] Detail pages load with correct product info
- [ ] Breadcrumb navigation works correctly
- [ ] Related products section displays
- [ ] "Request Quote" button links to contact page
- [ ] Responsive design works on mobile, tablet, desktop
- [ ] Images load properly (placeholders)
- [ ] Brand colors are consistent throughout

## Troubleshooting

### Common Issues

**1. Hover animations not working**
- Check `styles/globals.css` is imported in `_app.js`
- Verify `.product-tile-group` class is applied to ProductTile

**2. Product not found error**
- Ensure slug in URL matches key in `PRODUCTS_DATA` object
- Check spelling of product slugs

**3. Responsive grid not working**
- Verify Chakra UI is properly configured in `_app.js`
- Check responsive values in `templateColumns` prop

**4. Links not working**
- Ensure Next.js Link component is imported
- Verify href paths are correct
- Check that pages exist in `/pages` directory

## File Sizes & Performance

- `pages/products.js`: ~7KB (unminified)
- `pages/products/[slug].js`: ~10KB (unminified)
- `components/ProductTile.jsx`: ~3KB (unminified)
- CSS additions: ~0.5KB

**Total**: ~20.5KB of new code (very lightweight)

## Deployment Notes

1. Ensure all pages are built successfully: `npm run build`
2. Test all routes in production build: `npm run start`
3. Verify image placeholders load correctly
4. Check responsive design on actual devices
5. Monitor Core Web Vitals (Lighthouse)

## Contact & Support

For questions or modifications to the Products pages, refer to the main project documentation or contact the development team.
