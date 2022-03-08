import classNames from 'classnames';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  selectCongressCandidatesBlocks,
  selectPresidentialCandidatesBlocks,
  selectPresidentialElectionsCandidatesBlocks,
} from '../features/modal/modal-slice';
import { selectActiveTab } from '../features/nav/nav-slice';
import CandidatePhotoOverlay from './congress/CandidatePhotoOverlay';

function ComparisonBlocksMobile({ mainCandidate, secondaryCandidate }) {
  const activeTab = useSelector(selectActiveTab);
  const congressBlocks = useSelector(selectCongressCandidatesBlocks);
  const presidentialBlocks = useSelector(selectPresidentialCandidatesBlocks);
  const presidentialElectionsBlocks = useSelector(selectPresidentialElectionsCandidatesBlocks);
  const [blocks, setBlocks] = useState([]);

  const blocksChoices = {
    congreso: congressBlocks,
    consultas: presidentialBlocks,
    'elecciones-presidenciales': presidentialElectionsBlocks,
  };

  useEffect(() => {
    setBlocks(blocksChoices[activeTab]);
  }, [activeTab, congressBlocks, presidentialBlocks]);

  return (
    <>
      {activeTab === 'elecciones-presidenciales' && (
      <>
        <p className="font-martin text-2xl uppercase text-jet leading-none text-center">Fórmula presidencial</p>
        <div className="grid grid-cols-2 text-xs">
          <div className="flex items-center space-x-2 border-r border-jet pr-4">
            <img
              className="w-10 h-10 max-w-full object-contain object-center"
              src="https://joeschmoe.io/api/v1/random"
              alt=""
            />
            <div>
              <p>Sergio Fajardo Valderrama</p>
              <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="inline-block border border-black uppercase text-xxs py-0 px-4 mr-2">
                Ver perfil
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-2 pl-4">
            <img
              className="w-10 h-10 max-w-full object-contain object-center"
              src="https://joeschmoe.io/api/v1/random"
              alt=""
            />
            <div>
              <p>Sergio Fajardo Valderrama</p>
              <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="inline-block border border-black uppercase text-xxs py-0 px-4 mr-2">
                Ver perfil
              </a>
            </div>
          </div>
        </div>
      </>
      )}
      {blocks.map(([label, field], index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={`block-${index}`} className="space-y-3">
          <p className={classNames('text-center', {
            'font-martin text-2xl uppercase text-jet leading-none': !field,
            'text-dim-gray': field,
          })}
          >
            {label}
          </p>
          {field && (
            <div className="grid grid-cols-2">
              <div className="flex items-center space-x-2 border-r border-jet pr-4">
                <div className="relative w-10 flex-shrink-0">
                  <CandidatePhotoOverlay candidate={mainCandidate} />
                </div>
                <p className="text-xs">{mainCandidate[field]}</p>
              </div>
              {secondaryCandidate && (
                <div className="flex items-center space-x-2 pl-4">
                  <div className="relative w-10 flex-shrink-0">
                    <CandidatePhotoOverlay candidate={secondaryCandidate} />
                  </div>
                  <p className="text-xs">{secondaryCandidate[field]}</p>
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </>
  );
}

export default ComparisonBlocksMobile;
