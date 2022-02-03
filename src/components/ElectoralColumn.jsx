import CandidateCard from './CandidateCard';

function ElectoralColumn({ label, candidates }) {
  return (
    <div className="pb-2">
      <div
        className="grid gap-2 grid-flow-col content-start auto-cols-max"
        style={{ gridTemplateRows: 'repeat(10, 40px)' }}
      >
        {candidates.map((candidate) => (
          <CandidateCard candidate={candidate} key={candidate.id} />
        ))}
      </div>
      <p className="uppercase text-center mt-4 text-jet font-martin text-2xl">
        {label}
      </p>
    </div>
  );
}

export default ElectoralColumn;
