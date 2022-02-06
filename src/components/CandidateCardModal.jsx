import { useSelector } from 'react-redux';
import { selectMainCandidate } from '../features/modal/modal-slice';
import CompareButton from './CompareButton';
import ShareButton from './ShareButton';

function CandidateCardModal() {
  const candidate = useSelector(selectMainCandidate);

  const getConvictedOrInvestigated = () => {
    if (
      candidate.hasBeenConvicted === 'No' &&
      candidate.hasBeenInvestigated === 'No'
    )
      return 'No';
    else if (
      candidate.hasBeenInvestigated === 'Sí' &&
      candidate.hasBeenConvicted === 'Sí'
    )
      return 'Ambas';
    else if (candidate.hasBeenInvestigated === 'Sí') return 'Investigado';
    else if (candidate.hasBeenConvicted === 'Sí') return 'Condenado';
  };

  const getHeirHistory = () => {
    if (
      candidate.heirToDoomedVows === 'No' &&
      candidate.heirToVotesUnderInvestigation === 'No'
    )
      return 'No';
    else if (
      candidate.heirToDoomedVows === 'Sí' &&
      candidate.heirToDoomedVows === 'Sí'
    )
      return 'Ambas';
    else if (candidate.heirToDoomedVows === 'Sí') return 'De condenado';
    else if (candidate.heirToVotesUnderInvestigation === 'Sí')
      return 'De investigado';
  };

  const redflags = [
    candidate.firstRedflag,
    candidate.secondRedflag,
    candidate.thirdRedflag,
  ].filter((redflag) => redflag);

  return (
    <div className="bg-soft-white w-96 max-w-full max-h-full overflow-auto">
      <div
        style={{ backgroundColor: candidate.party.color }}
        className="relative"
      >
        <button className="absolute top-3 right-3" datadismiss="true">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14">
            <path
              d="M12.519 14-.003 1.478 1.475 0l12.522 12.522Z"
              fill="#000000"
            />
            <path d="M14 1.478 1.478 14 0 12.522 12.522 0Z" fill="#000000" />
          </svg>
        </button>
        <div className="flex items-center px-6 py-5 space-x-4">
          <div className="font-martin uppercase text-center text-xl text-black flex-shrink-0">
            {candidate.electoralNumber && (
              <p>#Tarjetón: {candidate.electoralNumber}</p>
            )}
            <img
              src={candidate.photo}
              alt={candidate.fullname}
              className="max-w-full w-28"
            />
          </div>
          <div className="">
            <p className="text-sm">Pendiente</p>
            <p className="text-sm">{candidate.party.label}</p>
            <p className="text-lg leading-tight">{candidate.fullname}</p>
            {candidate.twitterHandle && (
              <a
                href={`https://twitter.com/${candidate.twitterHandle}`}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-block"
              >
                <img src="/twitter.svg" alt="" />
              </a>
            )}
          </div>
        </div>
      </div>
      {candidate.profile && (
        <p className="bg-cultured py-4 px-6 text-sm">{candidate.profile}</p>
      )}
      {!!redflags.length && (
        <ul className="px-6 pt-4 grid grid-cols-3 gap-2">
          {redflags.map((redflag, index) => (
            <li
              key={`redflag-${index}`}
              className="text-center text-xxs flex-shrink-1 uppercase flex items-center"
            >
              <span>{redflag}</span>{' '}
              {redflags.length - 1 !== index && <span>•</span>}
            </li>
          ))}
        </ul>
      )}
      <div className="py-4 px-6 text-sm">
        <p className="text-dark-slate-blue">A Presidencia apoya a</p>
        <p>{candidate.supportedPresidentialCandidate}</p>
        <p className="text-dark-slate-blue mt-4">
          ¿Ha sido condenado o investigado?
        </p>
        <p>{getConvictedOrInvestigated()}</p>
        <p className="text-dark-slate-blue mt-4">
          ¿Hereda votos de condenado o investigado?
        </p>
        <p>{getHeirHistory()}</p>
        <p className="text-dark-slate-blue mt-4">Periodos en el Congreso</p>
        <p>{candidate.termsAsMemberOfCongress}</p>
      </div>
      <div className="px-6">
        <div className="py-4 border-t border-bone grid grid-cols-2 gap-4">
          <ShareButton />
          <CompareButton />
        </div>
      </div>
    </div>
  );
}

export default CandidateCardModal;
