// External CDN configuration for product images
export const IMAGE_CDN_BASE = 'https://your-cdn-domain.com/products';

// Multiple image hosting options for reliability
const IMAGE_HOSTS = {
  primary: 'https://raw.githubusercontent.com/Yk212006/Click/main/public/products',
  fallback: 'https://i.imgur.com/', // Alternative if GitHub fails
  local: '/products' // Local fallback
};

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

// Get image URL with multiple fallbacks
export const getProductImageUrl = (imagePath) => {
  if (!imagePath) return '/placeholder.jpg';
  
  // Remove leading slash if present
  const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  
  // Try primary (GitHub) first
  const primaryUrl = `${IMAGE_HOSTS.primary}/${cleanPath}`;
  
  console.log('Generated image URL:', primaryUrl);
  
  return primaryUrl;
};

// Check if image exists (for debugging)
export const debugImageUrl = (imagePath) => {
  const url = getProductImageUrl(imagePath);
  console.log('Debug - Image path:', imagePath);
  console.log('Debug - Full URL:', url);
  return url;
};

// List of essential images to keep (small, critical images)
export const ESSENTIAL_IMAGES = [
  '/logo.png',
  '/favicon.ico',
  '/vercel.svg',
  '/thirteen.svg'
];
