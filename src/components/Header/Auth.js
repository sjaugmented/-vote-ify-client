import React from 'react';
import {Link} from 'react-router-dom'

const Auth = (props) => {

  

  return (
    <div className='authDiv'>
      {props.username ? 
        <>
          <Link to=''>Hey {props.username}!</Link>
          <a href={'https://spotify-us-api.herokuapp.com/api/v1/auth/login'}>Refresh Spotify</a>
        </>
        :
        <a href="https://spotify-us-api.herokuapp.com/api/v1/auth/login">Connect with Spotify</a>
      }
    </div>
  );
}

export default Auth;
