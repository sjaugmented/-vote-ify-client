import React from 'react';
import {Link} from 'react-router-dom'

const Brand = () => {
  return (
    <div className='brandDiv'>
      <Link className='brandLink' to='/'><h1>Spotify.Us</h1></Link>
    </div>
  );
}

export default Brand;
