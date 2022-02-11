import classNames from 'classnames';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  selectCongressCandidatesBlocks,
  selectPresidentialCandidatesBlocks,
} from '../features/modal/modal-slice';
import { selectActiveTab } from '../features/nav/nav-slice';

function CandidateCardModalDataDesktop({ candidate }) {
  const activeTab = useSelector(selectActiveTab);
  const congressBlocks = useSelector(selectCongressCandidatesBlocks);
  const presidentialBlocks = useSelector(selectPresidentialCandidatesBlocks);
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    const selectedBlocks =
      activeTab === 'congreso' ? congressBlocks : presidentialBlocks;
    setBlocks(selectedBlocks);
  }, [activeTab, congressBlocks, presidentialBlocks]);

  return (
    <>
      {blocks.map(([label, field], index) => (
        <React.Fragment key={index}>
          <p
            className={classNames('text-dim-gray', {
              'mt-4': index > 0,
            })}
          >
            {label}
          </p>
          <p>{candidate[field]}</p>
        </React.Fragment>
      ))}
    </>
  );
}

export default CandidateCardModalDataDesktop;
