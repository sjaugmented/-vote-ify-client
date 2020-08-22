import React from 'react';
import { Link } from 'react-router-dom'
const Brand = () => {
  return (
    <div>
      <h1>Brand component</h1>
      <nav>
        <Link to='/'>Home</Link>{'  |  '}
        <Link to='/playlist'>Playlist</Link>{'  |  '}
        <Link to='/profile'>Profile</Link>
      </nav>
    </div>
  );
}

export default Brand;
