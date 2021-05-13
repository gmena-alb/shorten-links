import React from 'react';
import spinner from '../images/spinner.gif';

const Spinner = () => {
  return (
    <img
      src={spinner}
      style={{
        gridRow: '2',
        gridColumnStart: '1',
        gridColumnEnd: '3',
        width: '75px',
        margin: 'auto',
        display: 'block',
      }}
      alt="Loading"
    />
  );
};

export default Spinner;
