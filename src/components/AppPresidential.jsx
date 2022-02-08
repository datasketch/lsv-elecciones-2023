import { useSelector } from 'react-redux';
import {
  selectPresidentialCandidatesWithCoalition,
  selectPresidentialCandidatesWithoutCoalition,
} from '../features/presidential/presidential-slice';
import PoweredBy from './PoweredBy';
import CoalitionHeader from './presidential/CoalitionHeader';

function AppPresidential() {
  const candidates = useSelector(selectPresidentialCandidatesWithCoalition);
  const other = useSelector(selectPresidentialCandidatesWithoutCoalition);

  return (
    <>
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
      <div className="py-8 flex flex-col lg:flex-row lg:items-start lg:space-x-6">
        <div className="lg:w-1/2">
          <h2 className="font-martin uppercase text-5xl lg:text-6xl">
            ¿No encontró a su candidato?
          </h2>
          <p className='mt-4'>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
            molestie consequat, vel illum dolore eu feugiat nulla facilisis at
            vero eros et accumsan et iusto odio dignissim qui blandit praesent
            luptatum zzril delenit augue duis dolore.
          </p>
        </div>
        <div className="lg:w-1/2">
          <div className="presidential-column mt-6">
            {other.map((candidate) => (
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
      </div>
      <PoweredBy large />
    </>
  );
}

export default AppPresidential;
