import React from 'react';
import CopyButton from './CopyButton';
import styled from 'styled-components';

const Link = ({ longUrl, shortenUrl }) => {
  return (
    <Wrapper>
      <div className="long-url">{longUrl}</div>
      <div className="short-url">{shortenUrl}</div>
      <CopyButton url={shortenUrl} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.7rem;
  margin: 4rem 0;
  cursor: pointer;
  @media (min-width: 1440px) {
    flex-direction: row;
    align-items: baseline;
    text-align: center;
    justify-content: space-between;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
  }
  .long-url,
  .short-url {
    padding: 1.2rem 0 1.2rem 1rem;
    @media (min-width: 1440px) {
      padding: 1.2rem 0;
    }
  }
  .long-url {
    color: var(--color-blue-dark);
    border-bottom: 1px solid var(--color-grey);
    @media (min-width: 1440px) {
      border-bottom: none;
    }
  }
  .short-url {
    color: var(--color-cyan);
    @media (min-width: 1440px) {
      flex: 1;
      text-align: right;
      margin-right: 4rem;
    }
  }

  .btn-blue-copy {
    text-align: center;
    padding: 1rem 3rem;
    font-size: 1.5rem;
    margin-top: 0.85rem;
    border-radius: 6px;
    background-color: var(--color-cyan);
    color: white;
    display: inline-block;
    cursor: pointer;
    letter-spacing: 0.1rem;
    transition: background-color 0.2s ease-in-out;
  }

  .btn-dark {
    border-radius: 6px;
    margin-top: 0.85rem;
    border: none;
    padding: 1rem 3rem;
    text-align: center;
    display: inline-block;
    letter-spacing: 0.1rem;
    cursor: pointer;
    color: white;
    font-size: 1.6rem;
    background-color: var(--color-blue-dark);
  }
`;

export default Link;
