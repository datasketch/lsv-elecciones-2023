import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  selectCongressCandidatesBlocks,
  selectPresidentialCandidatesBlocks,
} from '../features/modal/modal-slice';
import { selectActiveTab } from '../features/nav/nav-slice';
import CandidatePhotoOverlay from './congress/CandidatePhotoOverlay';

function ComparisonBlocksMobile({ mainCandidate, secondaryCandidate }) {
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
        <div key={`block-${index}`} className="space-y-3">
          <p className="text-dark-slate-blue text-center">{label}</p>
          <div className="grid grid-cols-2">
            <div className="flex items-center space-x-2 border-r border-jet pr-4">
              <div className="relative w-10">
                <CandidatePhotoOverlay candidate={mainCandidate} />
              </div>
              <p className="text-sm">{mainCandidate[field]}</p>
            </div>
            {secondaryCandidate && (
              <div className="flex items-center space-x-2 pl-4">
                <div className="relative w-10">
                  <CandidatePhotoOverlay candidate={secondaryCandidate} />
                </div>
                <p className="text-sm">{secondaryCandidate[field]}</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
}

export default ComparisonBlocksMobile;
