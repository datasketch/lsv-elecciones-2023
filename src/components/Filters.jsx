import { useDispatch, useSelector } from 'react-redux';
import {
  filterByDepartment,
  selectParties,
  selectDepartments,
  filterByParty,
  selectSupportedPresidentialCandidate,
  filterBySupportedCandidatePresidential,
} from '../features/candidates/candidates-slice';

function Filters() {
  const dispatch = useDispatch();
  const parties = useSelector(selectParties);
  const departments = useSelector(selectDepartments);
  const supportedPresidentialCandidates = useSelector(
    selectSupportedPresidentialCandidate
  );

  return (
    <div className="flex items-start justify-between py-6">
      <div className="flex items-start space-x-4">
        <div>
          <p className="uppercase text-xxs">Cámara</p>
          <select
            className="border border-dodger-blue rounded-md text-dodger-blue text-sm"
            onChange={(e) => dispatch(filterByDepartment(e.target.value))}
          >
            <option value="">Todos</option>
            {departments.map((d, i) => (
              <option key={'d-' + i} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>
        <div>
          <p className="uppercase text-xxs">Partido</p>
          <select
            className="border border-dodger-blue rounded-md text-dodger-blue text-sm"
            onChange={(e) => dispatch(filterByParty(e.target.value))}
          >
            <option value="">Todos</option>
            {parties.map((p, i) => (
              <option key={'p-' + i} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
        <div>
          <p className="uppercase text-xxs">
            Candidato presidencial al que apoya
          </p>
          <select
            className="border border-dodger-blue rounded-md text-dodger-blue text-sm"
            onChange={(e) =>
              dispatch(filterBySupportedCandidatePresidential(e.target.value))
            }
          >
            <option value="">Todos</option>
            {supportedPresidentialCandidates.map((d, i) => (
              <option key={'spc-' + i} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="">
        <p className="uppercase text-xxs">Otros</p>
        <select
          className="border border-dodger-blue rounded-md text-dodger-blue text-sm"
          onChange={(e) => dispatch(filterByDepartment(e.target.value))}
        >
          <option value="">Todos</option>
          {departments.map((d, i) => (
            <option key={'d-' + i} value={d}>
              {d}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Filters;

/* <h2 className="text-xl font-bold">Elecciones</h2>
<select onChange={(e) => dispatch(filterByOffice(e.target.value))}>
  <option value="">Todos</option>
  {offices.map((office) => (
    <option key={office} value={office}>
      {office}
    </option>
  ))}
</select> */
