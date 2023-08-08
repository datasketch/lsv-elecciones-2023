import { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSortedCongressCandidates } from '../features/candidates/candidates-slice';
import { toggleComparisonModalWindow } from '../features/modal/modal-slice';
import { selectActiveTab } from '../features/nav/nav-slice';
import ComparisonBlocksMobile from './ComparisonBlocksMobile';

function ComparisonModalMobile({
  mainCandidate,
  secondaryCandidate,
  onChange,
}) {
  const dispatch = useDispatch();
  const congressCandidates = useSelector(selectSortedCongressCandidates);

  const activeTab = useSelector(selectActiveTab);
  const [candidates, setCandidates] = useState([]);
  const container = useRef();

  useEffect(() => {
    const selected = activeTab === 'congreso' && congressCandidates;
    setCandidates(selected);
  }, [activeTab, congressCandidates, setCandidates]);

  useEffect(() => {
    container.current.scrollTo(0, 0);
  });

  return (
    <div className="bg-white w-full h-full max-h-full px-6 py-4 overflow-auto lg:hidden" ref={container}>
      <button
        className="text-dodger-blue"
        onClick={() => dispatch(toggleComparisonModalWindow())}
        type="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 stroke-current inline-block"
          viewBox="0 0 24 24"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M0 0h24v24H0z" stroke="none" />
          <path d="m15 6-6 6 6 6" />
        </svg>
        <span className="underline">Volver</span>
      </button>
      <p className="font-martin text-center text-5xl uppercase text-jet mt-6">
        Compare candidatos
      </p>
      <div className="grid grid-cols-2 gap-4 py-6">
        <div className="border border-dodger-blue text-dodger-blue text-sm py-2 px-3">
          {mainCandidate.fullname}
        </div>
        <select
          name=""
          id=""
          className="border border-dodger-blue text-dodger-blue text-sm w-full"
          onChange={onChange}
        >
          <option value="">Compare con</option>
          {candidates.map((candidate) => (
            <option
              value={candidate.fullname}
              key={candidate.id}
              data-info={JSON.stringify(candidate)}
            >
              {candidate.fullname}
            </option>
          ))}
        </select>
      </div>
      <div className="pb-6 space-y-8">
        <ComparisonBlocksMobile
          mainCandidate={mainCandidate}
          secondaryCandidate={secondaryCandidate}
        />
      </div>
    </div>
  );
}

export default ComparisonModalMobile;
