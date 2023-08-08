import { useDispatch, useSelector } from 'react-redux';
import { selectGridView } from '../../features/view/view-slice';
import CandidateCardCollapsed from './CandidateCardCollapsed';
import CandidateCardExpanded from './CandidateCardExpanded';
import { toggleMainModalWindow } from '../../features/modal/modal-slice';

function CandidateCard({ candidate }) {
  const grid = useSelector(selectGridView);
  const dispatch = useDispatch();

  return grid ? (
    <CandidateCardCollapsed candidate={candidate} />
  ) : (
    <CandidateCardExpanded
      candidate={candidate}
      onClick={() => dispatch(toggleMainModalWindow(candidate))}
      highlight
    />
  );
}

export default CandidateCard;
