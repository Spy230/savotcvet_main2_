import { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  images: Array<{ id: number; src: string; alt: string }>;
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const Lightbox = ({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          onPrev();
          break;
        case 'ArrowRight':
          onNext();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    
    // Блокируем скролл страницы когда lightbox открыт
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen) return null;

  const currentImage = images[currentIndex];

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Кнопка закрытия */}
      <button
        className="absolute top-4 right-4 z-10 w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors"
        onClick={onClose}
        aria-label="Закрыть"
      >
        <X className="w-6 h-6 text-white" />
      </button>

      {/* Кнопка "Назад" */}
      {images.length > 1 && (
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          aria-label="Предыдущее изображение"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
      )}

      {/* Кнопка "Вперед" */}
      {images.length > 1 && (
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          aria-label="Следующее изображение"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      )}

      {/* Изображение */}
      <div 
        className="max-w-[90vw] max-h-[90vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={currentImage.src}
          alt={currentImage.alt}
          className="max-w-full max-h-full object-contain"
        />
      </div>

      {/* Индикатор позиции */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white bg-opacity-20 rounded-full px-4 py-2">
          <span className="text-white text-sm">
            {currentIndex + 1} / {images.length}
          </span>
        </div>
      )}
    </div>
  );
};

export default Lightbox;