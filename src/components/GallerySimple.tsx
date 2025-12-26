import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const GallerySimple = () => {
  const workImages = [
    '/images/works/attachment.jpeg',
    '/images/works/attachment (1).jpeg',
    '/images/works/attachment (2).jpeg',
    '/images/works/attachment (3).jpeg',
    '/images/works/attachment (4).jpeg',
    '/images/works/attachment (5).jpeg',
    '/images/works/attachment (6).jpeg',
    '/images/works/attachment (7).jpeg',
    '/images/works/attachment (8).jpeg',
    '/images/works/attachment (9).jpeg',
    '/images/works/attachment (10).jpeg',
    '/images/works/attachment (11).jpeg',
  ];

  return (
    <section id="gallery" className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Наши работы
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Примеры выполненных работ нашими специалистами
          </p>
        </div>
        
        <div className="pb-16">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            className="gallery-swiper"
          >
            {workImages.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="aspect-square bg-gray-700 rounded-lg overflow-hidden">
                  <img
                    src={image}
                    alt={`Работа ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default GallerySimple;