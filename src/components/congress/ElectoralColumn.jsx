import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { selectGridView } from '../../features/view/view-slice';
import CandidateCard from './CandidateCard';

function ElectoralColumn({ label, candidates }) {
  const grid = useSelector(selectGridView);
  return (
    <div className="pb-4 border-b border-bone md:border-none">
      <p className="uppercase text-center mt-4 text-jet font-martin text-2xl flex justify-between md:hidden">
        {label}
      </p>
      <div
        className={classNames('candidates-column mt-4 md:mt-0', {
          single: !grid,
        })}
      >
        {candidates.map((candidate) => (
          <CandidateCard candidate={candidate} key={candidate.id} />
        ))}
      </div>
    </div>
  );
}

export default ElectoralColumn;
