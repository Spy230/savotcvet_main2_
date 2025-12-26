import { useState, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Lightbox from './Lightbox';
import { generateWorkImages, type WorkImage } from '../utils/imageUtils';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Получаем изображения работ
  const workImages: WorkImage[] = generateWorkImages();

  const handleImageClick = useCallback((imageIndex: number) => {
    setCurrentImageIndex(imageIndex);
    setLightboxOpen(true);
  }, []);

  const handleLightboxClose = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const handleLightboxNext = useCallback(() => {
    setCurrentImageIndex((prev) => 
      prev === workImages.length - 1 ? 0 : prev + 1
    );
  }, [workImages.length]);

  const handleLightboxPrev = useCallback(() => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? workImages.length - 1 : prev - 1
    );
  }, [workImages.length]);

  return (
    <section id="gallery" className="py-16 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок и подзаголовок */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Наши работы
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Примеры выполненных работ нашими специалистами
          </p>
        </div>

        {/* Карусель */}
        <div className="relative px-12">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            centeredSlides={true}
            navigation={{
              prevEl: '.swiper-button-prev-custom',
              nextEl: '.swiper-button-next-custom',
            }}
            breakpoints={{
              640: {
                slidesPerView: 1.2,
                centeredSlides: true,
              },
              768: {
                slidesPerView: 2,
                centeredSlides: false,
              },
              1024: {
                slidesPerView: 3,
                centeredSlides: false,
              },
              1280: {
                slidesPerView: 4,
                centeredSlides: false,
              },
            }}
            className="our-works-swiper"
          >
            {workImages.map((image, index) => (
              <SwiperSlide key={image.id}>
                <div 
                  className="aspect-square overflow-hidden rounded-lg cursor-pointer group"
                  onClick={() => handleImageClick(index)}
                >
                  <img
                    src={image.thumbnail || image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Кастомные кнопки навигации */}
          <button 
            className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
            aria-label="Предыдущий слайд"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          
          <button 
            className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
            aria-label="Следующий слайд"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Lightbox */}
        <Lightbox
          images={workImages}
          currentIndex={currentImageIndex}
          isOpen={lightboxOpen}
          onClose={handleLightboxClose}
          onNext={handleLightboxNext}
          onPrev={handleLightboxPrev}
        />
      </div>
    </section>
  );
};

export default Gallery;