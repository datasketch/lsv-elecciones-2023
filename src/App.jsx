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
import { hideNav, selectActiveTab, selectTab } from './features/nav/nav-slice';
import useResize from './hooks/use-resize';

function App() {
  const dispatch = useDispatch();
  const showMainModalWindow = useSelector(selectMainModalWindow);
  const activeTab = useSelector(selectActiveTab)
  const featuredCandidate = useSelector((state) =>
    selectCandidateById(state, window.LSV_FEATURED_CANDIDATE_ID)
  );

  useEffect(() => {
    if (featuredCandidate) {
      dispatch(toggleMainModalWindow(featuredCandidate));
    }
  }, [dispatch, featuredCandidate]);

  useEffect(() => {
    const search = window.location.search.substring(1);
    const tabMatch = search.match(/tab=([\w-]+)&?/);
    if (search.includes('headless')) {
      dispatch(hideNav(true))
    }
    if (tabMatch) {
      const [, tab] = tabMatch;
      if (['congreso', 'consultas'].includes(tab.toLowerCase())) {
        dispatch(selectTab(tab))
      }
    }
  }, [dispatch])

  useResize();

  return (
    <>
      {showMainModalWindow && <Modal />}
      <div className="container px-4 mx-auto text-jet font-manrope">
        <AppHeader />
        {activeTab === 'congreso' ? (
          <>
          <FiltersSection />
          <CandidateList /></>
        ) : (<p>Hola</p>)}
      </div>
    </>
  );
}

export default App;
