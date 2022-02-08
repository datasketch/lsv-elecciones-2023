import { useSelector } from 'react-redux';
import { selectHideNav } from '../features/nav/nav-slice';
import AppNav from './AppNav';

function AppHeader() {
  const hideNav = useSelector(selectHideNav);
  return (
    <>
      <h1 className="uppercase font-martin text-7xl text-center lg:text-8xl">
        Elecciones 2022
      </h1>
      {!hideNav && (
        <div className="mx-auto max-w-xs mt-6 md:max-w-lg">
          <AppNav />
        </div>
      )}
      <div className="border-t-2 border-jet mt-6"></div>
    </>
  );
}

export default AppHeader;
