import { useDispatch, useSelector } from 'react-redux';
import {
  filterByDepartment,
  filterByOffice,
  selectDepartments,
  selectOffices,
} from '../features/candidates/candidates-slice';

function Filters() {
  const dispatch = useDispatch();
  const offices = useSelector(selectOffices);
  const departments = useSelector(selectDepartments);

  return (
    <div>
      <h3>Elecciones</h3>
      <select onChange={(e) => dispatch(filterByOffice(e.target.value))}>
        <option value="">Todos</option>
        {offices.map((office) => (
          <option key={office} value={office}>
            {office}
          </option>
        ))}
      </select>
      <h3>Departamentos</h3>
      <select onChange={(e) => dispatch(filterByDepartment(e.target.value))}>
        <option value="">Todos</option>
        {departments.map((d, i) => (
          <option key={'d-' + i} value={d}>
            {d}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filters;
