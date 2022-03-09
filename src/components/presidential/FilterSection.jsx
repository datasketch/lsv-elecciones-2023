import { useDispatch, useSelector } from 'react-redux';
import {
  filterByOppositionOrSupportToGovernment,
  filterByRaiseToWealthTax,
  filterByResponsibilityForDecisiveDecisionsForTheCountry,
  filterBySupportToStrike,
  filterByVoteInPlebiscite,
  selectOppositionOrSupportToGovernment,
  selectRaiseWealthTax,
  selectResponsibilityForDecisiveDecisionsForTheCountry,
  selectSupportToStrike,
  selectVoteInPlebiscite,
} from '../../features/presidential/presidential-slice';
import FilterSelect from '../congress/FilterSelect';

function FiltersSection() {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col py-6 space-y-4 xl:flex-row xl:space-y-0 xl:space-x-4 xl:justify-center">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-5">
        <FilterSelect
          id="apoyo-el-paro"
          label="Apoyó el paro"
          className="order-1"
          options={useSelector(selectSupportToStrike)}
          onChange={(e) => dispatch(filterBySupportToStrike(e.target.value))}
          placeholder="Seleccione una opción"
        />
        <FilterSelect
          id="subir-impuesto-patrimonio"
          label="Subir el impuesto al patrimonio"
          className="order-3 lg:order-2"
          options={useSelector(selectRaiseWealthTax)}
          onChange={(e) => dispatch(filterByRaiseToWealthTax(e.target.value))}
          placeholder="Seleccione una opción"
        />
        <FilterSelect
          id="apoyo-oposicion-gobierno"
          label="Oposición o apoyo a gobierno Duque"
          className="order-4 lg:order-3"
          options={useSelector(selectOppositionOrSupportToGovernment)}
          onChange={(e) => dispatch(filterByOppositionOrSupportToGovernment(e.target.value))}
          placeholder="Seleccione una opción"
        />
        <FilterSelect
          id="voto-en-plebiscito"
          label="Voto plebiscito"
          className="order-2 lg:order-4"
          options={useSelector(selectVoteInPlebiscite)}
          onChange={(e) => dispatch(filterByVoteInPlebiscite(e.target.value))}
          placeholder="Seleccione una opción"
        />
        <FilterSelect
          id="responsabilidad-estado"
          label="Responsabilidad en el estado"
          className="order-5"
          options={useSelector(selectResponsibilityForDecisiveDecisionsForTheCountry)}
          onChange={(e) => dispatch(
            filterByResponsibilityForDecisiveDecisionsForTheCountry(e.target.value),
          )}
          placeholder="Seleccione una opción"
        />
      </div>
    </div>
  );
}

export default FiltersSection;
