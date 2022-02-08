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

  return (
    <>
      <div className="flex flex-col md:flex-row md:items-start md:justify-between">
        {Object.entries(candidates).map(([label, c]) => {
          return <ElectoralColumn key={label} label={label} candidates={c} />;
        })}
      </div>
      <div className="hidden md:block pb-2 border-b border-sonic-silver">
        <div className="uppercase text-center mt-4 text-jet font-martin text-2xl flex justify-between">
          <span>Izquierda</span>
          <span>Centro</span>
          <span>Derecha</span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto py-4 lg:grid-cols-5">
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
