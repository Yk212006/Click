# ImageKit.io Setup Guide

## Step 1: Create ImageKit Account
1. Go to [ImageKit.io](https://imagekit.io)
2. Sign up for free account
3. Create a new project

## Step 2: Get Your Credentials
1. From dashboard, go to **Developer Settings**
2. Copy your **URL Endpoint** and **Public Key**
3. Update `lib/imageKitHost.js`:

```javascript
export const IMAGEKIT_CONFIG = {
  urlEndpoint: 'https://ik.imagekit.io/your_actual_id', // Replace with your URL endpoint
  publicKey: 'your_actual_public_key', // Replace with your public key
  authenticationEndpoint: '/api/imagekit-auth' // Optional
};
```

## Step 3: Upload Product Images
1. Go to ImageKit dashboard
2. Upload your product images to the **products** folder
3. Maintain the same folder structure:
   ```
   products/
   ├── Solid Surface/
   ├── Flooring/
   ├── panels/
   ├── wallpaper/
   └── etc...
   ```

## Step 4: Update Image Paths
Replace placeholder URLs in `imageKitHost.js` with real image paths:

```javascript
const workingPlaceholders = {
  'flooring/engineered-wooden-flooring': 'https://ik.imagekit.io/your_id/products/Flooring/engineered%20flooring/ef1.jpg',
  'wallpaper': 'https://ik.imagekit.io/your_id/products/wallpaper/wall.jpg',
  // Add all your product paths here
};
```

## Benefits of ImageKit:
- ✅ **Automatic optimization** - WebP/AVIF conversion
- ✅ **CDN delivery** - Fast loading globally
- ✅ **Image transformations** - Resize, crop, quality
- ✅ **Free tier** - 20GB bandwidth/month
- ✅ **Real-time stats** - Usage analytics

## Testing:
1. Update credentials
2. Upload a few test images
3. Update image paths
4. Deploy and test galleries
