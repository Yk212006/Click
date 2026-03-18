# Plesk Deployment Checklist - Option 1 (Server-Side)

## ✅ Files Ready for Upload

### Required Files:
- ✅ `server.js` - Main server file (configured for production)
- ✅ `web.config` - IIS configuration for Node.js
- ✅ `package.json` - Dependencies and scripts
- ✅ `package-lock.json` - Locked dependency versions
- ✅ `.next/` - Next.js build output
- ✅ `node_modules/` - Installed dependencies (335 packages)
- ✅ `public/` - Static assets (images, fonts, etc.)
- ✅ `components/` - React components
- ✅ `pages/` - Next.js pages
- ✅ `styles/` - CSS and styling files

## 🚀 Plesk Setup Instructions

### 1. Node.js Configuration
- Go to Plesk → Node.js
- Ensure Node.js version 16+ is installed
- Set **Application Root** to your domain folder
- Set **Application URL** to `http://localhost:3000`
- Set **Application Startup File** to `server.js`
- Set **Environment Variables**:
  - `NODE_ENV=production`
  - `PORT=3000`

### 2. File Upload
- Upload the ENTIRE folder including:
  - All source files
  - `.next` folder (build output)
  - `node_modules` folder (dependencies)
  - Configuration files

### 3. Permissions
- Ensure `node_modules` and `.next` folders have read/write permissions
- Set proper file permissions (755 for folders, 644 for files)

### 4. Restart Application
- In Plesk Node.js settings, click "Restart Node.js App"
- Check the application logs for any errors

## 🔧 Troubleshooting

### Common Issues:
1. **500 Error**: Check Node.js version compatibility
2. **Module not found**: Ensure `node_modules` uploaded completely
3. **Port conflict**: Change port in `server.js` if 3000 is in use
4. **Build errors**: Check `.next` folder integrity

### Log Locations:
- Plesk: Websites & Domains → your domain → Logs
- Node.js: Node.js → your app → Log Files

## 📊 Application Details
- **Framework**: Next.js 16.1.6
- **Mode**: Production (server-side rendering)
- **Port**: 3000 (configurable)
- **Static Files**: Served from `public/` folder
- **Build Output**: Located in `.next/` folder

## ⚠️ Important Notes
- This setup requires Node.js support on Plesk
- API routes will work (not disabled like static export)
- Dynamic rendering and server-side functions enabled
- Images are optimized (not unoptimized like static version)
