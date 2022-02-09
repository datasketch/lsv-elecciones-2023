import CandidateCardModalDataDesktop from './CandidateCardModalDataDesktop';

function ComparisonBlocksDesktop({ mainCandidate, secondaryCandidate }) {
  return (
    <div className="grid grid-cols-2">
      <div className="border-r border-sonic-silver">
        <CandidateCardModalDataDesktop candidate={mainCandidate} />
      </div>
      <div className="pl-6">
        <CandidateCardModalDataDesktop candidate={secondaryCandidate} />
      </div>
    </div>
  );
}

export default ComparisonBlocksDesktop;
