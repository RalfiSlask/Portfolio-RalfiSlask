import { useEffect } from 'react';

const LandingPageOnReload = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
};

export default LandingPageOnReload;
