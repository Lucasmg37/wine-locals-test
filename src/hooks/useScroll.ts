import { useCallback } from 'react';

interface IuseScroll {
  goToTop: () => void;
}

const useScroll = (): IuseScroll => {
  const goToTop = useCallback(() => {
    const root = document.getElementById('root');
    if (root) {
      root.scrollTo(0, 0);
    }
  }, []);

  return { goToTop };
};

export default useScroll;
