import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect } from 'react';

interface LightboxImage {
  id: number;
  src: string;
  alt: string;
}

interface LightboxProps {
  images: LightboxImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const Lightbox = ({ images, currentIndex, isOpen, onClose, onNext, onPrev }: LightboxProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen) return null;

  const currentImage = images[currentIndex];

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-red-500 transition-colors z-10"
        aria-label="Закрыть"
      >
        <X size={32} />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-red-500 transition-colors z-10"
        aria-label="Предыдущее изображение"
      >
        <ChevronLeft size={48} />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-red-500 transition-colors z-10"
        aria-label="Следующее изображение"
      >
        <ChevronRight size={48} />
      </button>

      <div
        className="max-w-7xl max-h-[90vh] p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={currentImage.src}
          alt={currentImage.alt}
          className="max-w-full max-h-[90vh] object-contain"
        />
        <div className="text-center text-white mt-4">
          <p className="text-sm">
            {currentIndex + 1} / {images.length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
