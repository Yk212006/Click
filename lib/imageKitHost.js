// ImageKit.io professional CDN hosting
export const IMAGEKIT_CONFIG = {
  urlEndpoint: 'https://ik.imagekit.io/clickinteriors', // Your ImageKit URL endpoint
  publicKey: 'public_your_public_key_here', // Replace with your actual public key from ImageKit dashboard
  authenticationEndpoint: '/api/imagekit-auth' // Optional auth endpoint
};

// ImageKit URL transformation helper
export const getImageKitUrl = (imagePath, options = {}) => {
  if (!imagePath) return '/placeholder.jpg';
  
  // Remove leading slash if present
  const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  
  // Default transformations for optimization
  const defaultOptions = {
    tr: {
      w: 800,        // width
      h: 600,        // height
      c: 'fill',     // crop mode
      q: 80,         // quality
      f: 'auto',     // format (auto webp/avif)
      dpr: 'auto'    // device pixel ratio
    },
    ...options
  };
  
  // Build ImageKit URL
  const url = `${IMAGEKIT_CONFIG.urlEndpoint}/${cleanPath}`;
  
  // Add transformation parameters
  const params = new URLSearchParams();
  if (defaultOptions.tr) {
    Object.entries(defaultOptions.tr).forEach(([key, value]) => {
      params.append(key, value);
    });
  }
  
  const fullUrl = params.toString() ? `${url}?${params.toString()}` : url;
  
  console.log('ImageKit URL:', fullUrl);
  return fullUrl;
};

// Get optimized image URL for products with fallback
export const getProductImageUrl = (imagePath, customOptions = {}) => {
  // Real image paths from your ImageKit media library
  const realImages = {
    'flooring/engineered-wooden-flooring': 'https://ik.imagekit.io/clickinteriors/tr:w-600,h-450,c-fill,q-85,f-auto/products/engineered-wooden-flooring-sample.jpg',
    'wallpaper': 'https://ik.imagekit.io/clickinteriors/tr:w-600,h-450,c-fill,q-85,f-auto/products/wallpaper-sample.jpg',
    'solid-surface': 'https://ik.imagekit.io/clickinteriors/tr:w-600,h-450,c-fill,q-85,f-auto/products/solid-surface-sample.jpg',
    'panels': 'https://ik.imagekit.io/clickinteriors/tr:w-600,h-450,c-fill,q-85,f-auto/products/panels-sample.jpg',
    'sports-flooring': 'https://ik.imagekit.io/clickinteriors/tr:w-600,h-450,c-fill,q-85,f-auto/products/sports-flooring-sample.jpg',
    'gym-flooring': 'https://ik.imagekit.io/clickinteriors/tr:w-600,h-450,c-fill,q-85,f-auto/products/gym-flooring-sample.jpg',
    'quartz': 'https://ik.imagekit.io/clickinteriors/tr:w-600,h-450,c-fill,q-85,f-auto/products/quartz-sample.jpg',
    'alabaster': 'https://ik.imagekit.io/clickinteriors/tr:w-600,h-450,c-fill,q-85,f-auto/products/alabaster-sample.jpg',
    'rubber-flooring': 'https://ik.imagekit.io/clickinteriors/tr:w-600,h-450,c-fill,q-85,f-auto/products/rubber-flooring-sample.jpg',
    'artificial-grass': 'https://ik.imagekit.io/clickinteriors/tr:w-600,h-450,c-fill,q-85,f-auto/products/artificial-grass-sample.jpg'
  };
  
  // Return real image if available, otherwise fallback to placeholder
  return realImages[imagePath] || `https://ik.imagekit.io/clickinteriors/tr:w-600,h-450,c-fill,q-85,f-auto/placeholder.jpg`;
};

// Thumbnail generator
export const getThumbnailUrl = (imagePath) => {
  return getImageKitUrl(imagePath, {
    tr: {
      w: 150,
      h: 150,
      c: 'fill',
      q: 70,
      f: 'auto'
    }
  });
};

// Full screen image URL
export const getFullScreenUrl = (imagePath) => {
  return getImageKitUrl(imagePath, {
    tr: {
      w: 1200,
      h: 900,
      c: 'fill',
      q: 90,
      f: 'auto'
    }
  });
};
