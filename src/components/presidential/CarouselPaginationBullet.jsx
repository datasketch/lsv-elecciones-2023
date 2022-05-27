import classNames from 'classnames';

function CarouselPaginationBullet({ position, active, onClick }) {
  return (
    <button
      type="button"
      className={classNames('w-3 h-3 border rounded-full', {
        'bg-dodger-blue border-dodger-blue': active === position,
        'border-dim-gray': active !== position,
      })}
      aria-label={position}
      onClick={onClick}
    />
  );
}

export default CarouselPaginationBullet;
