/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectComparisonModalWindow,
  selectMainCandidate,
  selectMainModalWindow,
  setSecondaryCandidate,
  toggleMainModalWindow,
} from '../../features/modal/modal-slice';
import CandidateCardExpanded from './CandidateCardExpanded';
import CandidateCardModal from '../CandidateCardModal';
import ComparisonModal from '../ComparisonModal';
import { selectActiveTab } from '../../features/nav/nav-slice';

function Modal() {
  const congressCandidates = useSelector((state) => state.candidates.filtered);
  const presidentialCandidates = useSelector((state) => state.presidential.all);
  const showMainModalWindow = useSelector(selectMainModalWindow);
  const showComparisonModalWindow = useSelector(selectComparisonModalWindow);
  const activeTab = useSelector(selectActiveTab);
  const [candidates, setCandidates] = useState([]);
  const dispatch = useDispatch();
  const mainCandidate = useSelector(selectMainCandidate);

  useEffect(() => {
    let selected;
    if (activeTab === 'congreso') {
      selected = congressCandidates
        .filter((candidate) => candidate.pending === mainCandidate.pending
          && candidate.id !== mainCandidate.id);
    } else {
      selected = presidentialCandidates;
    }
    setCandidates(selected);
  }, [activeTab, congressCandidates, presidentialCandidates, setCandidates]);

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
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      className={classNames(
        'fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-20 lg:pr-86 lg:py-8 lg:pl-6',
        {
          'py-8 px-6': !showComparisonModalWindow,
        },
      )}
      onClick={handleClick}
    >
      {showComparisonModalWindow ? <ComparisonModal /> : <CandidateCardModal />}
      <aside className="hidden bg-cultured absolute top-0 right-0 h-full max-h-full w-80 overflow-auto lg:block">
        {activeTab === 'congreso' && (
          <p className="p-2 text-center font-manrope text-lg">{mainCandidate.pending}</p>
        )}
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
