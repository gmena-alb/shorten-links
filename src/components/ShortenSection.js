import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import bgMobile from '../images/bg-shorten-mobile.svg';
import bgDesktop from '../images/bg-shorten-desktop.svg';
import Spinner from './Spinner';
import { FaCopy } from 'react-icons/fa';

const ShortenSection = () => {
  const [query, setQuery] = useState('');
  const [shortenUrl, setShortenUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [isTextCopied, setIsTextCopied] = useState(false);
  const url = 'https://api.shrtco.de/v2/shorten?url=';

  const fetchUrl = async () => {
    const result = await axios(`${url}${query}`);
    setShortenUrl(result.data.result.full_short_link);
    setLoading(false);
  };

  const handleRequest = () => {
    setLoading(true);
    fetchUrl();
  };

  const copyText = () => {
    navigator.clipboard.writeText(shortenUrl);
    setIsTextCopied(true);
    console.log('copiado');
  };

  useEffect(() => {}, [shortenUrl]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTextCopied(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [isTextCopied]);

  return (
    <Wrapper>
      {isTextCopied && <div className="message">Copied to clipboard!</div>}
      <input
        className="input-url"
        type="text"
        placeholder="Shorten a link here..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {loading && <Spinner />}
      {shortenUrl && !loading && (
        <div className="link-container" onClick={() => copyText()}>
          <p>{shortenUrl}</p>
          <div className="copy-container">
            <FaCopy />
          </div>
        </div>
      )}
      <button className="btn-blue" onClick={handleRequest}>
        Shorten It!
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: url(${bgMobile}), var(--color-violet);
  background-repeat: no-repeat;
  background-position-x: right;
  display: flex;
  flex-direction: column;
  padding: 2.3rem;
  margin: 4.5rem 2.5rem;
  border-radius: 8px;
  position: relative;
  @media (min-width: 1440px) {
    max-width: 122rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 78% 17%;
    grid-gap: 3rem;
    padding: 5rem;
    background: url(${bgDesktop}), var(--color-violet);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right;
  }
  .message {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(11%, -180%);
    font-size: 1em;
    background-color: rgba(0, 0, 0, 0.8);
    padding: 1rem;
    color: white;
    text-align: center;
    box-shadow: rgb(0 0 0 / 25%) 0px 54px 55px, rgb(0 0 0 / 12%) 0px -12px 30px,
      rgb(0 0 0 / 12%) 0px 4px 6px, rgb(0 0 0 / 17%) 0px 12px 13px,
      rgb(0 0 0 / 9%) 0px -3px 5px;
    animation-name: fadeUp;
    animation-duration: 3s;
    @media (min-width: 1440px) {
      right: 0;
      left: unset;
      transform: translate(-45%, -88%);
      font-size: 1.5rem;
    }
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
  .link-container {
    margin: 1.7rem 0;
    font-size: 1.6rem;
    border-radius: 6px;
    text-align: center;
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    border: 2px solid white;
    cursor: pointer;
    @media (min-width: 1440px) {
      grid-row: 2;
      grid-column-end: 3;
      grid-column-start: 1;
    }
    p {
      color: white;
      padding: 1rem;
    }
    .copy-container {
      width: 3rem;
      background-color: white;
      color: var(--color-violet);
      position: relative;
      font-size: 2.5rem;
      padding-left: 4rem;
      svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
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
`;

export default ShortenSection;
