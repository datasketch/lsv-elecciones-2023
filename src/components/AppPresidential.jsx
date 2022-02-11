import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { toggleMainModalWindow } from '../features/modal/modal-slice';
import {
  selectPresidentialCandidatesWithCoalition,
  selectPresidentialCandidatesWithoutCoalition,
} from '../features/presidential/presidential-slice';
import PoweredBy from './PoweredBy';
import CandidateList from './presidential/CandidateList';

function AppPresidential() {
  const dispatch = useDispatch();
  const candidates = useSelector(selectPresidentialCandidatesWithCoalition);
  const other = useSelector(selectPresidentialCandidatesWithoutCoalition);

  return (
    <>
      <CandidateList candidates={candidates} />
      <div className="py-8 flex flex-col lg:flex-row lg:items-start lg:space-x-6">
        <div className="lg:w-1/2">
          <h2 className="font-martin uppercase text-5xl lg:text-6xl">
            Candidatos fuera de consultas
          </h2>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu feugiat nulla
            facilisis at vero eros et accumsan et iusto odio dignissim qui
            blandit praesent luptatum zzril delenit augue duis dolore.
          </p>
        </div>
        <div className="lg:w-1/2">
          <div className="presidential-column mt-6">
            {other.map((candidate) => (
              <button
                className="inline-flex flex-col w-28"
                key={candidate.id}
                onClick={() => dispatch(toggleMainModalWindow(candidate))}
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
      <PoweredBy />
    </>
  );
}

export default AppPresidential;
