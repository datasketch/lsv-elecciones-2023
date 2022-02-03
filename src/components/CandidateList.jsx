import { useState } from 'react';
import { useSelector } from 'react-redux';
import ElectoralColumn from './ElectoralColumn';
import ViewModeSwitch from './ViewModeSwitch';
import { selectAllCandidates } from '../features/candidates/candidates-slice';

function CandidateList() {
  const [gridView, setGridView] = useState(true);
  const candidates = useSelector(selectAllCandidates);

  const handleClick = (value) => {
    setGridView(value);
  };

  return (
    <>
      <h2 className="text-xl font-bold">Candidatos</h2>
      <ViewModeSwitch grid={gridView} handler={handleClick} />
      <div className="flex items-start justify-between border-b border-black">
        {Object.entries(candidates).map(([label, c]) => {
          return <ElectoralColumn key={label} label={label} candidates={c} />;
        })}
      </div>
    </>
  );
}

export default CandidateList;
