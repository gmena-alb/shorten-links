import React, { useState, useContext } from 'react';
import axios from 'axios';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isDesktop, setIsDesktop] = useState(false);
  const [showLinks, setShowLinks] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [query, setQuery] = useState('');
  const [shortenUrl, setShortenUrl] = useState('');
  const [listUrl, setListUrl] = useState([]);

  const showMenuDesktop = (width) => {
    setScreenWidth(width);
  };

  const toggleMenu = () => {
    setShowLinks(!showLinks);
  };

  const handleRequest = (url) => {
    if (query) {
      setLoading(true);
      setError(false);
      fetchUrl(url);
    } else {
      setErrorMessage('Please add a link');
      setError(true);
    }
  };

  const fetchUrl = async (url) => {
    await axios
      .get(`${url}${query}`)
      .then((response) => {
        setShortenUrl(response.data.result.full_short_link);
        setListUrl([
          ...listUrl,
          { query: query, shortenUrl: response.data.result.full_short_link },
        ]);
        setLoading(false);
      })
      .catch((err) => {
        setErrorMessage(err.message);
        setError(true);
        setLoading(false);
      });
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
        loading,
        errorMessage,
        error,
        query,
        setQuery,
        handleRequest,
        listUrl,
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
