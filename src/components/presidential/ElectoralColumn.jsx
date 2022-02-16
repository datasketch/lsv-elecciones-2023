import { useDispatch } from 'react-redux';
import { toggleMainModalWindow } from '../../features/modal/modal-slice';

function ElectoralColumn({ candidates }) {
  const dispatch = useDispatch();

  function handleImageError(e) {
    e.target.src = 'https://www.lasillavacia.com/media/candidato-nn-h.jpg';
  }

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
            onError={handleImageError}
          />
          <span className="text-xs leading-tight">{candidate.fullname}</span>
        </button>
      ))}
    </div>
  );
}

export default ElectoralColumn;
