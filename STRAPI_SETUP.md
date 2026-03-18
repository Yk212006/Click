# Strapi CMS Integration Guide

This guide walks you through setting up Strapi CMS to work with Click Interior Solutions frontend.

## 📋 Prerequisites

- Node.js 16+
- PostgreSQL or SQLite (for Strapi)
- Click Interior Solutions frontend (already set up)

## 🚀 Quick Setup

### Step 1: Create Strapi Project

```bash
# Create new Strapi project
npx create-strapi-app@latest click-interior-cms

# Navigate to project
cd click-interior-cms

# Start Strapi server
npm run develop
```

Strapi will open at `http://localhost:1337`

### Step 2: Create Admin User

1. In Strapi admin panel, create an admin account
2. Save your credentials securely

### Step 3: Create Collection Types

#### 3.1 Create "Project" Collection Type

1. Go to **Content-type Builder**
2. Click **Create new collection type**
3. Name it: `project`
4. Add the following fields:

| Field Name | Type | Required | Notes |
|-----------|------|----------|-------|
| `title` | Text | Yes | Short title |
| `description` | Rich Text | Yes | Full project description |
| `category` | Enumeration | Yes | Options: "Residential Interiors", "Office Interiors", "Commercial Projects" |
| `location` | Text | No | Project location |
| `images` | Media | Yes | Upload project images |
| `featured` | Boolean | No | Mark as featured project |

5. Click **Save**
6. Go to **Content Manager** → **Project**
7. Click **Create new entry**
8. Fill in sample projects with your design work

#### 3.2 Create "Contact Submission" Collection Type (Optional)

For handling contact form submissions:

1. Create collection type: `contact-submission`
2. Add fields:

| Field Name | Type |
|-----------|------|
| `name` | Text |
| `email` | Email |
| `city` | Text |
| `message` | Text |
| `submittedAt` | DateTime |

### Step 4: Configure API Access

1. Go to **Settings** → **API Tokens**
2. Click **Create new API token**
3. Set Token name: `Frontend Access`
4. Set Type: `Full access`
5. Copy the token and save securely
6. Use this in `.env.local` if you need authenticated requests

### Step 5: Update Frontend Configuration

In your Next.js frontend (click home_interior-main):

```bash
# Copy example env file
cp .env.local.example .env.local

# Edit .env.local
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337/api
```

### Step 6: Test API Connection

From frontend root, run:

```bash
npm run dev
```

Visit `http://localhost:3000/portfolio` - it should fetch projects from your Strapi instance.

## 📊 Data Structure Examples

### Sample Project Entry

```json
{
  "id": 1,
  "attributes": {
    "title": "Modern Mumbai Penthouse",
    "description": "A stunning 4BHK penthouse in the heart of Mumbai with contemporary design elements...",
    "category": "Residential Interiors",
    "location": "Mumbai, Maharashtra",
    "featured": true,
    "images": {
      "data": [
        {
          "id": 1,
          "attributes": {
            "url": "/uploads/image1_abc123.jpg",
            "name": "Living Room"
          }
        }
      ]
    },
    "createdAt": "2024-02-12T10:00:00.000Z",
    "updatedAt": "2024-02-12T10:00:00.000Z"
  }
}
```

### Sample Contact Submission

```json
{
  "id": 1,
  "attributes": {
    "name": "Raj Patel",
    "email": "raj@example.com",
    "city": "Bengaluru",
    "message": "I'm interested in designing my living room...",
    "submittedAt": "2024-02-12T15:30:00.000Z"
  }
}
```

## 🔐 API Permissions

### Make Content Public

1. Go to **Settings** → **Users and Permissions** → **Roles**
2. Click **Public**
3. Under **Permissions**, expand **Project**
4. Check:
   - `find` (list all)
   - `findOne` (get single)
5. Click **Save**
6. Repeat for other content types

## 🧪 Testing API Endpoints

Use these URLs to test:

```bash
# Get all projects
http://localhost:1337/api/projects?populate=*

# Get single project
http://localhost:1337/api/projects/1?populate=*

# Get filtered projects
http://localhost:1337/api/projects?filters[category][$eq]=Residential%20Interiors

# Submit contact form
POST http://localhost:1337/api/contact-submissions
Content-Type: application/json

{
  "data": {
    "name": "John Doe",
    "email": "john@example.com",
    "city": "Bengaluru",
    "message": "Message here"
  }
}
```

## 🚀 Deploying Strapi

### Option 1: Render.com (Recommended)

```bash
# Create account at render.com
# Deploy Strapi using their GitHub integration
# Configure environment variables
DATABASE_URL=your_database_url
```

### Option 2: Railway.app

```bash
# Deploy with Railway
# Set environment variables for database
# Point frontend NEXT_PUBLIC_STRAPI_URL to deployed instance
```

### Option 3: DigitalOcean App Platform

1. Push Strapi to GitHub
2. Connect to DigitalOcean
3. Set environment variables
4. Deploy

## 🔗 Update Frontend After Deployment

Once Strapi is deployed:

```env
# Production .env.local
NEXT_PUBLIC_STRAPI_URL=https://your-strapi-domain.com/api
```

## 📸 Image Handling

### Upload Images in Strapi

1. In Project content type, add images via Media field
2. Images are stored in `/public/uploads/`
3. Access images via `{image.attributes.url}` in frontend

### Image Optimization

For production, optimize images:

```javascript
// In portfolio.js or similar
import Image from 'next/image';

<Image
  src={imageUrl}
  alt={projectTitle}
  width={500}
  height={300}
  priority
/>
```

## 🛠️ Troubleshooting

### Issue: CORS Errors

**Solution**: Configure CORS in Strapi

```bash
# In Strapi project
# config/middlewares.js

module.exports = [
  'strapi::errors',
  {
    name: 'strapi::cors',
    config: {
      origin: ['http://localhost:3000', 'https://yourdomain.com'],
    },
  },
];
```

### Issue: API Returns Empty Data

**Solution**: Check permissions in Settings → Users & Permissions

### Issue: Images Not Loading

**Solution**: 
1. Check image URL format
2. Verify file exists in Strapi uploads
3. Check image permissions in Content Manager

## 📚 Useful Resources

- [Strapi Documentation](https://docs.strapi.io)
- [Strapi API Reference](https://docs.strapi.io/developer-docs/latest/api/rest/overview.html)
- [Strapi Community](https://forum.strapi.io)

## 🎯 Next Steps

1. ✅ Set up Strapi project
2. ✅ Create collection types
3. ✅ Add sample projects
4. ✅ Test API endpoints
5. ✅ Connect frontend
6. ✅ Deploy to production

---

**Version**: 1.0.0  
**Last Updated**: February 12, 2026
