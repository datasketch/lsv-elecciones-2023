import { useDispatch, useSelector } from 'react-redux';
import {
  selectSecondaryCandidate,
  selectMainCandidate,
  setSecondaryCandidate,
  toggleComparisonModalWindow,
} from '../features/modal/modal-slice';
import ComparisonBlock from './ComparisonBlock';
import PoweredBy from './PoweredBy';

function ComparisonModal() {
  const mainCandidate = useSelector(selectMainCandidate);
  const secondaryCandidate = useSelector(selectSecondaryCandidate);
  const candidates = useSelector((state) => state.candidates.filtered);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const [selected] = e.target.selectedOptions;
    const { info } = selected.dataset;
    if (info) {
      dispatch(setSecondaryCandidate(JSON.parse(info)));
    } else {
      dispatch(setSecondaryCandidate());
    }
  };
  
  const blocks = [
    ['A Presidencia apoya a', 'supportedPresidentialCandidate'],
    ['¿Ha sido condenado o investigado?', 'haveBeenConvictedOrInvestigated'],
    ['¿Hereda votos de condenado o investigado?', 'inheritVotesOfConvictedOrInvestigated'],
    ['Períodos en el Congreso', 'termsAsMemberOfCongress'],
    ['Ha ocupado un cargo público', 'hasHeldPublicOffice'],
    ['Sector del que viene', 'backgroundSector']
  ]

  return (
    <div className="bg-white w-full h-full px-6 py-4 overflow-auto">
      <button
        className="text-dodger-blue"
        onClick={() => dispatch(toggleComparisonModalWindow())}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 stroke-current inline-block"
          viewBox="0 0 24 24"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M0 0h24v24H0z" stroke="none" />
          <path d="m15 6-6 6 6 6" />
        </svg>
        <span className="underline">Volver</span>
      </button>
      <p className="font-martin text-center text-5xl uppercase text-jet mt-6">
        Compara candidatos
      </p>
      <div className="grid grid-cols-2 gap-4 py-6">
        <div className="border border-dodger-blue text-dodger-blue text-sm py-2 px-3">
          {mainCandidate.fullname}
        </div>
        <select
          name=""
          id=""
          className="border border-dodger-blue text-dodger-blue text-sm w-full"
          onChange={handleChange}
        >
          <option value="">Selecciona un candidato</option>
          {candidates.map((candidate) => (
            <option
              value={candidate.fullname}
              key={candidate.id}
              data-info={JSON.stringify(candidate)}
            >
              {candidate.fullname}
            </option>
          ))}
        </select>
      </div>
      <div className="mt-6 space-y-8">
        {
          blocks.map(([label, field], index) => (
            <ComparisonBlock
              key={`block-${index}`}
              mainCandidate={mainCandidate}
              secondaryCandidate={secondaryCandidate}
              label={label}
              field={field}
            />
          ))
        }
      </div>
      <div className="mt-6">
        <PoweredBy />
      </div>
    </div>
  );
}

export default ComparisonModal;
