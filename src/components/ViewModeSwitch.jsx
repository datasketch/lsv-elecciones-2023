import classNames from 'classnames';

function ViewModeSwitch({ grid, handler }) {
  const baseClass =
    'px-2 py-1 rounded-2xl text-gray-500 hover:bg-blue-100 hover:text-blue-800';
  const listViewClass = classNames(baseClass, {
    'text-blue-800': !grid,
    'bg-blue-100': !grid,
  });
  const gridViewClass = classNames(baseClass, {
    'text-blue-800': grid,
    'bg-blue-100': grid,
  });
  return (
    <div className="inline-block">
      <button
        className={listViewClass}
        aria-label="Ver lista"
        title="Ver lista"
        onClick={() => handler(false)}
      >
        Lista
      </button>
      <button
        className={gridViewClass}
        aria-label="Ver mosaico"
        title="Ver mosaico"
        onClick={() => handler(true)}
      >
        Mosaico
      </button>
    </div>
  );
}

export default ViewModeSwitch;
