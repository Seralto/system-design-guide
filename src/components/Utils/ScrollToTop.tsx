import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop component that scrolls the main content area to the top
 * whenever the pathname in the location changes.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const mainContent = document.querySelector('main.overflow-y-auto');
    const contentContainer = document.querySelector('.overflow-y-auto');
    
    if (mainContent) {
      mainContent.scrollTop = 0;
    } else if (contentContainer) {
      contentContainer.scrollTop = 0;
    }
    
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
