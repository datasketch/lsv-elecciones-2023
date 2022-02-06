import { useState } from 'react';
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
import FilterSearch from './FilterSearch';
import FilterView from './FilterView';

function FiltersSection() {
  const dispatch = useDispatch();
  const parties = useSelector(selectParties);
  const departments = useSelector(selectDepartments);
  const offices = useSelector(selectOffices);
  const supportedPresidentialCandidates = useSelector(
    selectSupportedPresidentialCandidate
  );

  const [grid, setGrid] = useState(true)

  return (
    <div className="flex flex-col py-6 space-y-4 xl:flex-row xl:space-y-0 xl:space-x-4">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <FilterSelect
          id="camara"
          label="Cámara"
          options={offices}
          onChange={(e) => dispatch(filterByOffice(e.target.value))}
          className="hidden md:block"
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
          label="Candidato presidencial al que apoya"
          options={supportedPresidentialCandidates}
          onChange={(e) =>
            dispatch(filterBySupportedCandidatePresidential(e.target.value))
          }
          className="hidden md:block"
        />
      </div>
      <div className="flex md:items-end md:space-x-4">
        <FilterGroup />
        <FilterSearch />
        <div className='flex space-x-2 ml-2 md:hidden'>
          <FilterView grid={grid} onClick={v => setGrid(v)} />
        </div>
      </div>
    </div>
  );
}

export default FiltersSection;
