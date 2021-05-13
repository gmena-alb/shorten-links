import React from 'react';
import styled from 'styled-components';
import Sublinks from './Sublinks';
import { links, social } from '../links';

const Footer = () => {
  return (
    <Wrapper>
      <h1>Shortly</h1>
      {links.map((link) => {
        const { id, url, text, subLinks } = link;
        return (
          <div className="links-container" key={id}>
            <a className="main-link" href={url}>
              {text}
            </a>
            <Sublinks sublinks={subLinks} />
          </div>
        );
      })}
      <ul class="social">
        {social.map((item) => {
          const { id, link, icon } = item;
          return (
            <li key={id}>
              <a href={link}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  background-color: var(--color-violet-dark);
  @media (min-width: 1440px) {
    display: flex;
    justify-content: space-evenly;
    padding: 7rem 16rem 0;
  }
  h1 {
    color: var(--color-white);
    padding: 5rem 0 5.8rem;
    @media (min-width: 1440px) {
      padding: 0;
      margin-right: 10rem;
    }
  }
  .links-container {
    text-align: center;
    @media (min-width: 1440px) {
      text-align: left;
    }
    .main-link {
      color: var(--color-white);
      margin-bottom: 2.6rem;
      font-size: 1.7rem;
      display: inline-block;
    }
    a {
      color: var(--color-grey);
      font-size: 1.5rem;
    }

    ul {
      padding-bottom: 4rem;
      li {
        margin-bottom: 1.2rem;
        @media (min-width: 1440px) {
          margin-right: 2rem;
        }
      }
    }
  }
  .links-container:first-child {
    margin-top: 6rem;
  }
  .social {
    padding: 1rem 8.5rem 5.5rem;
    display: flex;
    justify-content: center;
    color: var(--color-white);
    font-size: 2.7rem;
    @media (min-width: 1440px) {
      padding: 0;
    }
    li:not(:last-child) {
      margin-right: 2rem;
      @media (min-width: 1440px) {
        margin-right: 2rem;
      }
    }
  }
`;

export default Footer;
