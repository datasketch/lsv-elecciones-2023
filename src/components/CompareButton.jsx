import { useDispatch } from 'react-redux';
import { toggleComparisonModalWindow } from '../features/modal/modal-slice';
import AppButton from './AppButton';

function CompareButton() {
  const dispatch = useDispatch();

  return (
    <AppButton
      label="Comparar"
      onClick={() => dispatch(toggleComparisonModalWindow())}
      inverse
    />
  );
}

export default CompareButton;
