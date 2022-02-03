import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { showCandidateCard } from '../features/modal/modal-slice';

function CandidateCard({ candidate }) {
  const dispatch = useDispatch();
  return (
    <button
      className={classNames('w-10 flex-grow-0', {
        'opacity-25': !candidate.highlight,
      })}
      onClick={() => dispatch(showCandidateCard(candidate))}
    >
      <img
        src={candidate.photo}
        className="max-w-full"
        alt={candidate.fullname}
      />
    </button>
  );
}

export default CandidateCard;

/* <button
      className={classNames('flex space-x-3 shadow p-2 text-left w-full', {
        'opacity-25': !candidate.highlight,
      })}
      onClick={() => dispatch(showCandidateCard(candidate))}
    >
      <div className="flex-shrink-0">
        <img
          src={candidate.photo}
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
    </button> */
