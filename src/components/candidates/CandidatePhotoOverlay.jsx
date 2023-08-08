function CandidatePhotoOverlay({ candidate }) {
  function handleImageError(e) {
    e.target.src = 'https://www.lasillavacia.com/media/candidato-nn-h.jpg';
  }

  return (
    <>
      <img
        src={candidate.photo}
        className="max-w-full w-full h-full"
        alt=""
        onError={handleImageError}
      />
      <span
        className="absolute top-0 left-0 w-full h-full opacity-30"
        style={{ backgroundColor: candidate.party.color }}
      />
    </>
  );
}

export default CandidatePhotoOverlay;
