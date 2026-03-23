// Simple image hosting fix
export const getProductImageUrl = (imagePath) => {
  if (!imagePath) return '/placeholder.jpg';
  
  // For now, return a working placeholder or known good image
  const workingImages = {
    // Use some working images as examples
    'flooring/engineered-wooden-flooring': 'https://via.placeholder.com/400x300/8B5CF6/FFFFFF?text=Engineered+Wooden+Flooring',
    'wallpaper': 'https://via.placeholder.com/400x300/FF6B6B/FFFFFF?text=Wallpaper+Gallery',
    'default': 'https://via.placeholder.com/400x300/4A90E2/FFFFFF?text=Product+Image'
  };
  
  // Return working placeholder for now
  return workingImages[imagePath] || workingImages.default;
};
