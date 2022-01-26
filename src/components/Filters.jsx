import { useDispatch, useSelector } from 'react-redux';
import {
  filterByDepartment,
  filterByOffice,
  selectParties,
  selectDepartments,
  selectOffices,
  filterByParty,
} from '../features/candidates/candidates-slice';

function Filters() {
  const dispatch = useDispatch();
  const offices = useSelector(selectOffices);
  const parties = useSelector(selectParties);
  const departments = useSelector(selectDepartments);

  return (
    <div>
      <h2 className="text-xl font-bold">Elecciones</h2>
      <select onChange={(e) => dispatch(filterByOffice(e.target.value))}>
        <option value="">Todos</option>
        {offices.map((office) => (
          <option key={office} value={office}>
            {office}
          </option>
        ))}
      </select>
      <hr />
      <h2 className="text-xl font-bold">Departamentos</h2>
      <select onChange={(e) => dispatch(filterByDepartment(e.target.value))}>
        <option value="">Todos</option>
        {departments.map((d, i) => (
          <option key={'d-' + i} value={d}>
            {d}
          </option>
        ))}
      </select>
      <hr />
      <h2 className="text-xl font-bold">Partido político</h2>
      <select onChange={(e) => dispatch(filterByParty(e.target.value))}>
        <option value="">Todos</option>
        {parties.map((p, i) => (
          <option key={'p-' + i} value={p}>
            {p}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filters;
