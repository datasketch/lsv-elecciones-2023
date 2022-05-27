import { useRef, useState } from 'react';
import CarouselImage from './CarouselImage';
import CarouselPagination from './CarouselPagination';

function Carousel() {
  const [active, setActive] = useState(1);
  const sliderRef = useRef(null);
  const goToSlide = (e) => {
    const label = e.target.ariaLabel;
    setActive(+label);
    const slide = document.getElementById(`slide-${label}`);
    sliderRef.current.scrollTo(slide.offsetLeft, 0);
  };
  return (
    <div className="max-w-sm mx-auto py-12 overflow-hidden">
      <div className="flex space-x-4 overflow-x-auto snap-x snap-mandatory scroll-smooth relative" ref={sliderRef}>
        <CarouselImage id={1} />
        <CarouselImage id={2} />
        <CarouselImage id={3} />
        <CarouselImage id={4} />
        <CarouselImage id={5} />
        <CarouselImage id={6} />
        <CarouselImage id={7} />
        <CarouselImage id={8} />
        <CarouselImage id={9} />
        <CarouselImage id={10} />
        <CarouselImage id={11} />
        <CarouselImage id={12} />
        <CarouselImage id={13} />
        <CarouselImage id={14} />
        <CarouselImage id={15} />
        <CarouselImage id={16} />
      </div>
      <div className="flex justify-center space-x-1 mt-4">
        <CarouselPagination
          active={active}
          onClick={goToSlide}
          bullets={16}
        />
      </div>
    </div>
  );
}

export default Carousel;
