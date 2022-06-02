import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Carousel() {
  return (
    <div className="max-w-lg mx-auto py-12 overflow-hidden">
      <Slider dots>
        <div className="aspect-w-1 aspect-h-1">
          <img src="/carousel/1.png" alt="" />
        </div>
        <div className="aspect-w-1 aspect-h-1">
          <img src="/carousel/2.png" alt="" />
        </div>
        <div className="aspect-w-1 aspect-h-1">
          <img src="/carousel/3.png" alt="" />
        </div>
        <div className="aspect-w-1 aspect-h-1">
          <img src="/carousel/4.png" alt="" />
        </div>
        <div className="aspect-w-1 aspect-h-1">
          <img src="/carousel/5.png" alt="" />
        </div>
        <div className="aspect-w-1 aspect-h-1">
          <img src="/carousel/6.png" alt="" />
        </div>
        <div className="aspect-w-1 aspect-h-1">
          <img src="/carousel/7.png" alt="" />
        </div>
        <div className="aspect-w-1 aspect-h-1">
          <img src="/carousel/8.png" alt="" />
        </div>
        <div className="aspect-w-1 aspect-h-1">
          <img src="/carousel/9.png" alt="" />
        </div>
        <div className="aspect-w-1 aspect-h-1">
          <img src="/carousel/10.png" alt="" />
        </div>
        <div className="aspect-w-1 aspect-h-1">
          <img src="/carousel/11.png" alt="" />
        </div>
        <div className="aspect-w-1 aspect-h-1">
          <img src="/carousel/12.png" alt="" />
        </div>
        <div className="aspect-w-1 aspect-h-1">
          <img src="/carousel/13.png" alt="" />
        </div>
        <div className="aspect-w-1 aspect-h-1">
          <img src="/carousel/14.png" alt="" />
        </div>
        <div className="aspect-w-1 aspect-h-1">
          <img src="/carousel/15.png" alt="" />
        </div>
        <div className="aspect-w-1 aspect-h-1">
          <img src="/carousel/16.png" alt="" />
        </div>
        <div className="aspect-w-1 aspect-h-1">
          <img src="/carousel/17.png" alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
