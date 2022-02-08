import { useSelector } from 'react-redux';
import { selectPresidentialCandidatesWithCoalition } from '../features/presidential/presidential-slice';
import CoalitionHeader from './presidential/CoalitionHeader';

function AppPresidential() {
  const candidates = useSelector(selectPresidentialCandidatesWithCoalition);
  return (
    <>
      {/* <div className="hidden md:block pb-2 border-b border-sonic-silver">
        <div className="flex justify-between">
          {
            Object.entries(candidates).map(([label]) => (
              <CoalitionHeader label={label} key={label} />
            ))
          }
        </div>
      </div> */}
      <div className="border-b-2 border-jet grid grid-cols-1 py-8 md:grid-cols-3 md:gap-6">
        {Object.entries(candidates).map(([label, c]) => (
          <div key={label}>
            <CoalitionHeader label={label} />
            <div className="presidential-column mt-6">
              {c.map((candidate) => (
                <button
                  className="inline-flex flex-col w-28"
                  key={candidate.id}
                  onClick={() => {}}
                >
                  <img
                    src={candidate.photo}
                    className="max-w-full h-28"
                    alt={candidate.fullname}
                  />
                  <span className="text-xs leading-tight">
                    {candidate.fullname}
                  </span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default AppPresidential;
