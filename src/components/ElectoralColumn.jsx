import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { selectGridView } from '../features/view/view-slice';
import CandidateCard from './CandidateCard';

function ElectoralColumn({ label, candidates }) {
  const grid = useSelector(selectGridView);
  return (
    <div className="border-b border-bone pb-4 md:pb-0 md:border-none">
      <p className="uppercase mt-4 text-jet font-martin text-2xl md:hidden">
        {label}
      </p>
      <div
        className={classNames('candidates-column mt-4 md:mt-0', {
          single: !grid,
        })}
      >
        {(candidates || []).map((candidate) => (
          <CandidateCard candidate={candidate} key={candidate.id} />
        ))}
      </div>
    </div>
  );
}

export default ElectoralColumn;
