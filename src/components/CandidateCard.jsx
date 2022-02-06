import { useSelector } from 'react-redux';
import { selectGridView } from '../features/view/view-slice';
import CandidateCardCollapsed from './CandidateCardCollapsed';
import CandidateCardExpanded from './CandidateCardExpanded';

function CandidateCard({ candidate }) {
  const grid = useSelector(selectGridView);
  return grid ? (
    <CandidateCardCollapsed candidate={candidate} />
  ) : (
    <CandidateCardExpanded candidate={candidate} />
  );
}

export default CandidateCard;
