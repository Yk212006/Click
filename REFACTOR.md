# Click Interior Solutions - Premium Interior Design Website

A modern, premium interior design business website built with Next.js, Chakra UI, and integrated with Strapi CMS.

## 🎨 Project Overview

**Click Interior Solutions** is a refactored version of a previous e-commerce project, now serving as a professional interior design business website for a Bengaluru-based company serving pan-India.

### Key Features

- 🎯 **Modern Homepage** with hero section, services preview, and featured projects
- 📋 **Services Page** showcasing Residential, Office, and Commercial interior design services
- 🖼️ **Portfolio Page** with project filtering by category
- ℹ️ **About Page** highlighting team, values, and company story
- 📧 **Contact Page** with functional contact form
- 🎨 **Premium Branding** with luxury color scheme (Gold, Black, Beige, White)
- 🔗 **Strapi CMS Ready** - All content structured for easy CMS integration
- 📱 **Responsive Design** - Mobile-first approach with Chakra UI

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn
- (Optional) Strapi CMS instance for dynamic content

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd home_interior-main

# Install dependencies
npm install

# Create environment file
cp .env.local.example .env.local

# Configure Strapi URL in .env.local
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337/api
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## 📁 Project Structure

```
pages/
├── index.js                 # Homepage
├── services.js              # Services page
├── portfolio.js             # Portfolio/Projects page
├── about.js                 # About page
├── contact.js               # Contact form page
└── api/                     # API routes (future)

components/
├── Navbar.jsx               # Navigation bar
├── Footer.jsx               # Footer (updated)
├── theme.js                 # Chakra UI theme with premium colors

lib/
├── api.js                   # Strapi CMS API integration

reducer/
├── store.js                 # Redux store (minimal, for future expansion)
```

## 🎨 Design System

### Color Palette

- **Primary Gold**: `#C8A951` - Brand accent color
- **Black**: `#000000` - Primary text and backgrounds
- **Beige**: `#F3EDE8` - Light backgrounds
- **White**: `#FFFFFF` - Main background
- **Gold Shades**: 50-900 scale for various UI elements

### Typography

- **Headings**: Poppins
- **Body**: Inter

## 🔌 Strapi CMS Integration

The frontend is structured to fetch data from a Strapi CMS instance.

### API Endpoints Used

All API functions are available in `lib/api.js`:

```javascript
import {
  getAllProjects,
  getProjectById,
  getProjectsByCategory,
  getCategories,
  submitContactForm,
  getPageContent
} from '../lib/api';
```

### Data Models

#### Projects

```
{
  id: number,
  attributes: {
    title: string,
    description: string,
    category: "Residential Interiors" | "Office Interiors" | "Commercial Projects",
    images: array,
    location: string,
    createdAt: date
  }
}
```

## 📝 Pages Documentation

### Homepage (`pages/index.js`)

- Hero section with CTA
- Services preview (3 cards)
- Featured projects grid (fetched from Strapi)
- About preview section
- Contact CTA section

**Data Fetching**: `getStaticProps()` with ISR (revalidate every hour)

### Services Page (`pages/services.js`)

- Detailed service descriptions
- 4-step design process
- Service features with checkmarks
- CTA for consultation

### Portfolio Page (`pages/portfolio.js`)

- Project filtering by category
- Responsive grid layout
- Project statistics
- CTA sections

**Data Fetching**: `getStaticProps()` fetches all projects from Strapi

### About Page (`pages/about.js`)

- Company story
- Core values (6 cards)
- Team members section
- Why choose us features

### Contact Page (`pages/contact.js`)

- Contact form with validation
- Contact information (email, phone, address)
- Business hours
- FAQ section
- Multiple CTA options

**Form Handling**: Ready for Strapi `submitContactForm` integration

## 🛠️ What Was Removed

✅ **Removed from original e-commerce setup:**

