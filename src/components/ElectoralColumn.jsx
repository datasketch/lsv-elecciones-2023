import CandidateCard from './CandidateCard';

function ElectoralColumn({ label, candidates }) {
  return (
    <div
      className="grid gap-2 grid-flow-col content-start auto-cols-max"
      style={{ gridTemplateRows: 'repeat(11, 36px)' }}
    >
      {candidates.map((candidate) => (
        <CandidateCard candidate={candidate} key={candidate.id} />
      ))}
    </div>
  );
}

export default ElectoralColumn;
