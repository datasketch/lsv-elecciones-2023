import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectFeaturedCandidate, toggleComparisonModalWindow } from "../features/modal/modal-slice";

function ComparisonModal() {
    const featuredCandidate = useSelector(selectFeaturedCandidate)
    const candidates = useSelector(state => state.candidates.filtered)
    const dispatch = useDispatch()

    return (
        <div className="bg-white w-full h-full px-6 py-4">
            <button className="text-dodger-blue" onClick={() => dispatch(toggleComparisonModalWindow())}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 stroke-current inline-block" viewBox="0 0 24 24" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M0 0h24v24H0z" stroke="none"/><path d="m15 6-6 6 6 6"/></svg>
                <span className="underline">Volver</span>
            </button>
            <p className="font-martin text-center text-5xl uppercase text-jet mt-6">Compara candidatos</p>
            <div className="grid grid-cols-2 gap-4 py-6">
                <div className="border border-dodger-blue text-dodger-blue text-sm py-2 px-3">{featuredCandidate.fullname}</div>
                <select name="" id="" className="border border-dodger-blue text-dodger-blue text-sm w-full">
                    <option value="">Selecciona un candidato</option>
                    {
                        candidates.map(candidate => (
                            <option
                                value={candidate.fullname}
                                key={candidate.fullname}
                            >
                                {candidate.fullname}
                            </option>
                        ))
                    }
                </select>
            </div>
        </div>
    )
}

export default ComparisonModal;
