import React from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from 'react-icons/fa';

export const links = [
  {
    id: 1,
    url: '#',
    text: 'Features',
    subLinks: [
      { id: 1, url: '#', text: 'Link Shortening' },
      { id: 2, url: '#', text: 'Branded Links' },
      { id: 3, url: '#', text: 'Analytics' },
    ],
  },
  {
    id: 2,
    url: '#',
    text: 'Resources',
    subLinks: [
      { id: 1, url: '#', text: 'Blog' },
      { id: 2, url: '#', text: 'Developers' },
      { id: 3, url: '#', text: 'Support' },
    ],
  },
  {
    id: 3,
    url: '#',
    text: 'Company',
    subLinks: [
      { id: 1, url: '#', text: 'About' },
      { id: 2, url: '#', text: 'Our Team' },
      { id: 3, url: '#', text: 'Careers' },
      { id: 4, url: '#', text: 'Contact' },
    ],
  },
];

export const social = [
  { id: 1, url: '#', icon: <FaFacebook /> },
  { id: 2, url: '#', icon: <FaTwitter /> },
  { id: 3, url: '#', icon: <FaPinterest /> },
  { id: 4, url: '#', icon: <FaInstagram /> },
];
