import { useState } from 'react';
import { useSelector } from 'react-redux';
import CandidateCard from './CandidateCard';
import ViewModeSwitch from './ViewModeSwitch';
import { selectAllCandidates } from '../features/candidates/candidates-slice';
import classNames from 'classnames';

function CandidateList() {
  const [gridView, setGridView] = useState(true);
  const candidates = useSelector(selectAllCandidates);

  const handleClick = (value) => {
    setGridView(value);
  };

  return (
    <>
      <h2>Candidatos</h2>
      <ViewModeSwitch grid={gridView} handler={handleClick} />
      <div
        className={classNames('grid grid-cols-1 gap-2', {
          'sm:grid-cols-2': gridView,
          'md:grid-cols-3': gridView,
          'lg:grid-cols-4': gridView,
        })}
      >
        {candidates.map((candidate) => (
          <CandidateCard candidate={candidate} key={candidate.id} />
        ))}
      </div>
    </>
  );
}

export default CandidateList;
