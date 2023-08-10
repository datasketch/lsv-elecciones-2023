function CandidateCardModalDataDesktop({ candidate }) {
  return (
    <ul className="space-y-4">
      {candidate.flags && (
        <li>
          <p className="text-dim-gray">Banderas</p>
          <p>{candidate.flags}</p>
        </li>
      )}
      {
        candidate.positionAgainstThePetroGovernment && (
          <li>
            <p className="text-dim-gray">Posición frente al Gobierno Petro</p>
            <p>{candidate.positionAgainstThePetroGovernment}</p>
          </li>
        )
      }
      {
        candidate.legalAbortionUpToSixMonthsOfPregnancy && (
          <li>
            <p className="text-dim-gray">Aborto legal hasta los 6 meses del embarazo</p>
            <p>{candidate.legalAbortionUpToSixMonthsOfPregnancy}</p>
          </li>
        )
      }
      {
        candidate.thatTheJACExecuteLargePublicWorks && (
          <li>
            <p className="text-dim-gray">Que las Juntas de Acción Comunal ejecuten grandes obras</p>
            <p>{candidate.thatTheJACExecuteLargePublicWorks}</p>
          </li>
        )
      }
      {
        candidate.EPSMustManagePublicResources && (
          <li>
            <p className="text-dim-gray">EPS manejen recursos públicos</p>
            <p>{candidate.EPSMustManagePublicResources}</p>
          </li>
        )
      }
      {
        candidate.oilExplorationMustBeStopped && (
          <li>
            <p className="text-dim-gray">Frenar nueva exploración de petróleo</p>
            <p>{candidate.oilExplorationMustBeStopped}</p>
          </li>
        )
      }
      {
        candidate.increasePropertyTax && (
          <li>
            <p className="text-dim-gray">Subir el impuesto predial</p>
            <p>{candidate.increasePropertyTax}</p>
          </li>
        )
      }
      {
        candidate.theMediaShouldBeRegulated && (
          <li>
            <p className="text-dim-gray">Se deberían regular los medios de comunicación</p>
            <p>{candidate.theMediaShouldBeRegulated}</p>
          </li>
        )
      }
      {
        candidate.hasProblemsOrQuestions && (
          <li>
            <p className="text-dim-gray">Líos o cuestionamientos</p>
            <p>{candidate.hasProblemsOrQuestions}</p>
          </li>
        )
      }
    </ul>
  );
}

export default CandidateCardModalDataDesktop;
