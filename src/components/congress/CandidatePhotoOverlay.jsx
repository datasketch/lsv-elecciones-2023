import { useSelector } from 'react-redux';
import { selectActiveTab } from '../../features/nav/nav-slice';

// Parent must have a relative position
function CandidatePhotoOverlay({ candidate }) {
  const activeTab = useSelector(selectActiveTab);
  return (
    <>
      <img
        src={candidate.photo}
        className="max-w-full"
        alt={candidate.fullname}
      />
      {activeTab === 'congreso' && (
        <span
          className="absolute top-0 left-0 w-full h-full opacity-30"
          style={{ backgroundColor: candidate.party.color }}
        ></span>
      )}
    </>
  );
}

export default CandidatePhotoOverlay;
