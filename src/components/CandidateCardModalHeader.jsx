/* eslint-disable no-nested-ternary */
import { useSelector } from 'react-redux';
import hexRgb from 'hex-rgb';
import { selectActiveTab } from '../features/nav/nav-slice';
import {
  selectComparisonModalWindow,
  selectSecondaryCandidate,
} from '../features/modal/modal-slice';

function CandidateCardModalHeader({
  candidate,
  showClose = true,
  setShowProfile = () => {},
  showProfile,
}) {
  const activeTab = useSelector(selectActiveTab);
  const secondaryCandidate = useSelector(selectSecondaryCandidate);
  const showComparisonModalWindow = useSelector(selectComparisonModalWindow);
  const {
    red, green, blue, alpha,
  } = hexRgb(candidate.party.color, {
    alpha: 0.6,
  });

  function handleImageError(e) {
    e.target.src = 'https://www.lasillavacia.com/media/candidato-nn-h.jpg';
  }

  return (
    <div
      style={{ backgroundColor: `rgba(${red}, ${green}, ${blue}, ${alpha})` }}
      className="relative"
    >
      {showClose && (
        <button className="absolute top-3 right-3" datadismiss="true" type="button">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14">
            <path
              d="M12.519 14-.003 1.478 1.475 0l12.522 12.522Z"
              fill="#000000"
            />
            <path d="M14 1.478 1.478 14 0 12.522 12.522 0Z" fill="#000000" />
          </svg>
        </button>
      )}
      <div className="flex px-6 py-5 space-x-4 items-start">
        <div className="font-martin uppercase text-center text-2xl text-black flex-shrink-0">
          {activeTab === 'consultas' ? (
            <p>{candidate.coalition}</p>
          ) : !candidate.electoralNumber ? (
            <p>Sin datos</p>
          ) : parseInt(candidate.electoralNumber, 10) ? (
            <p>
              #Tarjetón:
              {' '}
              {candidate.electoralNumber}
            </p>
          ) : (
            <p>{candidate.electoralNumber}</p>
          )}
          <img
            src={candidate.photo}
            alt={candidate.fullname}
            className="max-w-full mx-auto w-28"
            onError={handleImageError}
          />
        </div>
        <div>
          <div className="opacity-0 text-2xl">_</div>
          <p className="text-sm">{candidate.pending}</p>
          <p className="text-xl leading-tight">{candidate.fullname}</p>
          {activeTab === 'consultas' ? (
            <p className="text-sm">
              Aval:
              {' '}
              {candidate.guarantee}
            </p>
          ) : (
            <p className="text-sm">{candidate.party.label}</p>
          )}
          <div className="mt-1 flex items-center">
            {activeTab === 'elecciones-presidenciales' && (
              <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="inline-block border border-black uppercase text-xxs py-0 px-4 mr-2">
                Ver perfil
              </a>
            )}
            {candidate.twitterHandle && (
              <a
                href={`https://twitter.com/${candidate.twitterHandle}`}
                target="_blank"
                rel="noreferrer"
                className="inline-block mr-2"
              >
                <img className="w-4" src="/twitter.svg" alt="" />
              </a>
            )}
            {secondaryCandidate
              && showComparisonModalWindow
              && candidate.profile && activeTab !== 'elecciones-presidenciales' && (
                <button
                  className="underline text-sm"
                  onClick={() => setShowProfile(!showProfile)}
                  type="button"
                >
                  {showProfile ? 'Ver menos' : 'Ver más'}
                </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CandidateCardModalHeader;
