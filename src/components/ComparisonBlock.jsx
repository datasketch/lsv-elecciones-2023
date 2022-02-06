import CandidatePhotoOverlay from './CandidatePhotoOverlay';

function ComparisonBlock({ label, mainCandidate, secondaryCandidate, field }) {
  return (
    <div>
      <p className="text-dark-slate-blue text-center">{label}</p>
      <div className="grid grid-cols-2 mt-3">
        <div className="flex items-center space-x-2 border-r border-jet pr-4">
          <div className="relative w-10">
            <CandidatePhotoOverlay candidate={mainCandidate} />
          </div>
          <p className="text-sm">{mainCandidate[field]}</p>
        </div>
        {secondaryCandidate && (
          <div className="flex items-center space-x-2 pl-4">
            <div className="relative w-10">
              <CandidatePhotoOverlay candidate={secondaryCandidate} />
            </div>
            <p className="text-sm">{secondaryCandidate[field]}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ComparisonBlock;
