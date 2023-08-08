import { useSelector } from 'react-redux';
import CandidatesView from './components/CandidatesView ';
import AppHeader from './components/AppHeader';
import useResize from './hooks/use-resize';
import { selectMainModalWindow } from './features/modal/modal-slice';
import Modal from './components/Modal';

function App() {
  const showMainModalWindow = useSelector(selectMainModalWindow);
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
