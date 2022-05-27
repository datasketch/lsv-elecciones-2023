import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Carousel() {
  return (
    <div className="max-w-lg mx-auto py-12 overflow-hidden">
      <Slider dots>
        <div className="aspect-w-1 aspect-h-1">
          <img src="/carousel/1.jpg" alt="" />
        </div>
        <div className="aspect-w-1 aspect-h-1">
          <img src="/carousel/2.jpg" alt="" />
        </div>
        <div className="aspect-w-1 aspect-h-1">
          <img src="/carousel/3.jpg" alt="" />
        </div>
        <div className="aspect-w-1 aspect-h-1">
          <img src="/carousel/4.jpg" alt="" />
        </div>
        <div className="aspect-w-1 aspect-h-1">
          <img src="/carousel/5.jpg" alt="" />
        </div>
        <div className="aspect-w-1 aspect-h-1">
          <img src="/carousel/6.jpg" alt="" />
        </div>
        <div className="aspect-w-1 aspect-h-1">
          <img src="/carousel/7.jpg" alt="" />
        </div>
        <div className="aspect-w-1 aspect-h-1">
          <img src="/carousel/8.jpg" alt="" />
        </div>
        <div className="aspect-w-1 aspect-h-1">
          <img src="/carousel/9.jpg" alt="" />
        </div>
        <div className="aspect-w-1 aspect-h-1">
          <img src="/carousel/10.jpg" alt="" />
        </div>
        <div className="aspect-w-1 aspect-h-1">
          <img src="/carousel/11.jpg" alt="" />
        </div>
        <div className="aspect-w-1 aspect-h-1">
          <img src="/carousel/12.jpg" alt="" />
        </div>
        <div className="aspect-w-1 aspect-h-1">
          <img src="/carousel/13.jpg" alt="" />
        </div>
        <div className="aspect-w-1 aspect-h-1">
          <img src="/carousel/14.jpg" alt="" />
        </div>
        <div className="aspect-w-1 aspect-h-1">
          <img src="/carousel/15.jpg" alt="" />
        </div>
        <div className="aspect-w-1 aspect-h-1">
          <img src="/carousel/16.jpg" alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
