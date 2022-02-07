import { useSelector } from 'react-redux';
import { selectBlocks } from '../features/modal/modal-slice';

function ComparisonBlocksDesktop({ mainCandidate, secondaryCandidate }) {
  const blocks = useSelector(selectBlocks);

  return (
    <div className="grid grid-cols-2">
      <div className="space-y-4 border-r border-sonic-silver">
        {blocks.map(([label, field], index) => (
          <div key={`block-main-${index}`}>
            <p className="text-dark-slate-blue">{label}</p>
            <p className="text-sm">{mainCandidate[field]}</p>
          </div>
        ))}
      </div>
      <div className="space-y-4 pl-6">
        {blocks.map(([label, field], index) => (
          <div key={`block-secondary-${index}`}>
            <p className="text-dark-slate-blue">{label}</p>
            <p className="text-sm">{secondaryCandidate[field]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ComparisonBlocksDesktop;
