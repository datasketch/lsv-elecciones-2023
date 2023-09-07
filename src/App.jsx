import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import CandidatesView from './components/CandidatesView ';
import AppHeader from './components/AppHeader';
import useResize from './hooks/use-resize';
import { selectMainModalWindow, toggleMainModalWindow } from './features/modal/modal-slice';
import Modal from './components/Modal';
import { selectCandidateById } from './features/candidates/candidates-slice';

function App() {
  const dispatch = useDispatch();
  const showMainModalWindow = useSelector(selectMainModalWindow);
  const featuredCandidate = useSelector(
    (state) => selectCandidateById(state, window.LSV_FEATURED_CANDIDATE_ID),
  );

  useEffect(() => {
    if (featuredCandidate) {
      dispatch(toggleMainModalWindow(featuredCandidate));
    }
  }, [dispatch, featuredCandidate]);

  useResize();

  return (
    <>
      {showMainModalWindow && <Modal />}
      <div className="px-8 mx-auto text-jet font-manrope">
        <AppHeader />
        <CandidatesView />
      </div>
    </>
  );
}

export default App;
