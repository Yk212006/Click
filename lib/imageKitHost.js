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
  // Fallback to working placeholders using your ImageKit endpoint
  const workingPlaceholders = {
    'flooring/engineered-wooden-flooring': 'https://ik.imagekit.io/clickinteriors/tr:w-600,h-450,c-fill,q-85,f-auto/placeholder_engineered_wood.jpg',
    'wallpaper': 'https://ik.imagekit.io/clickinteriors/tr:w-600,h-450,c-fill,q-85,f-auto/placeholder_wallpaper.jpg',
    'default': 'https://ik.imagekit.io/clickinteriors/tr:w-600,h-450,c-fill,q-85,f-auto/default_product.jpg'
  };
  
  // Return working placeholder for now
  return workingPlaceholders[imagePath] || workingPlaceholders.default;
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
