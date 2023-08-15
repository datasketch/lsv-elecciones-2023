import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';
import {
  filterGroup,
  selectGender,
  selectAgeRanges,
  selectSectors,
  selectHasProblemOrQuestions,
  selectPositionAgainstThePetroGovernment,
  selectHasHeldPublicOffice,
} from '../../features/candidates/candidates-slice';
import FilterCheckbox from './FilterCheckbox';
import AppButton from '../AppButton';

function FilterGroup() {
  const [isOpened, setIsOpened] = useState(false);
  const sectors = useSelector(selectSectors);
  const genders = useSelector(selectGender);
  const ages = useSelector(selectAgeRanges);
  const hasProblemOrQuestions = useSelector(selectHasProblemOrQuestions);
  const positionAgainstThePetroGovernment = useSelector(selectPositionAgainstThePetroGovernment);
  const hasHeldPublicOffice = useSelector(selectHasHeldPublicOffice);

  const dispatch = useDispatch();
  const containerRef = useRef(null);

  useEffect(() => {
    const clickHandler = (e) => {
      const { target } = e;
      if (!containerRef.current.contains(target)) {
        setIsOpened(false);
      }
    };
    if (isOpened) {
      document.addEventListener('click', clickHandler);
    }
    return () => document.removeEventListener('click', clickHandler);
  }, [isOpened]);

  const handleSubmit = (e) => {
    const formData = new FormData(e.target);
    const choices = {};
    // eslint-disable-next-line no-restricted-syntax
    for (const [name, value] of formData.entries()) {
      choices[name] = choices[name] || [];
      choices[name].push(value);
    }
    dispatch(filterGroup(choices));
    setIsOpened(false);
    e.preventDefault();
  };

  return (
    <div className="md:relative" ref={containerRef}>
      <button
        className="border border-dodger-blue text-dodger-blue text-sm py-2 pl-3 pr-10 bg-no-repeat"
        aria-haspopup="true"
        aria-expanded={isOpened}
        onClick={() => setIsOpened(!isOpened)}
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 20 20%27%3e%3cpath stroke=%27%236b7280%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%271.5%27 d=%27M6 8l4 4 4-4%27/%3e%3c/svg%3e")',
          backgroundSize: '1.5em 1.5em',
          backgroundPosition: 'right 0.5rem center',
        }}
        type="button"
      >
        Otros
      </button>
      <form
        className={classNames(
          'absolute w-11/12 z-10 left-1/2 -translate-x-1/2 bg-soft-white text-jet mt-1 text-left px-4 pr-10 py-2 md:w-fit md:left-48 lg:-left-20 lg:translate-x-0',
          { hidden: !isOpened },
        )}
        onSubmit={handleSubmit}
        style={{
          boxShadow: '0 6px 11px #00000042',
        }}
      >
        <div className="flex flex-col sm:flex-row gap-x-4">
          <div className="sm:w-1/2 sm:border-r sm:border-bone pr-4">
            <FilterCheckbox
              label="Sector"
              options={sectors}
              name="backgroundSector"
            />
            <div className="mt-3">
              <FilterCheckbox
                label="Posición frente al Gobierno"
                options={positionAgainstThePetroGovernment}
                name="positionAgainstThePetroGovernment"
              />
            </div>
          </div>
          <div className="sm:w-1/2 flex flex-col justify-between">
            <div>
              <FilterCheckbox label="Género" options={genders} name="gender" />
              <div className="mt-3">
                <FilterCheckbox
                  label="Rango de edad"
                  options={ages}
                  name="ageRange"
                />
              </div>
              <div className="mt-3">
                <FilterCheckbox
                  label="Ha tenido un cargo público"
                  options={hasHeldPublicOffice}
                  name="hasHeldPublicOffice"
                />
              </div>
              <div className="mt-3">
                <FilterCheckbox
                  label="Líos y cuestionamientos"
                  options={hasProblemOrQuestions}
                  name="hasProblemsOrQuestions"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <AppButton label="Aplicar" type="submit" />
        </div>
      </form>
    </div>
  );
}

export default FilterGroup;
