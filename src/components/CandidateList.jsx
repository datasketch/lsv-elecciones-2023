// import { useState } from 'react';
import { useSelector } from 'react-redux';
import ElectoralColumn from './ElectoralColumn';
// import ViewModeSwitch from './ViewModeSwitch';
import { selectAllCandidates, selectParties } from '../features/candidates/candidates-slice';
import { partyColorMap } from '../app/utils';

function CandidateList() {
  // const [gridView, setGridView] = useState(true);
  const candidates = useSelector(selectAllCandidates);
  const parties = useSelector(selectParties)

  // const handleClick = (value) => {
  //   setGridView(value);
  // };

  return (
    <>
      {/* <ViewModeSwitch grid={gridView} handler={handleClick} /> */}
      <div className="flex items-start justify-between border-b border-black">
        {Object.entries(candidates).map(([label, c]) => {
          return <ElectoralColumn key={label} label={label} candidates={c} />;
        })}
      </div>
      <div className="grid grid-cols-5 gap-4 max-w-4xl mx-auto py-4">
        {
          parties.map((party, index) => (
            <div
              key={`party-${index}`}
              className='flex items-center space-x-1 text-xs flex-shrink-0'
            >
              <span className='w-3 h-3 flex-shrink-0' style={{backgroundColor: partyColorMap[party]}}></span>
              <span className='truncate' title={party}>{party}</span>
            </div>
          ))
        }
      </div>
    </>
  );
}

export default CandidateList;
