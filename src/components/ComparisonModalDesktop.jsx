import { useDispatch } from 'react-redux';
import { useState } from 'react';
import CandidateCardModalHeader from './CandidateCardModalHeader';
import AppButton from './AppButton';
import { toggleComparisonModalWindow } from '../features/modal/modal-slice';
import ComparisonBlocksDesktop from './ComparisonBlocksDesktop';

function ComparisonModalDesktop({ mainCandidate, secondaryCandidate }) {
  const dispatch = useDispatch();
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div className="hidden bg-white overflow-auto w-full max-w-4xl max-h-full lg:block">
      <div className="grid grid-cols-2">
        <div>
          <CandidateCardModalHeader
            candidate={mainCandidate}
            showClose={false}
            setShowProfile={setShowProfile}
            showProfile={showProfile}
          />
        </div>
        {secondaryCandidate ? (
          <CandidateCardModalHeader
            candidate={secondaryCandidate}
            setShowProfile={setShowProfile}
            showProfile={showProfile}
          />
        ) : (
          <div className="bg-cultured text-dodger-blue text-center self-center p-4 mx-auto w-full xl:max-w-sm">
            <p className="mb-2">Seleccione un candidato para comparar</p>
            <AppButton
              label="Cerrar comparar"
              onClick={() => dispatch(toggleComparisonModalWindow())}
              inverse
            />
          </div>
        )}
      </div>
      {showProfile && (
        <div className="grid grid-cols-2">
          {mainCandidate.profile && (
            <div className="bg-cultured py-4 px-6 text-sm">
              <p>{mainCandidate.profile}</p>
            </div>
          )}
          {secondaryCandidate.profile && (
            <div className="bg-cultured py-4 px-6 text-sm">
              <p>{secondaryCandidate.profile}</p>
            </div>
          )}
        </div>
      )}
      {secondaryCandidate && (
        <div className="px-6 py-4 space-y-8">
          <ComparisonBlocksDesktop
            mainCandidate={mainCandidate}
            secondaryCandidate={secondaryCandidate}
          />
          <div className="text-center">
            <AppButton
              label="Cerrar comparar"
              onClick={() => dispatch(toggleComparisonModalWindow())}
              inverse
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default ComparisonModalDesktop;
