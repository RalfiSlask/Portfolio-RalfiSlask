import { createContext, ReactNode, useEffect, useState } from 'react';

type ContextProps = {
  isScreenSizeMobile: boolean;
};

export const Context = createContext<ContextProps | undefined>(undefined);

type ChildProps = {
  children: ReactNode;
};

export const ContextProvider: React.FC<ChildProps> = ({ children }) => {
  const [isScreenSizeMobile, setIsScreenSizeMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setIsScreenSizeMobile(true);
      } else {
        setIsScreenSizeMobile(false);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const contextValue = {
    isScreenSizeMobile: isScreenSizeMobile,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
