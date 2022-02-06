import { useSelector } from 'react-redux';
import CandidateCardExpanded from './CandidateCardExpanded';
import CandidateCardModal from './CandidateCardModal';

function Modal() {
  const candidates = useSelector((state) => state.candidates.filtered);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 py-8 px-6 flex items-center justify-center z-20">
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
