import fs from 'fs';
import path from 'path';

/**
 * Automatically loads all images from a product folder
 * @param {string} productPath - The product path (e.g., 'Flooring/laminated')
 * @returns {Array} Array of image objects with src and alt text
 */
export async function loadProductImages(productPath) {
  try {
    // Convert URL path to filesystem path
    const folderPath = path.join(process.cwd(), 'public', 'products', productPath);
    
    // Check if folder exists
    if (!fs.existsSync(folderPath)) {
      console.warn(`Product folder not found: ${folderPath}`);
      return [];
    }
    
    // Read all files in the folder
    const files = fs.readdirSync(folderPath);
    
    // Filter for supported image formats
    const supportedFormats = ['.jpg', '.jpeg', '.png', '.webp', '.avif'];
    const imageFiles = files.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return supportedFormats.includes(ext);
    });
    
    // Sort files alphabetically for consistent ordering
    imageFiles.sort();
    
    // Create image objects
    const images = imageFiles.map((file, index) => {
      const fileName = path.parse(file).name;
      const altText = fileName.replace(/[-_]/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      
      return {
        src: `/products/${productPath}/${file}`,
        alt: altText || `Product Image ${index + 1}`
      };
    });
    
    return images;
  } catch (error) {
    console.error('Error loading product images:', error);
    return [];
  }
}

/**
 * Converts a URL path to a product folder path
 * @param {string} urlPath - The URL path (e.g., '/flooring/laminated')
 * @returns {string} The product folder path (e.g., 'Flooring/laminated')
 */
export function urlToProductPath(urlPath) {
  // Remove leading slash and convert to proper folder structure
  const cleanPath = urlPath.replace(/^\//, '');
  
  // Convert URL path to folder path (capitalize first letter of each segment)
  const segments = cleanPath.split('/');
  const folderSegments = segments.map(segment => {
    // Handle special cases
    if (segment.toLowerCase() === 'sports-flooring') {
      return 'sports flooring';
    }
    // Capitalize first letter
    return segment.charAt(0).toUpperCase() + segment.slice(1);
  });
  
  return folderSegments.join('/');
}

/**
 * Get product images based on current page path
 * @param {string} currentPath - Current page path
 * @returns {Array} Array of image objects
 */
export async function getProductImages(currentPath) {
  const productPath = urlToProductPath(currentPath);
  return await loadProductImages(productPath);
}
