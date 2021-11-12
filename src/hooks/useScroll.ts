import { useCallback, useEffect, useState } from 'react';

interface IuseScroll {
  goToTop: () => void;
  top: number;
}

const useScroll = (id?: string): IuseScroll => {
  const [top, setTop] = useState(0);

  const goToTop = useCallback(() => {
    const root = document.getElementById(id || 'root');
    if (root) {
      root.scrollTo(0, 0);
    }
  }, []);

  const onScroll = useCallback(e => {
    const target = e.target as HTMLDivElement;
    setTop(target.scrollTop);
  }, []);

  const scrollListener = useCallback(() => {
    const root = document.getElementById(id || 'root');
    if (root) {
      root.addEventListener('scroll', onScroll);
    }
  }, [onScroll]);

  const removeListener = useCallback(() => {
    const root = document.getElementById('root');
    if (root) {
      root.removeEventListener('scroll', onScroll);
    }
  }, [onScroll]);

  useEffect(() => {
    scrollListener();

    return () => {
      removeListener();
    };
  }, [removeListener, scrollListener]);

  return { goToTop, top };
};

export default useScroll;
