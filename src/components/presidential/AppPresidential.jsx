import { useDispatch, useSelector } from 'react-redux';
import { toggleMainModalWindow } from '../../features/modal/modal-slice';
import {
  selectPresidentialCandidatesWithCoalition,
  selectPresidentialCandidatesWithoutCoalition,
} from '../../features/presidential/presidential-slice';
import PoweredBy from '../PoweredBy';
import CandidateList from './CandidateList';

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
            En el 2022 las consultas se volvieron la primera vuelta de unas
            presidenciales que ahora son de tres vueltas. Pero hay candidatos
            que decidieron no participar o no encontraron espacio dentro de las
            coaliciones. Ellos aspiran a llegar a primera vuelta sin el impulso
            de la campaña a las elecciones de marzo. Serán figuras claves en el
            juego posterior, el de las posibles alianzas y adhesiones.
          </p>
        </div>
        <div className="lg:w-1/2">
          <div className="presidential-column mt-6">
            {other.map((candidate) => (
              <button
                className="inline-flex flex-col w-28"
                key={candidate.id}
                onClick={() => dispatch(toggleMainModalWindow(candidate))}
                type="button"
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
