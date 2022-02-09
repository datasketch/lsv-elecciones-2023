import { useDispatch, useSelector } from 'react-redux';
import {
  selectSecondaryCandidate,
  selectMainCandidate,
  setSecondaryCandidate,
} from '../features/modal/modal-slice';

import ComparisonModalDesktop from './ComparisonModalDesktop';
import ComparisonModalMobile from './ComparisonModalMobile';

function ComparisonModal() {
  const mainCandidate = useSelector(selectMainCandidate);
  const secondaryCandidate = useSelector(selectSecondaryCandidate);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const [selected] = e.target.selectedOptions;
    const { info } = selected.dataset;
    if (info) {
      dispatch(setSecondaryCandidate(JSON.parse(info)));
    } else {
      dispatch(setSecondaryCandidate());
    }
  };

  return (
    <>
      <ComparisonModalMobile
        mainCandidate={mainCandidate}
        secondaryCandidate={secondaryCandidate}
        onChange={handleChange}
      />
      <ComparisonModalDesktop
        mainCandidate={mainCandidate}
        secondaryCandidate={secondaryCandidate}
      />
      {/*  */}
    </>
  );
}

export default ComparisonModal;
