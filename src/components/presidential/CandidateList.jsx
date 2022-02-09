import CoalitionHeader from './CoalitionHeader';
import ElectoralColumn from './ElectoralColumn';

function CandidateList({ candidates }) {
  return (
    <div className="border-b-2 border-jet grid grid-cols-1 py-8 md:grid-cols-3 md:gap-6">
      {Object.entries(candidates).map(([label, c]) => (
        <div key={label}>
          <CoalitionHeader label={label} />
          <ElectoralColumn candidates={c} />
        </div>
      ))}
    </div>
  );
}

export default CandidateList;
