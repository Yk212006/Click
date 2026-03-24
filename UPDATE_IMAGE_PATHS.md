# Update Real Image Paths

## Current Status
Your ImageKit is configured with `https://ik.imagekit.io/clickinteriors` but needs real image paths.

## Steps to Update Real Images:

### 1. Upload Images to ImageKit
1. Go to your ImageKit dashboard: https://imagekit.io/dashboard/media-library/L3Byb2R1Y3Rz
2. Upload your product images to the `products` folder
3. Maintain folder structure:
   ```
   products/
   ├── Flooring/
   │   └── engineered-wooden-flooring/
   │       ├── ef1.jpg
   │       ├── ef2.jpg
   │       └── ef3.jpg
   ├── wallpaper/
   │   ├── wall1.jpg
   │   ├── wall2.jpg
   │   └── wall3.jpg
   └── Solid Surface/
       └── non bendable/
           ├── alticore/
           └── inlife/
   ```

### 2. Get Your Public Key
1. Go to **Developer Settings** in ImageKit dashboard
2. Copy your **Public Key**
3. Update `lib/imageKitHost.js`:
   ```javascript
   publicKey: 'public_your_actual_key_here', // Replace with real key
   ```

### 3. Update Image Paths
Replace the sample paths in `lib/imageKitHost.js` with your actual uploaded images:

```javascript
const realImages = {
  'flooring/engineered-wooden-flooring': 'https://ik.imagekit.io/clickinteriors/tr:w-600,h-450,c-fill,q-85,f-auto/products/Flooring/engineered-wooden-flooring/ef1.jpg',
  'wallpaper': 'https://ik.imagekit.io/clickinteriors/tr:w-600,h-450,c-fill,q-85,f-auto/products/wallpaper/wall1.jpg',
  // Add all your real image paths here
};
```

### 4. Test the URLs
You can test individual URLs in your browser:
```
https://ik.imagekit.io/clickinteriors/products/Flooring/engineered-wooden-flooring/ef1.jpg
```

### 5. Multiple Images per Product
For products with multiple images, you'll need to update the ProductGallery component to handle arrays of images.

## Benefits Once Complete:
- ✅ Fast loading with CDN
- ✅ Automatic optimization (WebP/AVIF)
- ✅ Professional image delivery
- ✅ Analytics on image usage
