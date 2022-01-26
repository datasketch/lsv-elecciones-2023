import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectHighlightedCandidates } from '../features/candidates/candidates-slice';
import { closeModal, selectFeaturedCandidate } from '../features/modal/modal-slice';
import CandidateCard from './CandidateCard';

function Modal() {
  const candidates = useSelector(selectHighlightedCandidates);
  const featuredCandidate = useSelector(selectFeaturedCandidate)
  const dispatch = useDispatch();

  const handleClose = (e) => {
    if (e.currentTarget === e.target || e.target.matches('.close')) {
      dispatch(closeModal())
    }
  }

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 pr-80 flex items-center justify-center" onClick={handleClose}
    >
      <div className='bg-white p-4'>
        <button className='close'>&times;</button>
        <p>{featuredCandidate.fullname}</p>
        <p>Número en el tarjetón: {featuredCandidate.electoralNumber}</p>
      </div>
      <aside className="bg-white absolute top-0 right-0 max-h-full w-80 overflow-auto">
        {candidates.map((candidate) => (
          <CandidateCard key={candidate.id} candidate={candidate} />
        ))}
      </aside>
    </div>
  );
}

export default Modal;
