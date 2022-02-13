import { useDispatch } from 'react-redux';
import { toggleCoalitionModalWindow } from '../../features/modal/modal-slice';
import CoalitionHeader from './CoalitionHeader';
import ElectoralColumn from './ElectoralColumn';

function CandidateList({ candidates }) {
  const dispatch = useDispatch()
  return (
    <div className="border-b-2 border-jet grid grid-cols-1 py-8 md:grid-cols-3 md:gap-6">
      {Object.entries(candidates).map(([label, c]) => (
        <div key={label}>
          <CoalitionHeader
            label={label}
            onClick={() => dispatch(toggleCoalitionModalWindow(label))}
          />
          <ElectoralColumn candidates={c} />
        </div>
      ))}
    </div>
  );
}

export default CandidateList;
