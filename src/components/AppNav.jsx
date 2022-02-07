import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectActiveTab, selectTab } from '../features/nav/nav-slice';
import AppButton from './AppButton';

function AppNav() {
  const dispatch = useDispatch();
  const activeTab = useSelector(selectActiveTab);
  return (
    <nav className="flex justify-center space-x-4">
      <AppButton
        label="Elecciones Congreso"
        inverse={activeTab !== 'congreso'}
        onClick={() => dispatch(selectTab('congreso'))}
      />
      <AppButton
        label="Consultas Presidenciales"
        inverse={activeTab !== 'consultas'}
        onClick={() => dispatch(selectTab('consultas'))}
      />
    </nav>
  );
}

export default AppNav;
