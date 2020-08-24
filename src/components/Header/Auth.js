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
        <a href="http://localhost:3001/api/v1/auth/login">Connect with Spotify</a>
      }
    </div>
  );
}

export default Auth;