- ❌ Cart functionality (DrawerCart component references removed)
- ❌ Checkout pages and components
- ❌ Payment processing logic
- ❌ Add to Cart buttons
- ❌ Login/Signup authentication system
- ❌ Admin product CRUD interface
- ❌ E-commerce specific reducers (CartReducer, LoginReducer, SignupReducer)
- ❌ Search functionality (e-commerce context)
- ❌ Product catalog structure (replaced with Projects)

✅ **Kept and Modified:**

- ✅ Next.js framework and routing
- ✅ Chakra UI for styling (updated theme)
- ✅ Redux store (minimal, for future needs)
- ✅ Component-based architecture
- ✅ API integration pattern

## 🔄 Migration from E-commerce

### Key Changes

1. **Redux Store**: Removed cart, auth, and user reducers. Kept minimal store for future expansion.

2. **Navigation**: Updated Navbar with new menu structure (Home, Services, Portfolio, About, Contact)

3. **Theme**: Replaced orange e-commerce theme with premium gold/black/beige luxury theme

4. **Data Models**: Changed from "Products" to "Projects" with interior design context

5. **Pages**: Replaced product catalog pages with informational pages (Services, About, Contact)

## 📦 Dependencies

### Key Libraries

```json
{
  "@chakra-ui/react": "^2.4.9",
  "@emotion/react": "^11.10.5",
  "@emotion/styled": "^11.10.5",
  "next": "^16.1.6",
  "react": "18.2.0",
  "react-redux": "^8.0.5",
  "redux": "^4.2.0",
  "redux-thunk": "^2.4.2"
}
```

### Removed Dependencies

The following can be uninstalled if not used elsewhere:

```bash
npm uninstall react-router-dom react-multi-carousel react-slick
```

## 🔐 Environment Variables

Create `.env.local` file:

```env
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337/api
NEXT_PUBLIC_APP_NAME=Click Interior Solutions
NEXT_PUBLIC_CONTACT_EMAIL=info@clickinterior.com
NEXT_PUBLIC_CONTACT_PHONE=+91 8800 000 000
```

## 🚀 Deployment

### Vercel Deployment (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Docker Deployment

```dockerfile
FROM node:16-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🧑‍💻 Development Tips

### Add New Page

1. Create `pages/new-page.js`
2. Use Chakra UI components for styling
3. Follow existing page structure with Container, heading, sections
4. Add link to Navbar if needed

### Customize Colors

Edit `components/theme.js` to modify the color palette:

```javascript
colors: {
  brand: {
    500: "#C8A951", // Change primary gold
  },
  luxury: {
    gold: "#C8A951",
    black: "#000000",
    beige: "#F3EDE8",
    white: "#FFFFFF",
  }
}
```

### Connect Strapi CMS

1. Set up Strapi instance
2. Create "projects" collection type
3. Update `NEXT_PUBLIC_STRAPI_URL` in `.env.local`
4. Test API with `lib/api.js` functions

## 📚 API Documentation

### `lib/api.js` Functions

#### `getAllProjects(filters)`
Fetch all projects with optional filters
```javascript
const { data } = await getAllProjects();
```

#### `getProjectById(id)`
Fetch single project by ID
```javascript
const project = await getProjectById(123);
```

#### `getProjectsByCategory(category)`
Fetch projects filtered by category
```javascript
const projects = await getProjectsByCategory("Residential Interiors");
```

#### `submitContactForm(data)`
Submit contact form to backend
```javascript
await submitContactForm({
  name: "John Doe",
  email: "john@example.com",
  city: "Bengaluru",
  message: "I'm interested in..."
});
```

## 🎯 Future Enhancements

- [ ] Strapi CMS full integration and setup guide
- [ ] Blog/News section
- [ ] Before-after project comparisons
- [ ] Client testimonials section
- [ ] Team member profiles with images
- [ ] Virtual consultation booking system
- [ ] Multi-language support
- [ ] Analytics integration
- [ ] Email notification system

## 📧 Support & Contact

For questions about this refactored project:
- Email: info@clickinterior.com
- Phone: +91 8800 000 000

## 📄 License

This project is proprietary to Click Interior Solutions.

---

**Last Updated**: February 12, 2026
**Version**: 1.0.0
