import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectHighlightedCandidates } from '../features/candidates/candidates-slice';
import {
  closeModal,
  selectFeaturedCandidate,
} from '../features/modal/modal-slice';
import CandidateCard from './CandidateCard';

function Modal() {
  const candidates = useSelector(selectHighlightedCandidates);
  const featuredCandidate = useSelector(selectFeaturedCandidate);
  const dispatch = useDispatch();

  const handleClose = (e) => {
    if (e.currentTarget === e.target || e.target.matches('.close')) {
      dispatch(closeModal());
    }
  };

  const getConvictedOrInvestigated = () => {
    if (featuredCandidate.hasBeenConvicted === 'No' && featuredCandidate.hasBeenInvestigated === 'No') return 'No'
    else if (featuredCandidate.hasBeenInvestigated === 'Sí' && featuredCandidate.hasBeenConvicted === 'Sí') return 'Ambas'
    else if (featuredCandidate.hasBeenInvestigated === 'Sí') return 'Investigado'
    else if (featuredCandidate.hasBeenConvicted === 'Sí') return 'Condenado'
  }

  const getHeirHistory = () => {
    if (featuredCandidate.heirToDoomedVows === 'No' && featuredCandidate.heirToVotesUnderInvestigation === 'No') return 'No'
    else if (featuredCandidate.heirToDoomedVows === 'Sí' && featuredCandidate.heirToDoomedVows === 'Sí') return 'Ambas'
    else if (featuredCandidate.heirToDoomedVows === 'Sí') return 'De condenado'
    else if (featuredCandidate.heirToVotesUnderInvestigation === 'Sí') return 'De investigado'
  }

  const redflags = [featuredCandidate.firstRedflag, featuredCandidate.secondRedflag, featuredCandidate.thirdRedflag].filter(rf => rf)

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 py-8 pr-80 flex items-center justify-center z-10"
      onClick={handleClose}
    >
      <div className="bg-white w-96 max-h-full overflow-auto">
        <div className="flex justify-between items-start">
          <div className='font-martin w-32 uppercase text-center text-2xl text-white py-2 px-4' style={{backgroundColor: featuredCandidate.color}}>
            Tarjetón: {featuredCandidate.electoralNumber}
          </div>
          <button className="close px-4 self-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"><path data-name="Trazado 1" d="M12.519 14-.003 1.478 1.475 0l12.522 12.522Z" fill="#3d3b3d"/><path data-name="Trazado 2" d="M14 1.478 1.478 14 0 12.522 12.522 0Z" fill="#3d3b3d"/></svg>
          </button>
        </div>
        <div className='px-4 flex items-start'>
          <div className="flex-shrink-0 w-28">
            <img
              src={featuredCandidate.photo}
              alt={featuredCandidate.fullname}
              className='max-w-full'
            />
          </div>
          <div className='flex-grow pb-4 border-b border-bone mx-3.5'>
            <div className="flex justify-between items-center text-xs">
              <span>{featuredCandidate.party}</span>
              <span className="text-dodger-blue border-r border-dodger-blue pr-2">{featuredCandidate.department}</span>
            </div>
            <p className='text-xl'>{featuredCandidate.fullname}</p>
          </div>
        </div>
        {
          featuredCandidate.profile &&
          <p className="bg-cultured py-4 px-8 text-sm">{featuredCandidate.profile}</p>
        }
        {
          !!redflags.length &&
          <div className="px-4 pt-4 flex items-start space-x-2 justify-between">
            {
              redflags.map((redflag, index) => (
                <div
                  key={`redflag-${index}`}
                  className='border border-dark-slate-blue text-center text-xxs flex-shrink-0 p-2'
                >
                  {redflag}
                </div>
              ))
            }
          </div>
        }
        <div className="p-4 px-12">
          <p className='text-dark-slate-blue'>A Presidencia apoya a</p>
          <p>{featuredCandidate.supportedPresidentialCandidate}</p>
          <p className='text-dark-slate-blue mt-4'>¿Ha sido condenado o investigado?</p>
          <p>{getConvictedOrInvestigated()}</p>
          <p className='text-dark-slate-blue mt-4'>¿Hereda votos de condenado o investigado?</p>
          <p>{getHeirHistory()}</p>
          <p className='text-dark-slate-blue mt-4'>Periodos en el Congreso</p>
          <p>{featuredCandidate.termsAsMemberOfCongress}</p>
        </div>
      </div>
      <aside className="bg-white absolute top-0 right-0 max-h-full w-80 overflow-auto">
        {candidates.map((candidate) => (
          <CandidateCard key={candidate.id} candidate={candidate} />
        ))}
      </aside>
    </div>
  );
}

export default Modal;
