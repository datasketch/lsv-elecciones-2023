import classNames from 'classnames';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  selectCongressCandidatesBlocks,
  selectPresidentialCandidatesBlocks,
  selectPresidentialElectionsCandidatesBlocks,
} from '../features/modal/modal-slice';
import { selectActiveTab } from '../features/nav/nav-slice';

function CandidateCardModalDataDesktop({ candidate }) {
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
          <p className="font-martin text-2xl uppercase text-jet border-l-2 border-jet pl-2 leading-none">Fórmula presidencial</p>
          <div className="flex items-center mb-8 space-x-2">
            <img
              className="w-20 h-20 max-w-full object-contain object-center"
              src="https://joeschmoe.io/api/v1/random"
              alt=""
            />
            <div>
              <p className="text-base">Sergio Fajardo Valderrama</p>
              <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="inline-block mt-2 border border-black uppercase text-xxs py-0 px-4 mr-2">
                Ver perfil
              </a>
            </div>
          </div>
        </>
      )}
      {blocks.map(([label, field], index) => (
        // eslint-disable-next-line react/no-array-index-key
        <React.Fragment key={index}>
          <p
            className={classNames({
              'text-dim-gray': field,
              'mt-4': index > 0,
              'font-martin text-2xl uppercase text-jet border-l-2 border-jet pl-2 leading-none': !field,
            })}
          >
            {label}
          </p>
          {field && <p>{candidate[field]}</p>}
        </React.Fragment>
      ))}
    </>
  );
}

export default CandidateCardModalDataDesktop;
