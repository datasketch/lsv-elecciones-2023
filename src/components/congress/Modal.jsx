import classNames from 'classnames';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {
  selectComparisonModalWindow,
  selectMainModalWindow,
  setSecondaryCandidate,
  toggleMainModalWindow,
} from '../../features/modal/modal-slice';
import CandidateCardExpanded from './CandidateCardExpanded';
import CandidateCardModal from '../CandidateCardModal';
import ComparisonModal from '../ComparisonModal';

function Modal() {
  const candidates = useSelector((state) => state.candidates.filtered);
  const showMainModalWindow = useSelector(selectMainModalWindow);
  const showComparisonModalWindow = useSelector(selectComparisonModalWindow);
  const dispatch = useDispatch();

  useEffect(() => {
    const evtHandler = (e) => {
      if (e.key === 'Escape' || e.keyCode === 27) {
        dispatch(toggleMainModalWindow());
      }
    };
    if (showMainModalWindow) {
      document.addEventListener('keyup', evtHandler);
    }
    return () => document.removeEventListener('keyup', evtHandler);
  }, [showMainModalWindow, dispatch]);

  const handleClick = (e) => {
    if (e.target === e.currentTarget || e.target.closest('[datadismiss]')) {
      dispatch(toggleMainModalWindow());
    }
  };

  return (
    <div
      className={classNames(
        'fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-20 lg:pr-86 lg:py-8 lg:pl-6',
        {
          'py-8 px-6': !showComparisonModalWindow,
        }
      )}
      onClick={handleClick}
    >
      {showComparisonModalWindow ? <ComparisonModal /> : <CandidateCardModal />}
      <aside className="hidden bg-white absolute top-0 right-0 max-h-full w-80 overflow-auto lg:block">
        {candidates.map((candidate) => (
          <CandidateCardExpanded
            key={candidate.id}
            candidate={candidate}
            onClick={() => dispatch(setSecondaryCandidate(candidate))}
          />
        ))}
      </aside>
    </div>
  );
}

export default Modal;
