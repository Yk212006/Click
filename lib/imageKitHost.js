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
  
  console.log('🔍 DEBUG: Getting gallery images for:', productPath);
  
  const galleryMap = {
    'flooring/engineered-wooden-flooring': [
      `${baseUrl}/Flooring/engineered%20flooring/ef1.jpg`,
      `${baseUrl}/Flooring/engineered%20flooring/ef2.jpg`,
      `${baseUrl}/Flooring/engineered%20flooring/ef3.jpg`,
      `${baseUrl}/Flooring/engineered%20flooring/ef4.jpg`,
      `${baseUrl}/Flooring/engineered%20flooring/ef5.jpg`
    ],
    'engineered-wooden-flooring': [
      `${baseUrl}/Flooring/engineered%20flooring/ef1.jpg`,
      `${baseUrl}/Flooring/engineered%20flooring/ef2.jpg`,
      `${baseUrl}/Flooring/engineered%20flooring/ef3.jpg`,
      `${baseUrl}/Flooring/engineered%20flooring/ef4.jpg`,
      `${baseUrl}/Flooring/engineered%20flooring/ef5.jpg`
    ],
    'wallpaper': [
      `${baseUrl}/wallpaper/wall1.jpg`,
      `${baseUrl}/wallpaper/wall2.jpg`,
      `${baseUrl}/wallpaper/wall3.jpg`,
      `${baseUrl}/wallpaper/wall4.jpg`,
      `${baseUrl}/wallpaper/wall5.jpg`
    ],
    'laminated-flooring': [
      `${baseUrl}/Flooring/laminated%20flooring/l1.png`,
      `${baseUrl}/Flooring/laminated%20flooring/l2.avif`,
      `${baseUrl}/Flooring/laminated%20flooring/l3.jpg`,
      `${baseUrl}/Flooring/laminated%20flooring/l4.jpg`,
      `${baseUrl}/Flooring/laminated%20flooring/l5.jpg`
    ],
    'vinyl-flooring': [
      `${baseUrl}/Flooring/vinyl%20flooring/v1.avif`,
      `${baseUrl}/Flooring/vinyl%20flooring/v2.jpg`,
      `${baseUrl}/Flooring/vinyl%20flooring/v3.jpg`,
      `${baseUrl}/Flooring/vinyl%20flooring/v4.jpg`,
      `${baseUrl}/Flooring/vinyl%20flooring/v5.jpg`
    ],
    'non-woven-flooring': [
      `${baseUrl}/Flooring/non%20woven/nw1.jpg`,
      `${baseUrl}/Flooring/non%20woven/nw2.jpg`,
      `${baseUrl}/Flooring/non%20woven/nw3.jpg`,
      `${baseUrl}/Flooring/non%20woven/nw4.jpg`,
      `${baseUrl}/Flooring/non%20woven/nw5.jpg`
    ],
    'solid-wooden-flooring': [
      `${baseUrl}/Flooring/solid%20wooden%20flooring/sw1.jpg`,
      `${baseUrl}/Flooring/solid%20wooden%20flooring/sw2.jpg`,
      `${baseUrl}/Flooring/solid%20wooden%20flooring/sw3.jpg`,
      `${baseUrl}/Flooring/solid%20wooden%20flooring/sw4.jpg`,
      `${baseUrl}/Flooring/solid%20wooden%20flooring/sw5.jpg`
    ],
    'lvt-flooring': [
      `${baseUrl}/Flooring/lvt%20flooring/lvt1.jpg`,
      `${baseUrl}/Flooring/lvt%20flooring/lvt2.jpg`,
      `${baseUrl}/Flooring/lvt%20flooring/lvt3.jpg`,
      `${baseUrl}/Flooring/lvt%20flooring/lvt4.jpg`,
      `${baseUrl}/Flooring/lvt%20flooring/lvt5.jpg`
    ],
    'spc-flooring': [
      `${baseUrl}/Flooring/spc%20flooring/spc1.jpg`,
      `${baseUrl}/Flooring/spc%20flooring/spc2.jpg`,
      `${baseUrl}/Flooring/spc%20flooring/spc3.jpg`,
      `${baseUrl}/Flooring/spc%20flooring/spc4.jpg`,
      `${baseUrl}/Flooring/spc%20flooring/spc5.jpg`
    ],
    'carpet-flooring': [
      `${baseUrl}/Flooring/carpet%20flooring/c1.jpeg`,
      `${baseUrl}/Flooring/carpet%20flooring/c2.jpeg`,
      `${baseUrl}/Flooring/carpet%20flooring/c3.jpeg`,
      `${baseUrl}/Flooring/carpet%20flooring/c4.jpeg`,
      `${baseUrl}/Flooring/carpet%20flooring/c5.jpeg`
    ],
    'homogenous-antistatic-flooring': [
      `${baseUrl}/Flooring/homogenous/h1.avif`,
      `${baseUrl}/Flooring/homogenous/h2.jpg`,
      `${baseUrl}/Flooring/homogenous/h3.jpg`,
      `${baseUrl}/Flooring/homogenous/h4.jpg`,
      `${baseUrl}/Flooring/homogenous/h5.jpg`
    ],
    'homogeneous-antistatic-flooring': [
      `${baseUrl}/Flooring/homogenous/h1.avif`,
      `${baseUrl}/Flooring/homogenous/h2.jpg`,
      `${baseUrl}/Flooring/homogenous/h3.jpg`,
      `${baseUrl}/Flooring/homogenous/h4.jpg`,
      `${baseUrl}/Flooring/homogenous/h5.jpg`
    ],
    'deck-flooring': [
      `${baseUrl}/Flooring/deck%20flooring/df1.jpg`,
      `${baseUrl}/Flooring/deck%20flooring/df2.jpg`,
      `${baseUrl}/Flooring/deck%20flooring/df3.jpg`,
      `${baseUrl}/Flooring/deck%20flooring/df4.jpg`,
      `${baseUrl}/Flooring/deck%20flooring/df5.jpg`
    ],
    'solid-surface': [
      `${baseUrl}/Solid%20Surface/non%20bendable/alticore/ac1.jpg`,
      `${baseUrl}/Solid%20Surface/non%20bendable/alticore/ac2.jpg`,
      `${baseUrl}/Solid%20Surface/non%20bendable/alticore/ac3.jpg`
    ],
    'rehau-non-solid-surface': [
      `${baseUrl}/Solid%20Surface/non%20bendable/rehau/rh1.png`,
      `${baseUrl}/Solid%20Surface/non%20bendable/rehau/rh2.jpg`,
      `${baseUrl}/Solid%20Surface/non%20bendable/rehau/rh3.jpg`,
      `${baseUrl}/Solid%20Surface/non%20bendable/rehau/rh4.jpg`,
      `${baseUrl}/Solid%20Surface/non%20bendable/rehau/rh5.jpg`
    ],
    'inlife-solid-surface': [
      `${baseUrl}/Solid%20Surface/non%20bendable/inlife/il1.jpg`,
      `${baseUrl}/Solid%20Surface/non%20bendable/inlife/il2.jpg`,
      `${baseUrl}/Solid%20Surface/non%20bendable/inlife/il3.jpg`,
      `${baseUrl}/Solid%20Surface/non%20bendable/inlife/il4.jpg`,
      `${baseUrl}/Solid%20Surface/non%20bendable/inlife/il5.jpg`
    ],
    'omex-solid-surface': [
      `${baseUrl}/Solid%20Surface/non%20bendable/omex/om1.jpg`,
      `${baseUrl}/Solid%20Surface/non%20bendable/omex/om2.jpg`,
      `${baseUrl}/Solid%20Surface/non%20bendable/omex/om3.jpg`,
      `${baseUrl}/Solid%20Surface/non%20bendable/omex/om4.jpg`,
      `${baseUrl}/Solid%20Surface/non%20bendable/omex/om5.jpg`
    ],
    'alticore-solid-surface': [
      `${baseUrl}/Solid%20Surface/non%20bendable/alticore/ac1.jpg`,
      `${baseUrl}/Solid%20Surface/non%20bendable/alticore/ac2.jpg`,
      `${baseUrl}/Solid%20Surface/non%20bendable/alticore/ac3.jpg`,
      `${baseUrl}/Solid%20Surface/non%20bendable/alticore/ac4.jpg`,
      `${baseUrl}/Solid%20Surface/non%20bendable/alticore/ac5.jpg`
    ],
    'vivanta-solid-surface': [
      `${baseUrl}/Solid%20Surface/bendable/vivanta/vv1.jpg`,
      `${baseUrl}/Solid%20Surface/bendable/vivanta/vv2.jpg`,
      `${baseUrl}/Solid%20Surface/bendable/vivanta/vv3.jpg`,
      `${baseUrl}/Solid%20Surface/bendable/vivanta/vv4.jpg`,
      `${baseUrl}/Solid%20Surface/bendable/vivanta/vv5.jpg`
    ],
    'vivanta': [
      `${baseUrl}/Solid%20Surface/bendable/vivanta/vv1.jpg`,
      `${baseUrl}/Solid%20Surface/bendable/vivanta/vv2.jpg`,
      `${baseUrl}/Solid%20Surface/bendable/vivanta/vv3.jpg`,
      `${baseUrl}/Solid%20Surface/bendable/vivanta/vv4.jpg`,
      `${baseUrl}/Solid%20Surface/bendable/vivanta/vv5.jpg`
    ],
    'staron-solid-surface': [
      `${baseUrl}/Solid%20Surface/bendable/staron/st1.jpg`,
      `${baseUrl}/Solid%20Surface/bendable/staron/st2.jpg`,
      `${baseUrl}/Solid%20Surface/bendable/staron/st3.jpg`,
      `${baseUrl}/Solid%20Surface/bendable/staron/st4.jpg`,
      `${baseUrl}/Solid%20Surface/bendable/staron/st5.jpg`
    ],
    'dupont-solid-surface': [
      `${baseUrl}/Solid%20Surface/bendable/dupont/dupont1.jpg`,
      `${baseUrl}/Solid%20Surface/bendable/dupont/dupont2.jpg`,
      `${baseUrl}/Solid%20Surface/bendable/dupont/dupont3.jpg`,
      `${baseUrl}/Solid%20Surface/bendable/dupont/dupont4.jpg`,
      `${baseUrl}/Solid%20Surface/bendable/dupont/dupont5.jpg`
    ],
    'tristone-solid-surface': [
      `${baseUrl}/Solid%20Surface/bendable/tristone/tr1.jpg`,
      `${baseUrl}/Solid%20Surface/bendable/tristone/tr2.jpg`,
      `${baseUrl}/Solid%20Surface/bendable/tristone/tr3.jpg`,
      `${baseUrl}/Solid%20Surface/bendable/tristone/tr4.jpg`,
      `${baseUrl}/Solid%20Surface/bendable/tristone/tr5.jpg`
    ],
    'rehau-solid-surface': [
      `${baseUrl}/Solid%20Surface/bendable/rehau/r1.jpg`,
      `${baseUrl}/Solid%20Surface/bendable/rehau/r2.jpg`,
      `${baseUrl}/Solid%20Surface/bendable/rehau/r3.jpg`,
      `${baseUrl}/Solid%20Surface/bendable/rehau/r4.jpg`,
      `${baseUrl}/Solid%20Surface/bendable/rehau/r5.avif`
    ],
    'riya-solid-surface': [
      `${baseUrl}/Solid%20Surface/bendable/riya/ry1.jpg`,
      `${baseUrl}/Solid%20Surface/bendable/riya/ry2.jpg`,
      `${baseUrl}/Solid%20Surface/bendable/riya/ry3.jpg`,
      `${baseUrl}/Solid%20Surface/bendable/riya/ry4.jpg`,
      `${baseUrl}/Solid%20Surface/bendable/riya/ry5.jpg`
    ],
    'lx-hausys-solid-surface': [
      `${baseUrl}/Solid%20Surface/bendable/LX/lx1.jpg`,
      `${baseUrl}/Solid%20Surface/bendable/LX/lx2.jpg`,
      `${baseUrl}/Solid%20Surface/bendable/LX/lx3.jpg`,
      `${baseUrl}/Solid%20Surface/bendable/LX/lx4.jpg`,
      `${baseUrl}/Solid%20Surface/bendable/LX/lx5.jpg`
    ],
    'lx-hausys': [
      `${baseUrl}/Solid%20Surface/bendable/LX/lx1.jpg`,
      `${baseUrl}/Solid%20Surface/bendable/LX/lx2.jpg`,
      `${baseUrl}/Solid%20Surface/bendable/LX/lx3.jpg`,
      `${baseUrl}/Solid%20Surface/bendable/LX/lx4.jpg`,
      `${baseUrl}/Solid%20Surface/bendable/LX/lx5.jpg`
    ],
    'lx-hausys-solid-surface': [
      `${baseUrl}/Solid%20Surface/bendable/LX/lx1.jpg`,
      `${baseUrl}/Solid%20Surface/bendable/LX/lx2.jpg`,
      `${baseUrl}/Solid%20Surface/bendable/LX/lx3.jpg`,
      `${baseUrl}/Solid%20Surface/bendable/LX/lx4.jpg`,
      `${baseUrl}/Solid%20Surface/bendable/LX/lx5.jpg`
    ],
    'dunes-solid-surface': [
      `${baseUrl}/Solid%20Surface/bendable/dunes/d1.jpg`,
      `${baseUrl}/Solid%20Surface/bendable/dunes/d2.jpg`,
      `${baseUrl}/Solid%20Surface/bendable/dunes/d3.jpg`,
      `${baseUrl}/Solid%20Surface/bendable/dunes/d4.jpg`,
      `${baseUrl}/Solid%20Surface/bendable/dunes/d5.jpg`
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
    '/sports-flooring/gym-flooring': [
      'https://ik.imagekit.io/clickinteriors/tr:w-600,h-450,c-fill,q-85,f-auto/products/wallpaper/wall1.jpg',
      'https://ik.imagekit.io/clickinteriors/tr:w-600,h-450,c-fill,q-85,f-auto/products/wallpaper/wall2.jpg',
      'https://ik.imagekit.io/clickinteriors/tr:w-600,h-450,c-fill,q-85,f-auto/products/wallpaper/wall3.jpg',
      'https://ik.imagekit.io/clickinteriors/tr:w-600,h-450,c-fill,q-85,f-auto/products/wallpaper/wall4.jpg',
      'https://ik.imagekit.io/clickinteriors/tr:w-600,h-450,c-fill,q-85,f-auto/products/wallpaper/wall5.jpg'
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
    '/sports-flooring/rubber-flooring': [
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
    '/sports-flooring/artificial-grass': [
      `${baseUrl}/artificial%20grass/af1.jpg`,
      `${baseUrl}/artificial%20grass/af2.jpg`,
      `${baseUrl}/artificial%20grass/af3.jpg`,
      `${baseUrl}/artificial%20grass/af4.jpg`,
      `${baseUrl}/artificial%20grass/af5.jpg`
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
  
  console.log('🔍 DEBUG: Available paths:', Object.keys(galleryMap));
  const images = galleryMap[productPath] || [`${baseUrl}/placeholder.jpg`];
  console.log('🔍 DEBUG: Returning images:', images);
  console.log('🔍 DEBUG: Base URL used:', baseUrl);
  console.log('🔍 DEBUG: First image URL:', images[0]);
  return images;
};
