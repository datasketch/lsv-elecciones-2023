import { useDispatch } from 'react-redux';
import { toggleMainModalWindow } from '../../features/modal/modal-slice';

function ElectoralColumn({ candidates }) {
  const dispatch = useDispatch();
  return (
    <div className="presidential-column mt-6">
      {candidates.map((candidate) => (
        <button
          className="inline-flex flex-col w-28"
          key={candidate.id}
          onClick={() => dispatch(toggleMainModalWindow(candidate))}
        >
          <img
            src={candidate.photo}
            className="max-w-full h-28"
            alt={candidate.fullname}
          />
          <span className="text-xs leading-tight">{candidate.fullname}</span>
        </button>
      ))}
    </div>
  );
}

export default ElectoralColumn;
