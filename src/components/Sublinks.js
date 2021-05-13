import React from 'react';

const Sublinks = ({ sublinks }) => {
  return (
    <ul>
      {sublinks.map((item) => {
        const { id, url, text } = item;
        return (
          <li key={id}>
            <a href={url}>{text}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default Sublinks;
