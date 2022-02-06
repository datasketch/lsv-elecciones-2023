// import { useState } from 'react';
import { useSelector } from 'react-redux';
import ElectoralColumn from './ElectoralColumn';
import {
  selectAllCandidates,
  selectPartiesWithColor,
} from '../features/candidates/candidates-slice';

function CandidateList() {
  const candidates = useSelector(selectAllCandidates);
  const parties = useSelector(selectPartiesWithColor);

  // const handleClick = (value) => {
  //   setGridView(value);
  // };

  return (
    <>
      {/* <ViewModeSwitch grid={gridView} handler={handleClick} /> */}
      <div className="border-b border-jet">
        <div className="flex items-start justify-between">
          {Object.entries(candidates).map(([label, c]) => {
            return <ElectoralColumn key={label} label={label} candidates={c} />;
          })}
        </div>
        <div className="pb-2">
          <div className="uppercase text-center mt-4 text-jet font-martin text-2xl flex justify-between">
            <span>Izquierda</span>
            <span>Centro</span>
            <span>Derecha</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-4 max-w-4xl mx-auto py-4">
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
    </>
  );
}

export default CandidateList;
