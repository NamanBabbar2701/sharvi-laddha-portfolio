import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import Lightbox from './Lightbox'

const ImageCarousel = ({ images }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxImage, setLightboxImage] = useState(null)

  const handleImageClick = (image) => {
    setLightboxImage(image)
    setLightboxOpen(true)
  }
  return (
    <div className="relative mb-10 max-w-md mx-auto">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
        navigation={true}
        className="instagram-carousel"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-surface shadow-soft cursor-pointer"
              onClick={() => handleImageClick(image)}
            >
              <img
                src={image}
                alt={`Carousel image ${index + 1}`}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Custom styles for Swiper */}
      <style>{`
        .instagram-carousel .swiper-button-next,
        .instagram-carousel .swiper-button-prev {
          color: rgba(255, 255, 255, 0.7);
          background: rgba(0, 0, 0, 0.3);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          opacity: 0;
          transition: opacity 0.3s ease, background 0.3s ease;
        }
        
        .instagram-carousel .swiper-button-next:after,
        .instagram-carousel .swiper-button-prev:after {
          font-size: 20px;
          font-weight: bold;
        }
        
        .instagram-carousel:hover .swiper-button-next,
        .instagram-carousel:hover .swiper-button-prev {
          opacity: 1;
        }
        
        .instagram-carousel .swiper-button-next:hover,
        .instagram-carousel .swiper-button-prev:hover {
          background: rgba(0, 0, 0, 0.5);
          color: rgba(255, 255, 255, 0.9);
        }
        
        .instagram-carousel .swiper-pagination {
          bottom: 10px;
        }
        
        .instagram-carousel .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.5);
          opacity: 1;
          width: 8px;
          height: 8px;
        }
        
        .instagram-carousel .swiper-pagination-bullet-active {
          background: #D9A773;
        }
        
        @media (max-width: 768px) {
          .instagram-carousel .swiper-button-next,
          .instagram-carousel .swiper-button-prev {
            opacity: 0.6;
            width: 36px;
            height: 36px;
          }
          
          .instagram-carousel .swiper-button-next:after,
          .instagram-carousel .swiper-button-prev:after {
            font-size: 16px;
          }
        }
      `}</style>
      <Lightbox
        isOpen={lightboxOpen}
        src={lightboxImage}
        onClose={() => setLightboxOpen(false)}
      />
    </div>
  )
}

export default ImageCarousel

