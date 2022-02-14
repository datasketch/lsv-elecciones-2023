import { useSelector } from 'react-redux';
import { selectActiveTab, selectHideNav } from '../features/nav/nav-slice';
import AppNav from './AppNav';

function AppHeader() {
  const hideNav = useSelector(selectHideNav);
  const activeTab = useSelector(selectActiveTab)
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
      { activeTab === 'consultas' && (
        <div className='max-w-xl mx-auto text-center mt-6 text-sm'>
          <p>Las consultas presidenciales son el próximo 13 de marzo. El mismo día de las elecciones al Congreso, los votantes podrán pedir un tarjetón, de una de las tres coaliciones, para votar por el candidato que quieren que llegue a primera vuelta.</p>
          <p className='italic mt-4'>Haga click en los candidatos y empiece a compararlos</p>
        </div>
      )}
      <div className="border-t-2 border-jet mt-6"></div>
    </>
  );
}

export default AppHeader;
