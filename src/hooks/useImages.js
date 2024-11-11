import { useState, useEffect } from 'react';
import { getImages, addImage } from '../lib/db';

export function useImages() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchImages();
  }, []);

  async function fetchImages() {
    try {
      const data = await getImages();
      setImages(data);
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      setLoading(false);
    }
  }

  async function uploadImage(file, metadata) {
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `/uploads/${fileName}`;

      // Upload file to server (implement file upload logic)
      const formData = new FormData();
      formData.append('file', file);
      
      const uploadResponse = await fetch('/api/upload', {
        method: 'POST',
        body: formData
      });

      if (!uploadResponse.ok) throw new Error('Failed to upload file');

      // Add image record to database
      const result = await addImage({
        ...metadata,
        filePath
      });

      if (result.success) {
        setImages(prev => [result.data, ...prev]);
      }

      return result;
    } catch (error) {
      console.error('Error uploading image:', error);
      return { success: false, error };
    }
  }

  return { images, loading, uploadImage };
}