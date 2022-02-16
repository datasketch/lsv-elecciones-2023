import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleView } from '../features/view/view-slice';

function useResize() {
  const dispatch = useDispatch();
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const evtHandler = () => {
      setWidth(window.innerWidth)
      if (width >= 768) {
        dispatch(toggleView(true));
      }
    };
    window.addEventListener('resize', evtHandler);
    return () => window.removeEventListener('resize', evtHandler);
  }, [dispatch, width]);

  return { width }
}

export default useResize;
