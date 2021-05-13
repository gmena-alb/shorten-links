import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isDesktop, setIsDesktop] = useState(false);
  const [showLinks, setShowLinks] = useState(false);

  const showMenuDesktop = (width) => {
    setScreenWidth(width);
  };

  const toggleMenu = () => {
    setShowLinks(!showLinks);
  };

  return (
    <AppContext.Provider
      value={{
        toggleMenu,
        showLinks,
        showMenuDesktop,
        screenWidth,
        setIsDesktop,
        isDesktop,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
