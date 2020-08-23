import React from 'react';
import {Link} from 'react-router-dom'

const Auth = (props) => {
  return (
    <div className='authDiv'>
      {props.currentUser ? 
        <>
          <Link to={'/profile'}>{props.currentUser}</Link>
          <Link to={'/logout'}>Logout</Link>
        </>
        :
        <div className='spotify-connect'>
          <Link to={'/auth/login'}>Connect with Spotify</Link>
        </div>
      }
    </div>
  );
}

export default Auth;
