import { useSelector } from 'react-redux';
import ElectoralColumn from './ElectoralColumn';
import {
  selectAllCandidates,
  selectPartiesWithColor,
} from '../../features/candidates/candidates-slice';
import PoweredBy from '../PoweredBy';

function CandidateList() {
  const candidates = useSelector(selectAllCandidates);
  const parties = useSelector(selectPartiesWithColor);

  // flex flex-col md:flex-row md:items-start md:justify-between
  return (
    <>
      <div className="hidden md:grid md:grid-cols-5 border-t border-sonic-silver mb-6">
        {Object.entries(candidates).map(([label], i) => (
          <p
            key={`${label}-i`}
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
      <div className="grid grid-cols-3 gap-4 max-w-5xl mx-auto py-4 lg:grid-cols-5">
        {Object.keys(parties)
          .sort()
          .map((key, index) => (
            <div
              key={`party-${index}`}
              className="flex items-center space-x-1 text-xs flex-shrink-0"
            >
              <span
                className="w-3 h-3 flex-shrink-0"
                style={{ backgroundColor: parties[key] }}
              ></span>
              <span className="truncate" title={key}>
                {key}
              </span>
            </div>
          ))}
      </div>
      <div className="py-4">
        <PoweredBy />
      </div>
    </>
  );
}

export default CandidateList;
