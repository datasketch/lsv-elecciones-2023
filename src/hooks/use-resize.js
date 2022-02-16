import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toggleView } from '../features/view/view-slice';

function useResize() {
  const dispatch = useDispatch();

  useEffect(() => {
    const evtHandler = () => {
      if (window.innerWidth >= 768) {
        dispatch(toggleView(true));
      }
    };
    window.addEventListener('resize', evtHandler);
    return () => window.removeEventListener('resize', evtHandler);
  }, [dispatch]);
}

export default useResize;
