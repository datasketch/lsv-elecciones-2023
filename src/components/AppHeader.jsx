import { useSelector } from 'react-redux';
import { selectActiveTab, selectHideNav } from '../features/nav/nav-slice';
import AppNav from './AppNav';

function AppHeader() {
  const hideNav = useSelector(selectHideNav);
  const activeTab = useSelector(selectActiveTab)
  return (
    <>
      <div className='max-w-md mx-auto pt-6'>
        <img className="max-w-full mx-auto" src="/logo-elecciones-2022.svg" alt="" />
      </div>
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
