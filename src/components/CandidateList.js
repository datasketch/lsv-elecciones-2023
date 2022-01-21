import { useSelector } from "react-redux";
import { selectAllCandidates } from "../features/candidates/candidates-slice";

function CandidateList() {
  const candidates = useSelector(selectAllCandidates);

  return (
    <>
      <h2>Candidatos</h2>
      <ul>
        {candidates.map((candidate) => {
          return (
            <li key={candidate.id}>
              <p>
                {candidate.fullname} ({candidate.department})
              </p>
              <p>
                {candidate.office} - {candidate.party}
              </p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default CandidateList;
