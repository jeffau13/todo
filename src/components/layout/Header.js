import React from 'react';
import { Link } from 'react-router-dom';

const headerStyle = {
  background: '#333',
  color: 'white',
  textAlign: ' center',
  padding: '10px'
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none'
};

export default function Header() {
  return (
    <header style={headerStyle}>
      <h1>My Todo List</h1>
      <Link to="/" style={linkStyle}>
        Home{' '}
      </Link>
      |
      <Link to="/about" style={linkStyle}>
        {' '}
        About
      </Link>
    </header>
  );
}
