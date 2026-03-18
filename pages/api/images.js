import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const { path: folderPath } = req.query;

  if (!folderPath) {
    return res.status(400).json({ error: 'Path parameter is required' });
  }

  try {
    // Construct the full path to the images folder
    const fullPath = path.join(process.cwd(), 'public', 'products', folderPath);
    
    // Check if the directory exists
    if (!fs.existsSync(fullPath)) {
      return res.status(404).json({ error: 'Directory not found' });
    }

    // Read the directory
    const files = fs.readdirSync(fullPath);
    
    // Filter for supported image formats
    const supportedFormats = ['jpg', 'jpeg', 'png', 'webp', 'avif'];
    const imageFiles = files.filter(file => {
      const ext = file.split('.').pop().toLowerCase();
      return supportedFormats.includes(ext);
    });

    // Return the list of image files with their full paths
    const images = imageFiles.map(file => `/products/${folderPath}/${file}`);
    
    res.status(200).json({ images });
  } catch (error) {
    console.error('Error reading directory:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
