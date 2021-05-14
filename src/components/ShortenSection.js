import React, { useEffect } from 'react';
import styled from 'styled-components';
import bgMobile from '../images/bg-shorten-mobile.svg';
import bgDesktop from '../images/bg-shorten-desktop.svg';
import Spinner from './Spinner';
import Link from './Link';
import { useGlobalContext } from '../context/context';

const ShortenSection = () => {
  const {
    loading,
    errorMessage,
    error,
    handleRequest,
    query,
    setQuery,
    listUrl,
  } = useGlobalContext();

  const url = 'https://api.shrtco.de/v2/shorten?url=';

  return (
    <Wrapper>
      <div className="container">
        <input
          className={`${error ? 'input-url input-error' : 'input-url'}`}
          type="text"
          placeholder="Shorten a link here..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {error && <div className="error-text">{errorMessage}</div>}
        {loading && !error && <Spinner />}
        <button className="btn-blue" onClick={() => handleRequest(url)}>
          Shorten It!
        </button>
      </div>
      <div className="links-list">
        {listUrl.map((url, index) => {
          const { query, shortenUrl } = url;
          return <Link key={index} longUrl={query} shortenUrl={shortenUrl} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: 4.5rem 2.5rem;
  @media (min-width: 1440px) {
    max-width: 122rem;
    margin: 0 auto;
  }
  .container {
    background: url(${bgMobile}), var(--color-violet);
    background-repeat: no-repeat;
    background-position-x: right;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    position: relative;
    padding: 2.3rem;
    @media (min-width: 1440px) {
      display: grid;
      grid-template-columns: 78% 17%;
      grid-gap: 3rem;
      padding: 5rem;
      background: url(${bgDesktop}), var(--color-violet);
      background-repeat: no-repeat;
      background-size: cover;
      background-position: right;
    }
    .error-text {
      position: absolute;
      top: 118px;
      left: 55px;
      font-size: 1.2rem;
      color: var(--color-red);
      font-style: italic;
    }
    .input-url {
      padding: 1.5rem 0;
      font-size: 1.6rem;
      border-radius: 6px;
      border: none;
      margin-bottom: 0.85rem;
      color: var(--color-blue-dark);
      font-family: 'Poppins', sans-serif;
      padding-left: 1.5rem;
      outline-color: var(--color-violet);
      outline-width: 2px;
      ::placeholder {
        color: var(--color-grey-violet);
        font-family: 'Poppins', sans-serif;
        padding: 0;
        grid-column: 1;
        grid-row: 1;
      }
      @media (min-width: 1440px) {
        flex: 1;
        margin-bottom: 0;
      }
    }
    .input-error {
      outline-color: var(--color-red);
    }
  }
  .btn-blue {
    border-radius: 6px;
    border: none;
    margin-top: 0.85rem;
    padding: 1.5rem 0;
    font-weight: 700;
    @media (min-width: 1440px) {
      margin: 0;
      padding: 0 3rem;
    }
  }
  .links-list {
    @media (min-width: 1440px) {
      margin: 0 2rem;
    }
  }
`;

export default ShortenSection;
