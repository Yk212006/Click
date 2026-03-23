// External image hosting configuration
export const IMAGE_BASE_URL = 'https://raw.githubusercontent.com/Yk212006/Click/main/public/products';

// Get image URL from external host
export const getProductImageUrl = (imagePath) => {
  if (!imagePath) return '/placeholder.jpg';
  
  // Remove leading slash if present
  const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  
  // Use GitHub raw URLs for now (free and reliable)
  const githubUrl = `${IMAGE_BASE_URL}/${cleanPath}`;
  
  // For debugging - log the URL
  console.log('Image URL:', githubUrl);
  
  return githubUrl;
};

// List of essential local images (keep these local)
export const LOCAL_IMAGES = [
  '/home/hero.jpg',
  '/home/wallpaper.png',
  '/logo.png',
  '/favicon.ico'
];
