import { useState, useEffect } from 'react';

interface UseImagePreloaderProps {
  images: string[];
  preloadCount?: number;
}

export const useImagePreloader = ({ images, preloadCount = 3 }: UseImagePreloaderProps) => {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const preloadImages = async () => {
      const imagesToPreload = images.slice(0, preloadCount);
      
      const loadPromises = imagesToPreload.map((src) => {
        return new Promise<string>((resolve, reject) => {
          const img = new Image();
          img.onload = () => resolve(src);
          img.onerror = () => reject(src);
          img.src = src;
        });
      });

      try {
        const loaded = await Promise.allSettled(loadPromises);
        const successfullyLoaded = loaded
          .filter((result): result is PromiseFulfilledResult<string> => result.status === 'fulfilled')
          .map(result => result.value);
        
        setLoadedImages(new Set(successfullyLoaded));
      } catch (error) {
        console.warn('Some images failed to preload:', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (images.length > 0) {
      preloadImages();
    }
  }, [images, preloadCount]);

  const preloadImage = (src: string) => {
    if (loadedImages.has(src)) return;

    const img = new Image();
    img.onload = () => {
      setLoadedImages(prev => new Set([...prev, src]));
    };
    img.src = src;
  };

  return {
    loadedImages,
    isLoading,
    preloadImage,
    isImageLoaded: (src: string) => loadedImages.has(src),
  };
};