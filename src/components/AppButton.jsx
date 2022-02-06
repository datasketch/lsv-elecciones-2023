import classNames from 'classnames';

function AppButton({ label, inverse, onClick = () => {} }) {
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
}

export default AppButton;
