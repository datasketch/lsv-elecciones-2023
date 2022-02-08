// Parent must have a relative position
function CandidatePhotoOverlay({ candidate }) {
  return (
    <>
      <img
        src={candidate.photo}
        className="max-w-full"
        alt={candidate.fullname}
      />
      <span
        className="absolute top-0 left-0 w-full h-full opacity-30"
        style={{ backgroundColor: candidate.party.color }}
      ></span>
    </>
  );
}

export default CandidatePhotoOverlay;
