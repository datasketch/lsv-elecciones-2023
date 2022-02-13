import { useSelector } from 'react-redux';
import { selectMainCandidate } from '../features/modal/modal-slice';
import CompareButton from './CompareButton';
import ShareButton from './ShareButton';
import CandidateCardModalHeader from './CandidateCardModalHeader';
import CandidateCardModalDataDesktop from './CandidateCardModalDataDesktop';
import ReadMore from './ReadMore';

function CandidateCardModal() {
  const candidate = useSelector(selectMainCandidate);

  return (
    <div className="bg-soft-white w-96 max-w-full max-h-full overflow-auto">
      <CandidateCardModalHeader candidate={candidate} />
      {candidate.profile && (
        <div className="bg-cultured py-4 px-6 text-sm">
          <ReadMore text={candidate.profile} />
        </div>
      )}
      <div className="py-4 px-6 text-sm">
        {candidate.flags && !!candidate.flags.length && (
          <>
            <p className="text-dim-gray">Banderas</p>
            <ul
              className={`mt-1 mb-4 flex text-xxs uppercase leading-tight items-center space-x-2 flex-shrink-1 max-w-full`}
            >
              {candidate.flags.map((flag, index) => (
                <>
                  <li key={`flag-${index}`}>
                    <span>{flag}</span>{' '}
                  </li>
                  {candidate.flags.length !== index + 1 && <li>•</li>}
                </>
              ))}
            </ul>
          </>
        )}
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
