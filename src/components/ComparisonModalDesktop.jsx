import CandidateCardModalHeader from './CandidateCardModalHeader';
import AppButton from './AppButton';
import { useDispatch } from 'react-redux';
import { toggleComparisonModalWindow } from '../features/modal/modal-slice';
import ComparisonBlocksDesktop from './ComparisonBlocksDesktop';

function ComparisonModalDesktop({ mainCandidate, secondaryCandidate }) {
  const dispatch = useDispatch();

  return (
    <div className="hidden bg-white overflow-auto w-full max-w-4xl lg:block">
      <div className="grid grid-cols-2">
        <div>
          <CandidateCardModalHeader
            candidate={mainCandidate}
            showClose={false}
          />
        </div>
        {secondaryCandidate ? (
          <CandidateCardModalHeader candidate={secondaryCandidate} />
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
