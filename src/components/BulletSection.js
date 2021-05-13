import React from 'react';
import styled from 'styled-components';
import { bulletPoints } from '../BulletPoints';

const BulletSection = () => {
  return (
    <Wrapper>
      <div className="intro">
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are performing across the web with out advanced
          statistics dashboard.
        </p>
      </div>
      <div className="bullet-points">
        {bulletPoints.map((item) => {
          const { key, image, title, text } = item;
          console.log({ image });
          return (
            <>
              <div key={key} className="bullet-point">
                <div className="image-container">
                  <img src={image} alt="icon" />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  text-align: center;
  margin: 10rem 6rem;
  @media (min-width: 1440px) {
    margin: 16rem 19.5rem;
  }
  .intro {
    margin-bottom: 5.5rem;
    h2 {
      font-size: 2.7rem;
      margin-bottom: 3.5rem;
      @media (min-width: 1440px) {
        font-size: 4rem;
      }
    }
    @media (min-width: 1440px) {
      max-width: 51.5rem;
      margin: 0 auto;
    }
  }
  .bullet-points {
    @media (min-width: 1440px) {
      display: flex;
      margin-top: 50px;
    }
    h3 {
      font-size: 2.3rem;
    }
    .bullet-point {
      @media (min-width: 1440px) {
        text-align: left;
      }
      .image-container {
        background: var(--color-violet);
        border-radius: 58%;
        display: inline-block;
        width: 9rem;
        height: 9rem;
        position: relative;
        margin-bottom: 3.6rem;
        img {
          background-blend-mode: multiply;
          top: 50%;
          position: absolute;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
      p {
        margin-top: 3rem;
        font-size: 1.6rem;
        line-height: 1.8;
        font-weight: 500;
        @media (min-width: 1440px) {
          text-align: left;
        }
      }
    }
    .bullet-point:not(:last-child) {
      @media (min-width: 1440px) {
        margin-right: 8rem;
      }
    }
    .bullet-point:not(:first-child) {
      margin-top: 9.3rem;
      @media (min-width: 1440px) {
        margin-top: 0;
      }
      .image-container:after {
        content: '';
        width: 7px;
        background-color: var(--color-cyan);
        height: 47px;
        position: absolute;
        top: -47px;
        left: 50%;
        z-index: 1;
        -webkit-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        transform: translateX(-50%);
        @media (min-width: 1440px) {
          height: 7px;
          width: 34px;
          bottom: -63px;
          left: -50%;
        }
      }
    }
  }
`;

export default BulletSection;
