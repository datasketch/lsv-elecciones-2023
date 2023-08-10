import classNames from 'classnames';
import CandidatePhotoOverlay from './candidates/CandidatePhotoOverlay';

function CandidateCardExpanded({
  candidate,
  highlight = false,
  onClick = () => {},
}) {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      className={classNames(
        'flex p-2 gap-x-3 items-center bg-cultured shadow-sm',
        {
          'opacity-25': highlight && !candidate.highlight,
        },
      )}
      role="button"
      tabIndex={0}
      onClick={onClick}
    >
      <div className="flex-shrink-0 w-12 relative">
        <CandidatePhotoOverlay candidate={candidate} />
      </div>
      <div className="flex-grow min-w-0">
        <div
          className="flex justify-between text-xs gap-x-2"
          title={candidate.party.label}
        >
          <span className="sm:truncate">{candidate.party.label}</span>
          <span className="text-dodger-blue">{candidate.department}</span>
        </div>
        <p className="text-sm sm:truncate sm:text-base leading-tight" title={candidate.fullname}>
          {candidate.fullname}
        </p>
      </div>
    </div>
  );
}

export default CandidateCardExpanded;
