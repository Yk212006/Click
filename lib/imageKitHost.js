// ImageKit.io professional CDN hosting
export const IMAGEKIT_CONFIG = {
  urlEndpoint: 'https://ik.imagekit.io/clickinteriors', // Your ImageKit URL endpoint
  publicKey: 'public_dOOLIDMELU63bkqYEA3GZhGcJoY=', // Your actual public key from ImageKit dashboard
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
  // Direct ImageKit URLs - using your actual uploaded folder structure
  const baseUrl = 'https://ik.imagekit.io/clickinteriors/tr:w-600,h-450,c-fill,q-85,f-auto/products';
  
  // Map product paths to your actual uploaded image folders
  const imageMap = {
    'flooring/engineered-wooden-flooring': `${baseUrl}/Flooring/engineered%20flooring/ef1.jpg`,
    'wallpaper': `${baseUrl}/wallpaper/wall1.jpg`,
    'solid-surface': `${baseUrl}/Solid%20Surface/non%20bendable/alticore/ac1.jpg`,
    'panels': `${baseUrl}/panels/panel1.jpg`,
    'sports-flooring': `${baseUrl}/sports%20flooring/sf1.jpg`,
    'gym-flooring': `${baseUrl}/gym%20flooring/gf1.jpg`,
    'quartz': `${baseUrl}/quartz/qz1.jpg`,
    'alabaster': `${baseUrl}/alabaster/ab1.jpg`,
    'rubber-flooring': `${baseUrl}/rubber%20flooring/rf1.jpg`,
    'artificial-grass': `${baseUrl}/artificial%20grass/ag1.jpg`
  };
  
  // Return mapped image or fallback
  return imageMap[imagePath] || `${baseUrl}/placeholder.jpg`;
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
  const baseUrl = 'https://ik.imagekit.io/clickinteriors/tr:w-1200,h-900,c-fill,q-90,f-auto/products';
  
  const imageMap = {
    'flooring/engineered-wooden-flooring': `${baseUrl}/Flooring/engineered%20flooring/ef1.jpg`,
    'wallpaper': `${baseUrl}/wallpaper/wall1.jpg`,
    'solid-surface': `${baseUrl}/Solid%20Surface/non%20bendable/alticore/ac1.jpg`,
    'panels': `${baseUrl}/panels/panel1.jpg`,
    'sports-flooring': `${baseUrl}/sports%20flooring/sf1.jpg`,
    'gym-flooring': `${baseUrl}/gym%20flooring/gf1.jpg`,
    'quartz': `${baseUrl}/quartz/qz1.jpg`,
    'alabaster': `${baseUrl}/alabaster/ab1.jpg`,
    'rubber-flooring': `${baseUrl}/rubber%20flooring/rf1.jpg`,
    'artificial-grass': `${baseUrl}/artificial%20grass/ag1.jpg`
  };
  
  return imageMap[imagePath] || `${baseUrl}/placeholder.jpg`;
};

// Get multiple images for gallery
export const getGalleryImages = (productPath) => {
  const baseUrl = 'https://ik.imagekit.io/clickinteriors/tr:w-600,h-450,c-fill,q-85,f-auto/products';
  
  const galleryMap = {
    'flooring/engineered-wooden-flooring': [
      `${baseUrl}/Flooring/engineered%20flooring/ef1.jpg`,
      `${baseUrl}/Flooring/engineered%20flooring/ef2.jpg`,
      `${baseUrl}/Flooring/engineered%20flooring/ef3.jpg`
    ],
    'wallpaper': [
      `${baseUrl}/wallpaper/wall1.jpg`,
      `${baseUrl}/wallpaper/wall2.jpg`,
      `${baseUrl}/wallpaper/wall3.jpg`,
      `${baseUrl}/wallpaper/wall4.jpg`,
      `${baseUrl}/wallpaper/wall5.jpg`
    ],
    'solid-surface': [
      `${baseUrl}/Solid%20Surface/non%20bendable/alticore/ac1.jpg`,
      `${baseUrl}/Solid%20Surface/non%20bendable/alticore/ac2.jpg`,
      `${baseUrl}/Solid%20Surface/non%20bendable/alticore/ac3.jpg`
    ],
    'gym-flooring': [
      `${baseUrl}/gym%20flooring/gf1.jpg`,
      `${baseUrl}/gym%20flooring/gf2.jpg`,
      `${baseUrl}/gym%20flooring/gf3.jpg`
    ],
    'quartz': [
      `${baseUrl}/quartz/qz1.jpg`,
      `${baseUrl}/quartz/qz2.jpg`,
      `${baseUrl}/quartz/qz3.jpg`
    ],
    'rubber-flooring': [
      `${baseUrl}/rubber%20flooring/rf1.jpg`,
      `${baseUrl}/rubber%20flooring/rf2.jpg`,
      `${baseUrl}/rubber%20flooring/rf3.jpg`
    ],
    'sports-flooring': [
      `${baseUrl}/sports%20flooring/sf1.jpg`,
      `${baseUrl}/sports%20flooring/sf2.jpg`,
      `${baseUrl}/sports%20flooring/sf3.jpg`
    ],
    'artificial-grass': [
      `${baseUrl}/artificial%20grass/ag1.jpg`,
      `${baseUrl}/artificial%20grass/ag2.jpg`,
      `${baseUrl}/artificial%20grass/ag3.jpg`
    ],
    'alabaster': [
      `${baseUrl}/alabaster/ab1.jpg`,
      `${baseUrl}/alabaster/ab2.jpg`,
      `${baseUrl}/alabaster/ab3.jpg`
    ]
  };
  
  return galleryMap[productPath] || [`${baseUrl}/placeholder.jpg`];
};
