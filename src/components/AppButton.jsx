import classNames from 'classnames';
import { forwardRef } from 'react';

const AppButton = forwardRef(({ inverse, onClick, label, full = false}, ref) => {
  return (
    <button
      ref={ref}
      className={classNames('uppercase px-3 py-1 text-sm', {
        'w-full': full,
        'bg-dodger-blue text-soft-white': !inverse,
        'bg-transparent text-dodger-blue border border-dodger-blue':
          inverse,
      })}
      onClick={onClick}
    >
      {label}
    </button>
  );
});

/* function AppButton({ label, inverse, onClick = () => {} }) {
  return (
    <button
      className={classNames('uppercase px-3 py-1 text-sm', {
        'bg-dodger-blue text-soft-white': !inverse,
        'bg-transparent text-dodger-blue border border-dodger-blue': inverse,
      })}
      onClick={onClick}
    >
      {label}
    </button>
  );
} */

export default AppButton;
