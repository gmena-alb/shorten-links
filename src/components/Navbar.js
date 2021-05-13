import React, { useState } from 'react';
import styled from 'styled-components';
import { links } from '../links';
import logo from '../images/logo.svg';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <Wrapper>
      <div className="nav">
        <div className="nav-header">
          <img src={logo} alt="logo" className="logo" />
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
      </div>
      <div
        className={`${
          showLinks ? 'links-container show-links-container' : 'links-container'
        }`}
      >
        <ul className="links">
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <li key={id}>
                <a href={url}>{text}</a>
              </li>
            );
          })}
        </ul>
        <div className="account-container">
          <div className="btn-transparent">
            <a href="#">Log in</a>
          </div>
          <div className="btn-blue">
            <a>Sign up</a>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  .nav-header {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    .nav-toggle {
      font-size: 2.5rem;
      color: var(--color-grey);
      background: transparent;
      border-color: transparent;
      cursor: pointer;
    }
  }
  .links-container {
    display: none;
    margin-top: 2.6rem;
    background-color: var(--color-violet);
    border-radius: 6px;
    padding: 4.5rem 2.5rem;
    text-align: center;
    font-size: 1.8rem;
    ul {
      border-bottom: 1px solid var(--color-grey);
      li:not(:last-child) {
        margin-bottom: 4.3rem;
      }
      li:last-child {
        margin-bottom: 3.5rem;
      }
    }
    .account-container {
      margin-top: 3.8rem;
      div:first-child {
        margin-bottom: 3rem;
      }
    }
    a {
      color: white;
    }
    .btn-blue {
      display: block;
    }
  }
  .show-links-container {
    display: block;
  }
`;

export default Navbar;
