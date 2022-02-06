import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { toggleView } from '../features/view/view-slice';

function FilterView({ grid, onClick }) {
  const dispatch = useDispatch();
  const baseClass =
    'border border-dodger-blue inline-flex items-center justify-center flex-shrink-0 py-2 px-4';
  const listViewClass = classNames(baseClass, {
    'text-soft-white': !grid,
    'bg-dodger-blue': !grid,
    'text-dodger-blue': grid,
  });
  const gridViewClass = classNames(baseClass, {
    'text-soft-white': grid,
    'bg-dodger-blue': grid,
    'text-dodger-blue': !grid,
  });
  return (
    <>
      <button
        className={listViewClass}
        aria-label="Ver lista"
        title="Ver lista"
        onClick={() => dispatch(toggleView(false))}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          className="fill-current"
        >
          <g>
            <path d="M4 8h8v2H4z" />
            <path d="M4 4h8v2H4z" />
            <path d="M4 0h8v2H4z" />
            <path d="M0 8h2v2H0z" />
            <path d="M0 4h2v2H0z" />
            <path d="M0 0h2v2H0z" />
          </g>
        </svg>
      </button>
      <button
        className={gridViewClass}
        aria-label="Ver mosaico"
        title="Ver mosaico"
        onClick={() => dispatch(toggleView(true))}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          className="fill-current"
        >
          <g>
            <path d="M0 8h2v2H0z" />
            <path d="M4 8h2v2H4z" />
            <path d="M8 8h2v2H8z" />
            <path d="M0 4h2v2H0z" />
            <path d="M4 4h2v2H4z" />
            <path d="M8 4h2v2H8z" />
            <path d="M0 0h2v2H0z" />
            <path d="M4 0h2v2H4z" />
            <path d="M8 0h2v2H8z" />
          </g>
        </svg>
      </button>
    </>
  );
}

export default FilterView;
