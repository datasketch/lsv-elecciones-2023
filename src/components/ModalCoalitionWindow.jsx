/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectSelectedCoalition,
  selectShowCoalitionModalWindow,
  toggleCoalitionModalWindow,
} from '../features/modal/modal-slice';

function ModalCoalitionWindow() {
  const dispatch = useDispatch();
  const showCoalitionModalWindow = useSelector(selectShowCoalitionModalWindow);
  const selectedCoalition = useSelector(selectSelectedCoalition);

  useEffect(() => {
    const evtHandler = (e) => {
      if (e.key === 'Escape' || e.keyCode === 27) {
        dispatch(toggleCoalitionModalWindow());
      }
    };
    if (showCoalitionModalWindow) {
      document.addEventListener('keyup', evtHandler);
    }
    return () => document.removeEventListener('keyup', evtHandler);
  }, [showCoalitionModalWindow, dispatch]);

  const handleClick = (e) => {
    if (e.target === e.currentTarget || e.target.closest('[datadismiss]')) {
      dispatch(toggleCoalitionModalWindow());
    }
  };
  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-20 p-6"
      onClick={handleClick}
      role="dialog"
    >
      <div className="bg-jet w-96 max-w-full max-h-full p-6 text-soft-white overflow-auto relative">
        <button
          className="absolute top-3 right-3 stroke-current fill-current"
          datadismiss="true"
          type="button"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14">
            <path d="M12.519 14-.003 1.478 1.475 0l12.522 12.522Z" />
            <path d="M14 1.478 1.478 14 0 12.522 12.522 0Z" />
          </svg>
        </button>
        <p className="text-bone font-martin text-center uppercase text-5xl lg:text-6xl">
          {selectedCoalition.label}
        </p>
        <p className="mt-4">{selectedCoalition.description}</p>
      </div>
    </div>
  );
}

export default ModalCoalitionWindow;
