import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import Tippy from '@tippyjs/react/headless';
import { followCursor } from 'tippy.js';
import CandidateCardExpanded from './CandidateCardExpanded';
import CandidatePhotoOverlay from './CandidatePhotoOverlay';
import { toggleMainModalWindow } from '../../features/modal/modal-slice';

function CandidateCardCollapsed({ candidate }) {
  const dispatch = useDispatch();
  return (
    // See https://atomiks.github.io/tippyjs/v6/accessibility/#interactivity
    <div className="w-7 h-7 relative">
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
          className={classNames('w-full h-full', {
            'opacity-25': !candidate.highlight,
          })}
          onClick={() => dispatch(toggleMainModalWindow(candidate))}
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
