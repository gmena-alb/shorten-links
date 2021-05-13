import React from 'react';
import styled from 'styled-components';
import bg from '../images/bg-boost-mobile.svg';

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
  background: url(${bg}), var(--color-violet);
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  padding: 10.6rem 0 9rem;
  color: var(--color-white);
  h2 {
    margin-bottom: 2.6rem;
    font-size: 2.8rem;
    font-weight: 700;
  }
  .btn-blue {
    padding: 1.2rem 4rem;
    a {
      color: white;
    }
  }
`;

export default Banner;
