import classNames from 'classnames';
import { forwardRef } from 'react';

const AppButton = forwardRef(
  ({
    inverse, onClick, label, full = false, type = 'button',
  }, ref) => (
    <button
      ref={ref}
      className={classNames('uppercase px-3 py-1 text-sm', {
        'w-full': full,
        'bg-dodger-blue text-soft-white': !inverse,
        'bg-transparent text-dodger-blue border border-dodger-blue': inverse,
      })}
      onClick={onClick}
      // eslint-disable-next-line react/button-has-type
      type={type}
    >
      {label}
    </button>
  ),
);

export default AppButton;
