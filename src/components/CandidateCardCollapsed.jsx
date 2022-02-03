import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import Tippy from '@tippyjs/react/headless';
import { followCursor } from 'tippy.js';
import CandidateCardExpanded from './CandidateCardExpanded';
import { showCandidateCard } from '../features/modal/modal-slice';

function CandidateCardCollapsed({ candidate }) {
  const dispatch = useDispatch();
  return (
    <Tippy
      render={(attrs) => <CandidateCardExpanded candidate={candidate}/>}
      placement="auto"
      followCursor={true}
      plugins={[followCursor]}
    >
      <button
        className={classNames('w-10 flex-grow-0', {
          'opacity-25': !candidate.highlight,
        })}
        onClick={() => dispatch(showCandidateCard(candidate))}
        data-tip
        data-for="card"
      >
        <img
          src={candidate.photo}
          className="max-w-full"
          alt={candidate.fullname}
        />
      </button>
    </Tippy>
  );
}

export default CandidateCardCollapsed;
