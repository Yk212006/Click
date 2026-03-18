// External CDN configuration for product images
export const IMAGE_CDN_BASE = 'https://your-cdn-domain.com/products';

// Fallback to local images for development
export const getImageUrl = (imagePath) => {
  if (typeof window !== 'undefined') {
    // Client-side - use CDN in production, local in development
    return process.env.NODE_ENV === 'production' 
      ? `${IMAGE_CDN_BASE}${imagePath}`
      : imagePath;
  }
  
  // Server-side - always use local path during build
  return imagePath;
};

// List of essential images to keep (small, critical images)
export const ESSENTIAL_IMAGES = [
  '/logo.png',
  '/favicon.ico',
  '/vercel.svg',
  '/thirteen.svg'
];
