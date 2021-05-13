import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { links } from '../links';
import logo from '../images/logo.svg';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from '../context/context';

const Navbar = () => {
  const {
    toggleMenu,
    showLinks,
    showMenuDesktop,
    screenWidth,
    isDesktop,
    setIsDesktop,
  } = useGlobalContext();

  useEffect(() => {
    const event = window.addEventListener('resize', () => {
      showMenuDesktop(window.innerWidth);
    });
    return () => window.removeEventListener('resize', event);
  }, [screenWidth]);

  useEffect(() => {
    if (screenWidth >= 1440) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }
  }, [screenWidth]);

  return (
    <Wrapper>
      <div className="nav">
        <img src={logo} alt="logo" className="logo" />
        <div
          className={`${
            showLinks || isDesktop
              ? 'links-container show-links-container'
              : 'links-container'
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
        {!isDesktop && (
          <button className="nav-toggle" onClick={toggleMenu}>
            <FaBars />
          </button>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  .nav {
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
  .show-links-container {
    display: block;
  }
  .links-container {
    display: none;
    margin-top: 2.6rem;
    background-color: var(--color-violet);
    border-radius: 6px;
    padding: 4.5rem 2.5rem;
    text-align: center;
    font-size: 1.8rem;
    position: absolute;
    min-width: 88vw;
    left: 50%;
    top: 43%;
    width: auto;
    transform: translate(-50%, -50%);
    justify-content: space-between;
    @media (min-width: 1440px) {
      background-color: transparent;
      display: flex;
      flex: 1;
      position: relative;
      transform: none;
      top: auto;
      left: auto;
      padding: 0;
      min-width: auto;
      margin: 0;
      font-weight: 700;
      letter-spacing: 0.1rem;
    }
    .links {
      border-bottom: 1px solid var(--color-grey);
      @media (min-width: 1440px) {
        display: flex;
        align-items: center;
        border: none;
      }

      li:not(:last-child) {
        margin-bottom: 4.3rem;
        @media (min-width: 1440px) {
          margin: 0 0 0 3rem;
        }
      }
      li:first-child {
        @media (min-width: 1440px) {
          margin: 0 0 0 8rem;
        }
      }
      li:last-child {
        margin-bottom: 3.5rem;
        @media (min-width: 1440px) {
          margin: 0 0 0 3rem;
        }
      }
    }
    .account-container {
      margin-top: 3.8rem;
      @media (min-width: 1440px) {
        display: flex;
        align-items: center;
        margin-top: 0;
      }
      div:first-child {
        margin-bottom: 3rem;
        @media (min-width: 1440px) {
          margin: 0 3rem 0 0;
        }
      }
    }
    a {
      color: white;
      @media (min-width: 1440px) {
        color: var(--color-grey);
      }
    }
    .btn-blue {
      display: block;
      @media (min-width: 1440px) {
        a {
          color: var(--color-white);
        }
      }
    }
  }
`;

export default Navbar;
