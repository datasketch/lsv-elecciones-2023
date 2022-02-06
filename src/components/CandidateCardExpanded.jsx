import { useDispatch } from 'react-redux';
import CandidatePhotoOverlay from './CandidatePhotoOverlay';
import { showCandidateCard } from '../features/modal/modal-slice'

function CandidateCardExpanded({ candidate }) {
  const dispatch = useDispatch()

  return (
    <div className="flex p-2 space-x-3 items-center bg-cultured shadow-sm" role="button" tabIndex={0} onClick={() => dispatch(showCandidateCard(candidate))}>
      <div className="flex-shrink-0 w-12 relative">
        <CandidatePhotoOverlay candidate={candidate} />
      </div>
      <div className="flex-grow min-w-0">
        <div
          className="flex justify-between text-xs space-x-2"
          title={candidate.party.label}
        >
          <span className="truncate">{candidate.party.label}</span>
          <span className="text-dodger-blue">{candidate.department}</span>
        </div>
        <p className="truncate" title={candidate.fullname}>
          {candidate.fullname}
        </p>
      </div>
    </div>
  );
}

export default CandidateCardExpanded;
