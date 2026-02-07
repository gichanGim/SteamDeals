import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ImageCarouselProps {
  images: string[];
}

export function ImageCarousel({ images }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full aspect-video bg-[#1b2838] rounded-lg overflow-hidden group">
      {/* Main Image */}
      <div className="relative w-full h-full">
        <ImageWithFallback
          src={images[currentIndex]}
          alt={`스크린샷 ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />
        
        {/* Gradient Overlays for Arrows */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#1b2838]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#1b2838]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#1b2838]/70 hover:bg-[#1b2838]/90 backdrop-blur-sm text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all hover:scale-110"
        aria-label="이전 이미지"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#1b2838]/70 hover:bg-[#1b2838]/90 backdrop-blur-sm text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all hover:scale-110"
        aria-label="다음 이미지"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-[#66c0f4] w-6'
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`${index + 1}번째 이미지로 이동`}
          />
        ))}
      </div>

      {/* Image Counter */}
      <div className="absolute top-4 right-4 bg-[#1b2838]/80 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}
