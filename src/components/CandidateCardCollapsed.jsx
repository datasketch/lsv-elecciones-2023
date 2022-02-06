import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import Tippy from '@tippyjs/react/headless';
import { followCursor } from 'tippy.js';
import CandidateCardExpanded from './CandidateCardExpanded';
import CandidatePhotoOverlay from './CandidatePhotoOverlay';
import { showCandidateCard } from '../features/modal/modal-slice';

function CandidateCardCollapsed({ candidate }) {
  const dispatch = useDispatch();
  return (
    // See https://atomiks.github.io/tippyjs/v6/accessibility/#interactivity
    <div>
      <Tippy
        render={(attrs) => (
          <CandidateCardExpanded candidate={candidate} {...attrs} />
        )}
        placement="auto"
        touch={false}
        followCursor={true}
        plugins={[followCursor]}
      >
        <button
          className={classNames('w-9 h-9 relative', {
            'opacity-25': !candidate.highlight,
          })}
          onClick={() => dispatch(showCandidateCard(candidate))}
          data-tip
          data-for="card"
        >
          <CandidatePhotoOverlay candidate={candidate} />
        </button>
      </Tippy>
    </div>
  );
}

export default CandidateCardCollapsed;
