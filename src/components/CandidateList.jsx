import { useSelector } from 'react-redux';
import ElectoralColumn from './ElectoralColumn';
import {
  selectAllCandidates,
} from '../features/candidates/candidates-slice';
import PoweredBy from './PoweredBy';

function CandidateList() {
  const candidates = useSelector(selectAllCandidates);

  // flex flex-col md:flex-row md:items-start md:justify-between
  return (
    <>
      <div className="hidden md:grid md:grid-cols-5 border-t border-sonic-silver mb-6">
        {Object.entries(candidates).map(([label], i) => (
          <p
            // eslint-disable-next-line react/no-array-index-key
            key={`${label}-${i}`}
            className="uppercase text-center text-jet font-martin text-2xl border-r border-r-sonic-silver last:border-none"
          >
            {label}
          </p>
        ))}
      </div>
      <div className="grid md:grid-cols-5">
        {Object.entries(candidates).map(([label, c]) => (
          <ElectoralColumn key={label} label={label} candidates={c} />
        ))}
      </div>
      <div className="py-4">
        <PoweredBy />
      </div>
    </>
  );
}

export default CandidateList;
