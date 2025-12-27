// Утилиты для работы с изображениями

export interface WorkImage {
  id: number;
  src: string;
  alt: string;
  thumbnail?: string;
}

// Функция для генерации массива изображений работ из папки public/images/works
export const generateWorkImages = (): WorkImage[] => {
  const images: WorkImage[] = [
    {
      id: 1,
      src: '/images/works/attachment-0.jpeg',
      alt: 'Работа 1',
      thumbnail: '/images/works/attachment-0.jpeg'
    },
    {
      id: 2,
      src: '/images/works/attachment-1.jpeg',
      alt: 'Работа 2',
      thumbnail: '/images/works/attachment-1.jpeg'
    },
    {
      id: 3,
      src: '/images/works/attachment-2.jpeg',
      alt: 'Работа 3',
      thumbnail: '/images/works/attachment-2.jpeg'
    },
    {
      id: 4,
      src: '/images/works/attachment-3.jpeg',
      alt: 'Работа 4',
      thumbnail: '/images/works/attachment-3.jpeg'
    },
    {
      id: 5,
      src: '/images/works/attachment-4.jpeg',
      alt: 'Работа 5',
      thumbnail: '/images/works/attachment-4.jpeg'
    },
    {
      id: 6,
      src: '/images/works/attachment-5.jpeg',
      alt: 'Работа 6',
      thumbnail: '/images/works/attachment-5.jpeg'
    },
    {
      id: 7,
      src: '/images/works/attachment-6.jpeg',
      alt: 'Работа 7',
      thumbnail: '/images/works/attachment-6.jpeg'
    },
    {
      id: 8,
      src: '/images/works/attachment-7.jpeg',
      alt: 'Работа 8',
      thumbnail: '/images/works/attachment-7.jpeg'
    },
    {
      id: 9,
      src: '/images/works/attachment-8.jpeg',
      alt: 'Работа 9',
      thumbnail: '/images/works/attachment-8.jpeg'
    },
    {
      id: 10,
      src: '/images/works/attachment-9.jpeg',
      alt: 'Работа 10',
      thumbnail: '/images/works/attachment-9.jpeg'
    },
    {
      id: 11,
      src: '/images/works/attachment-10.jpeg',
      alt: 'Работа 11',
      thumbnail: '/images/works/attachment-10.jpeg'
    },
    {
      id: 12,
      src: '/images/works/attachment-11.jpeg',
      alt: 'Работа 12',
      thumbnail: '/images/works/attachment-11.jpeg'
    }
  ];
  
  return images;
};

// Функция для проверки существования изображения
export const checkImageExists = (url: string): Promise<boolean> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
  });
};

// Функция для оптимизации загрузки изображений
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};