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
    'panels': `${baseUrl}/panels/acoustic%20panel/ap1.jpg`,
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
    'panels': `${baseUrl}/panels/acoustic%20panel/ap1.jpg`,
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
    'panels': [
      `${baseUrl}/panels/acoustic%20panel/ap1.jpg`,
      `${baseUrl}/panels/acoustic%20panel/ap2.jpg`,
      `${baseUrl}/panels/acoustic%20panel/ap3.jpg`,
      `${baseUrl}/panels/acoustic%20panel/ap4.jpg`,
      `${baseUrl}/panels/acoustic%20panel/ap5.jpg`
    ],
    'acoustic-panels': [
      `${baseUrl}/panels/acoustic%20panel/ap1.jpg`,
      `${baseUrl}/panels/acoustic%20panel/ap2.jpg`,
      `${baseUrl}/panels/acoustic%20panel/ap3.jpg`,
      `${baseUrl}/panels/acoustic%20panel/ap4.jpg`,
      `${baseUrl}/panels/acoustic%20panel/ap5.jpg`
    ],
    'mlv-sound-barrier': [
      `${baseUrl}/panels/mlv/mlv1.avif`,
      `${baseUrl}/panels/mlv/mlv2.jpg`,
      `${baseUrl}/panels/mlv/mlv3.jpg`,
      `${baseUrl}/panels/mlv/mlv4.jpg`,
      `${baseUrl}/panels/mlv/mlv5.jpg`
    ],
    'louver-fluted-panels': [
      `${baseUrl}/panels/fluted%20and%20louver%20panels/fl1.jpg`,
      `${baseUrl}/panels/fluted%20and%20louver%20panels/fl2.jpg`,
      `${baseUrl}/panels/fluted%20and%20louver%20panels/fl3.jpg`,
      `${baseUrl}/panels/fluted%20and%20louver%20panels/fl4.jpg`,
      `${baseUrl}/panels/fluted%20and%20louver%20panels/fl5.jpg`
    ],
    'charcoal-panels': [
      `${baseUrl}/panels/charcoal/cp1.jpg`,
      `${baseUrl}/panels/charcoal/cp2.jpg`,
      `${baseUrl}/panels/charcoal/cp3.jpg`,
      `${baseUrl}/panels/charcoal/cp4.jpg`,
      `${baseUrl}/panels/charcoal/cp5.jpg`
    ],
    'pvc-panels': [
      `${baseUrl}/panels/pvc/pvc1.jpg`,
      `${baseUrl}/panels/pvc/pvc2.jpg`,
      `${baseUrl}/panels/pvc/pvc3.jpg`,
      `${baseUrl}/panels/pvc/pvc4.jpg`,
      `${baseUrl}/panels/pvc/pvc5.jpg`
    ],
    'hpl-cladding': [
      `${baseUrl}/panels/hpl/hpl1.jpg`,
      `${baseUrl}/panels/hpl/hpl2.jpg`,
      `${baseUrl}/panels/hpl/hpl3.jpg`,
      `${baseUrl}/panels/hpl/hpl4.jpg`,
      `${baseUrl}/panels/hpl/hpl5.jpg`
    ],
    'gym-flooring': [
      `${baseUrl}/gym%20flooring/gf1.jpg`,
      `${baseUrl}/gym%20flooring/gf2.jpg`,
      `${baseUrl}/gym%20flooring/gf3.jpg`,
      `${baseUrl}/gym%20flooring/gf4.jpg`,
      `${baseUrl}/gym%20flooring/gf5.jpg`
    ],
    'quartz': [
      `${baseUrl}/quartz/q1.jpg`,
      `${baseUrl}/quartz/q2.jpg`,
      `${baseUrl}/quartz/q3.jpg`,
      `${baseUrl}/quartz/q4.jpg`,
      `${baseUrl}/quartz/q5.jpg`
    ],
    'rubber-flooring': [
      `${baseUrl}/rubber%20flooring/rf1.jpg`,
      `${baseUrl}/rubber%20flooring/rf2.jpg`,
      `${baseUrl}/rubber%20flooring/rf3.jpg`,
      `${baseUrl}/rubber%20flooring/rf4.jpg`,
      `${baseUrl}/rubber%20flooring/rf5.jpg`
    ],
    'sports-flooring': [
      `${baseUrl}/sports%20flooring/sf1.jpg`,
      `${baseUrl}/sports%20flooring/sf2.jpg`,
      `${baseUrl}/sports%20flooring/sf3.jpg`,
      `${baseUrl}/sports%20flooring/sf4.jpg`,
      `${baseUrl}/sports%20flooring/sf5.jpg`
    ],
    '/sports-flooring': [
      `${baseUrl}/sports%20flooring/sf1.jpg`,
      `${baseUrl}/sports%20flooring/sf2.jpg`,
      `${baseUrl}/sports%20flooring/sf3.jpg`,
      `${baseUrl}/sports%20flooring/sf4.jpg`,
      `${baseUrl}/sports%20flooring/sf5.jpg`
    ],
    'artificial-grass': [
      `${baseUrl}/artificial%20grass/af1.jpg`,
      `${baseUrl}/artificial%20grass/af2.jpg`,
      `${baseUrl}/artificial%20grass/af3.jpg`,
      `${baseUrl}/artificial%20grass/af4.jpg`,
      `${baseUrl}/artificial%20grass/af5.jpg`
    ],
    'alabaster': [
      `${baseUrl}/alabaster/ab1.jpg`,
      `${baseUrl}/alabaster/ab2.jpg`,
      `${baseUrl}/alabaster/ab3.jpg`
    ],
    'alabaster-sheet': [
      `${baseUrl}/alabaster/alabaster.jpg`,
      `${baseUrl}/alabaster/alabaster2.avif`,
      `${baseUrl}/alabaster/alabaster3.avif`,
      `${baseUrl}/alabaster/alabaster4.jpg`,
      `${baseUrl}/alabaster/alabaster5.jpg`
    ],
    'wall-paper': [
      `${baseUrl}/wallpaper/wall1.jpg`,
      `${baseUrl}/wallpaper/wall2.jpg`,
      `${baseUrl}/wallpaper/wall3.jpg`,
      `${baseUrl}/wallpaper/wall4.jpg`,
      `${baseUrl}/wallpaper/wall5.jpg`
    ]
  };
  
  const images = galleryMap[productPath] || [`${baseUrl}/placeholder.jpg`];
  return images;
};
