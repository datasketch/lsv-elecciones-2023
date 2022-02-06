// import { useSelector } from 'react-redux';
// import CandidateCardExpanded from './CandidateCardExpanded';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { closeModal, selectModal } from '../features/modal/modal-slice';
import CandidateCardModal from './CandidateCardModal';

function Modal() {
  // const candidates = useSelector((state) => state.candidates.filtered);
  const showModal = useSelector(selectModal)
  const dispatch = useDispatch()

  useEffect(() => {
    const evtHandler = (e) => {
      if (e.key === 'Escape' || e.keyCode === 27) {
        dispatch(closeModal())
      }
    }
    if (showModal) {
      document.addEventListener('keyup', evtHandler)
    }
    return () => document.removeEventListener('keyup', evtHandler)
  }, [showModal, dispatch])

  const handleClick = e => {
    if (e.target === e.currentTarget || e.target.closest('[datadismiss]')) {
      dispatch(closeModal())
    }
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 py-8 px-6 flex items-center justify-center z-20" onClick={handleClick}>
      <CandidateCardModal />
      {/* <aside className="bg-white absolute top-0 right-0 max-h-full w-80 overflow-auto">
        {candidates.map((candidate) => (
          <CandidateCardExpanded key={candidate.id} candidate={candidate} />
        ))}
      </aside> */}
    </div>
  );
}

export default Modal;
