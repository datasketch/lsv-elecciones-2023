/* eslint-disable no-console */
import { useDispatch, useSelector } from 'react-redux';
import {
  selectDepartments,
  filterByDepartment,
  selectCities,
  filterByCity,
  selectCandidacies,
  filterByCandidacy,
} from '../features/candidates/candidates-slice';
import FilterSelect from './FilterSelect';
import FilterGroup from './candidates/FilterGroup';
import FilterSearch from './candidates/FilterSearch';
import FilterView from './candidates/FilterView';
import { selectGridView } from '../features/view/view-slice';

function FiltersSection() {
  const dispatch = useDispatch();
  const departments = useSelector(selectDepartments);
  const cities = useSelector(selectCities);
  const candidacies = useSelector(selectCandidacies);
  const grid = useSelector(selectGridView);

  return (
    <div className="flex flex-col py-6 gap-y-4 lg:flex-row lg:gap-y-0 lg:gap-x-4 lg:justify-between">
      <div className="lg:w-1/2 grid grid-cols-2 gap-4 lg:grid-cols-3">
        <FilterSelect
          id="departamento"
          label="Departamento"
          options={departments}
          onChange={(e) => dispatch(filterByDepartment(e.target.value))}
        />
        <FilterSelect
          id="ciudad"
          label="Ciudad"
          options={cities}
          onChange={(e) => dispatch(filterByCity(e.target.value))}
        />
        <FilterSelect
          id="cargo"
          label="Cargo"
          options={candidacies}
          onChange={(e) => dispatch(filterByCandidacy(e.target.value))}
        />
      </div>
      <div className="flex md:items-end md:gap-x-4">
        <FilterGroup />
        <FilterSearch />
        <div className="flex gap-x-2 ml-2 md:hidden">
          <FilterView grid={grid} />
        </div>
      </div>
    </div>
  );
}

export default FiltersSection;
