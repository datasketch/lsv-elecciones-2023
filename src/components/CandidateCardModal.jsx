import { useSelector } from 'react-redux';
import { selectMainCandidate } from '../features/modal/modal-slice';
import CompareButton from './CompareButton';
import ShareButton from './ShareButton';
import CandidateCardModalHeader from './CandidateCardModalHeader';
import CandidateCardModalDataDesktop from './CandidateCardModalDataDesktop';

function CandidateCardModal() {
  const candidate = useSelector(selectMainCandidate);

  return (
    <div className="bg-soft-white w-96 max-w-full max-h-full overflow-auto">
      <CandidateCardModalHeader candidate={candidate} />
      {candidate.profile && (
        <p className="bg-cultured py-4 px-6 text-sm">{candidate.profile}</p>
      )}
      {candidate.redflags && !!candidate.redflags.length && (
        <ul className="px-6 pt-4 grid grid-cols-3 gap-2">
          {candidate.redflags.map((redflag, index) => (
            <li
              key={`redflag-${index}`}
              className="text-center text-xxs uppercase"
            >
              <span>{redflag}</span>{' '}
            </li>
          ))}
        </ul>
      )}
      <div className="py-4 px-6 text-sm">
        <CandidateCardModalDataDesktop candidate={candidate} />
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
