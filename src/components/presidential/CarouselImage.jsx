function CarouselImage({ id }) {
  return (
    <div className="aspect-w-1 aspect-h-1 flex-shrink-0 w-full snap-start" id={`slide-${id}`}>
      <img src={`/carousel/${id}.jpg`} alt="" />
    </div>
  );
}

export default CarouselImage;
