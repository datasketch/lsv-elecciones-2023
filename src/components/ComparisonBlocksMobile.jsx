import CandidatePhotoOverlay from './CandidatePhotoOverlay';

function ComparisonBlocksMobile({ mainCandidate, secondaryCandidate }) {
  return (
    <div className="pb-6 space-y-8">
      {/*  */}
      <div className="space-y-3">
        <p className="text-sm text-dim-gray text-center">Voto en segunda vuelta 2022</p>
        <div className="grid grid-cols-2">
          <div className="flex items-center space-x-2 border-r border-jet pr-4">
            <div className="relative w-10 flex-shrink-0">
              <CandidatePhotoOverlay candidate={mainCandidate} />
            </div>
            <div className="text-xxs leading-tight sm:text-xs">
              <p>
                {mainCandidate?.secondRoundVote2022}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2 pl-4">
            <div className="relative w-10 flex-shrink-0">
              <CandidatePhotoOverlay candidate={secondaryCandidate} />
            </div>
            <div className="text-xxs leading-tight sm:text-xs">
              <p>
                {secondaryCandidate?.secondRoundVote2022}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="space-y-3">
        <p className="text-sm text-dim-gray text-center">Posición frente al Gobierno Petro</p>
        <div className="grid grid-cols-2">
          <div className="flex items-center space-x-2 border-r border-jet pr-4">
            <div className="relative w-10 flex-shrink-0">
              <CandidatePhotoOverlay candidate={mainCandidate} />
            </div>
            <div className="text-xxs leading-tight sm:text-xs">
              <p>
                {mainCandidate?.positionAgainstThePetroGovernment}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2 pl-4">
            <div className="relative w-10 flex-shrink-0">
              <CandidatePhotoOverlay candidate={secondaryCandidate} />
            </div>
            <div className="text-xxs leading-tight sm:text-xs">
              <p>
                {secondaryCandidate?.positionAgainstThePetroGovernment}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="space-y-3">
        <p className="text-sm text-dim-gray text-center">Aborto legal hasta los 6 meses del embarazo</p>
        <div className="grid grid-cols-2">
          <div className="flex items-center space-x-2 border-r border-jet pr-4">
            <div className="relative w-10 flex-shrink-0">
              <CandidatePhotoOverlay candidate={mainCandidate} />
            </div>
            <div className="text-xxs leading-tight sm:text-xs">
              <p>
                {mainCandidate?.legalAbortionUpToSixMonthsOfPregnancy}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2 pl-4">
            <div className="relative w-10 flex-shrink-0">
              <CandidatePhotoOverlay candidate={secondaryCandidate} />
            </div>
            <div className="text-xxs leading-tight sm:text-xs">
              <p>
                {secondaryCandidate?.legalAbortionUpToSixMonthsOfPregnancy}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="space-y-3">
        <p className="text-sm text-dim-gray text-center">Que las Juntas de Acción Comunal ejecuten grandes obras</p>
        <div className="grid grid-cols-2">
          <div className="flex items-center space-x-2 border-r border-jet pr-4">
            <div className="relative w-10 flex-shrink-0">
              <CandidatePhotoOverlay candidate={mainCandidate} />
            </div>
            <div className="text-xxs leading-tight sm:text-xs">
              <p>
                {mainCandidate?.thatTheJACExecuteLargePublicWorks}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2 pl-4">
            <div className="relative w-10 flex-shrink-0">
              <CandidatePhotoOverlay candidate={secondaryCandidate} />
            </div>
            <div className="text-xxs leading-tight sm:text-xs">
              <p>
                {secondaryCandidate?.thatTheJACExecuteLargePublicWorks}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="space-y-3">
        <p className="text-sm text-dim-gray text-center">EPS manejen recursos públicos</p>
        <div className="grid grid-cols-2">
          <div className="flex items-center space-x-2 border-r border-jet pr-4">
            <div className="relative w-10 flex-shrink-0">
              <CandidatePhotoOverlay candidate={mainCandidate} />
            </div>
            <div className="text-xxs leading-tight sm:text-xs">
              <p>
                {mainCandidate?.EPSMustManagePublicResources}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2 pl-4">
            <div className="relative w-10 flex-shrink-0">
              <CandidatePhotoOverlay candidate={secondaryCandidate} />
            </div>
            <div className="text-xxs leading-tight sm:text-xs">
              <p>
                {secondaryCandidate?.EPSMustManagePublicResources}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="space-y-3">
        <p className="text-sm text-dim-gray text-center">Frenar nueva exploración de petróleo</p>
        <div className="grid grid-cols-2">
          <div className="flex items-center space-x-2 border-r border-jet pr-4">
            <div className="relative w-10 flex-shrink-0">
              <CandidatePhotoOverlay candidate={mainCandidate} />
            </div>
            <div className="text-xxs leading-tight sm:text-xs">
              <p>
                {mainCandidate?.oilExplorationMustBeStopped}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2 pl-4">
            <div className="relative w-10 flex-shrink-0">
              <CandidatePhotoOverlay candidate={secondaryCandidate} />
            </div>
            <div className="text-xxs leading-tight sm:text-xs">
              <p>
                {secondaryCandidate?.oilExplorationMustBeStopped}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="space-y-3">
        <p className="text-sm text-dim-gray text-center">Subir el impuesto predial</p>
        <div className="grid grid-cols-2">
          <div className="flex items-center space-x-2 border-r border-jet pr-4">
            <div className="relative w-10 flex-shrink-0">
              <CandidatePhotoOverlay candidate={mainCandidate} />
            </div>
            <div className="text-xxs leading-tight sm:text-xs">
              <p>
                {mainCandidate?.increasePropertyTax}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2 pl-4">
            <div className="relative w-10 flex-shrink-0">
              <CandidatePhotoOverlay candidate={secondaryCandidate} />
            </div>
            <div className="text-xxs leading-tight sm:text-xs">
              <p>
                {secondaryCandidate?.increasePropertyTax}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="space-y-3">
        <p className="text-sm text-dim-gray text-center">Se deberían regular los medios de comunicación</p>
        <div className="grid grid-cols-2">
          <div className="flex items-center space-x-2 border-r border-jet pr-4">
            <div className="relative w-10 flex-shrink-0">
              <CandidatePhotoOverlay candidate={mainCandidate} />
            </div>
            <div className="text-xxs leading-tight sm:text-xs">
              <p>
                {mainCandidate?.theMediaShouldBeRegulated}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2 pl-4">
            <div className="relative w-10 flex-shrink-0">
              <CandidatePhotoOverlay candidate={secondaryCandidate} />
            </div>
            <div className="text-xxs leading-tight sm:text-xs">
              <p>
                {secondaryCandidate?.theMediaShouldBeRegulated}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="space-y-3">
        <p className="text-sm text-dim-gray text-center">Líos o cuestionamientos</p>
        <div className="grid grid-cols-2">
          <div className="flex items-center space-x-2 border-r border-jet pr-4">
            <div className="relative w-10 flex-shrink-0">
              <CandidatePhotoOverlay candidate={mainCandidate} />
            </div>
            <div className="text-xxs leading-tight sm:text-xs">
              <p>
                {mainCandidate?.hasProblemsOrQuestions}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2 pl-4">
            <div className="relative w-10 flex-shrink-0">
              <CandidatePhotoOverlay candidate={secondaryCandidate} />
            </div>
            <div className="text-xxs leading-tight sm:text-xs">
              <p>
                {secondaryCandidate?.hasProblemsOrQuestions}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  );
}

export default ComparisonBlocksMobile;
