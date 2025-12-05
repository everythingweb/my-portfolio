import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // This command executes only when the page changes (pathname changes)
    // It is what ensures the new page always starts at the top (0, 0)
    window.scrollTo(0, 0); 
  }, [pathname]); 

  return null;
};

export default ScrollToTop;