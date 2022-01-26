import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { showCandidateCard } from '../features/modal/modal-slice';

function CandidateCard({ candidate }) {
  const dispatch = useDispatch();
  return (
    <button
      className={classNames('flex space-x-3 shadow p-2 text-left w-full', {
        'opacity-25': !candidate.highlight,
      })}
      onClick={() => dispatch(showCandidateCard(candidate))}
    >
      <div className="flex-shrink-0">
        <img
          src="https://joeschmoe.io/api/v1/random"
          width={60}
          className="rounded-full"
          alt={candidate.fullname}
        />
      </div>
      <div className="flex-grow min-w-0">
        <p className="font-bold truncate" title={candidate.fullname}>
          {candidate.fullname}
        </p>
        <p className="truncate" title={candidate.party}>
          {candidate.party}
        </p>
        <p>{candidate.department}</p>
        <p>{candidate.office}</p>
      </div>
    </button>
  );
}

export default CandidateCard;
