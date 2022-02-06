import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppHeader from './components/AppHeader';
import CandidateList from './components/CandidateList';
import FiltersSection from './components/FiltersSection';
import Modal from './components/Modal';
import { selectCandidateById } from './features/candidates/candidates-slice';
import {
  selectMainModalWindow,
  toggleMainModalWindow,
} from './features/modal/modal-slice';
import useResize from './hooks/use-resize';

function App() {
  const showMainModalWindow = useSelector(selectMainModalWindow);
  const dispatch = useDispatch();
  const featuredCandidate = useSelector((state) =>
    selectCandidateById(state, window.LSV_FEATURED_CANDIDATE_ID)
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
      <div className="container px-4 mx-auto text-jet font-manrope">
        <AppHeader />
        <FiltersSection />
        <CandidateList />
      </div>
    </>
  );
}

export default App;
