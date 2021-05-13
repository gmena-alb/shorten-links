import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import img from '../images/illustration-working.svg';

const Header = () => {
  return (
    <Wrapper>
      <Navbar />
      <img src={img} alt="working person" className="header-img" />
      <h1>More than just shorter links</h1>
      <p>
        Build your brand's recognition and get detailed insights on how your
        links are performing.
      </p>
      <div className="btn-blue">Get Started</div>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  padding: 4rem 2.5rem;
  overflow-x: hidden;
  text-align: center;
  .header-img {
    max-width: 150%;
    margin: 3rem 0;
  }
  p {
    margin: 3.3rem 0 3.7rem;
  }
  .btn-blue {
    padding: 1.2rem 4rem;
  }
`;

export default Header;
