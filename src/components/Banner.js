import React from 'react';
import styled from 'styled-components';
import bgMobile from '../images/bg-boost-mobile.svg';
import bgDesktop from '../images/bg-boost-desktop.svg';

const Banner = () => {
  return (
    <Wrapper>
      <h2>Boost your links today</h2>
      <div className="btn-blue">
        <a href="#">Get Started</a>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: url(${bgMobile}), var(--color-violet);
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  padding: 10.6rem 0 9rem;
  color: var(--color-white);
  @media (min-width: 1440px) {
    background: url(${bgDesktop}), var(--color-violet);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right;
  }
  h2 {
    margin-bottom: 2.6rem;
    font-size: 2.8rem;
    font-weight: 700;
    @media (min-width: 1440px) {
      font-size: 4rem;
    }
  }
  .btn-blue {
    padding: 1.2rem 4rem;
    a {
      color: white;
    }
  }
`;

export default Banner;
