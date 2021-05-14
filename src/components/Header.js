import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import img from '../images/illustration-working.svg';

const Header = () => {
  return (
    <Wrapper>
      <Navbar />
      <div className="header-content">
        <img src={img} alt="working person" className="header-img" />
        <div className="content">
          <h1>More than just shorter links</h1>
          <p>
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <div className="btn-blue">Get Started</div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  padding: 4rem 2.5rem;
  overflow-x: hidden;
  text-align: left;
  margin: 0 auto;
  @media (min-width: 1440px) {
    padding: 5.8rem 16.6rem;
  }
  .header-content {
    @media (min-width: 1440px) {
      text-align: center;

      display: flex;
      margin-top: 7rem;
    }
    .header-img {
      max-width: 150%;
      padding: 3rem 0;
      margin: 0 auto;
      @media (min-width: 1440px) {
        order: 1;
        margin-left: 8.5rem;
      }
    }
    .content {
      text-align: center;
      @media (min-width: 1440px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        h1 {
          font-size: 8rem;
          text-align: left;
          min-width: 600px;
        }
      }
      p {
        margin: 3.3rem 0 3.7rem;
        @media (min-width: 1440px) {
          text-align: left;
          margin: 3.3rem 14rem 3.7rem 0;
          line-height: 1.8;
        }
      }
    }
  }
  .btn-blue {
    padding: 1.2rem 4rem;
  }
`;

export default Header;
