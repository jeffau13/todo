import React from 'react';

const headerStyle = {
  background: '#333',
  color: 'white',
  textAlign: ' center',
  padding: '10px'
};

export default function Header() {
  return (
    <header style={headerStyle}>
      <h1>My Todo List</h1>
    </header>
  );
}
