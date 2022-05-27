import CarouselPaginationBullet from './CarouselPaginationBullet';

function CarouselPagination({ active, bullets, onClick }) {
  return (
    <>
      {Array.from(Array(bullets)).map((pos, index) => index + 1).map((bullet) => (
        <CarouselPaginationBullet
          key={bullet}
          active={active}
          position={bullet}
          onClick={onClick}
        />
      ))}
    </>
  );
}

export default CarouselPagination;
