/* eslint-disable max-len */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppCandidates from './components/candidates/AppCandidates';
import AppHeader from './components/AppHeader';
import Modal from './components/candidates/Modal';
import ModalCoalitionWindow from './components/ModalCoalitionWindow';
import { selectCandidateById } from './features/candidates/candidates-slice';
import {
  selectMainModalWindow,
  selectShowCoalitionModalWindow,
  toggleMainModalWindow,
} from './features/modal/modal-slice';
import useResize from './hooks/use-resize';

function App() {
  const dispatch = useDispatch();
  const showMainModalWindow = useSelector(selectMainModalWindow);
  const showCoalitionModalWindow = useSelector(selectShowCoalitionModalWindow);
  const featuredCandidate = useSelector(
    (state) => selectCandidateById(state, window.LSV_FEATURED_CANDIDATE_ID),
  );

  useEffect(() => {
    if (featuredCandidate) {
      dispatch(toggleMainModalWindow(featuredCandidate));
    }
  }, [dispatch, featuredCandidate]);

  useEffect(() => {
    if (showMainModalWindow || showCoalitionModalWindow) { document.body.classList.add('overflow-hidden'); } else document.body.classList.remove('overflow-hidden');
  }, [showMainModalWindow, showCoalitionModalWindow]);

  useResize();

  return (
    <>
      {showCoalitionModalWindow && <ModalCoalitionWindow />}
      {showMainModalWindow && <Modal />}
      <div className="px-8 mx-auto text-jet font-manrope">
        <AppHeader />
        <AppCandidates />
      </div>
    </>
  );
}

export default App;
