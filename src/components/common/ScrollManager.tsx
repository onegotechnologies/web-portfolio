import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollManager: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const scrollToHash = () => {
        const target = document.querySelector(hash);
        if (target) {
          const headerOffset = 85;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
          return true;
        }
        return false;
      };

      // Try immediately, or retry after DOM render
      if (!scrollToHash()) {
        const timer1 = setTimeout(scrollToHash, 50);
        const timer2 = setTimeout(scrollToHash, 200);
        return () => {
          clearTimeout(timer1);
          clearTimeout(timer2);
        };
      }
    } else {
      // Clean top scroll on route change without hash (e.g. /projects or /)
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant',
      });
    }
  }, [pathname, hash]);

  return null;
};
