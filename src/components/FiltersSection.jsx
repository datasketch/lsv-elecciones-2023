import { useDispatch, useSelector } from 'react-redux';
import {
  filterByDepartment,
  selectParties,
  selectDepartments,
  filterByParty,
  selectSupportedPresidentialCandidate,
  filterBySupportedCandidatePresidential,
  selectOffices,
  filterByOffice,
} from '../features/candidates/candidates-slice';
import FilterSelect from './FilterSelect';
import FilterGroup from './FilterGroup';

function FiltersSection() {
  const dispatch = useDispatch();
  const parties = useSelector(selectParties);
  const departments = useSelector(selectDepartments);
  const offices = useSelector(selectOffices);
  const supportedPresidentialCandidates = useSelector(
    selectSupportedPresidentialCandidate
  );

  return (
    <div className="flex items-end space-x-4 py-6">
      <FilterSelect
        id="camara"
        label="Cámara"
        options={offices}
        onChange={(e) => dispatch(filterByOffice(e.target.value))}
      />
      <FilterSelect
        id="departamento"
        label="Departamento"
        options={departments}
        onChange={(e) => dispatch(filterByDepartment(e.target.value))}
      />
      <FilterSelect
        id="partido"
        label="Partido"
        options={parties}
        onChange={(e) => dispatch(filterByParty(e.target.value))}
      />
      <FilterSelect
        id="candidato-que-apoya"
        label="Candidato presidencial al que apota"
        options={supportedPresidentialCandidates}
        onChange={(e) =>
          dispatch(filterBySupportedCandidatePresidential(e.target.value))
        }
      />
      <FilterGroup />
    </div>
  );
}

export default FiltersSection;
