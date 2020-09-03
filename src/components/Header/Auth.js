import React from 'react';
import {Link} from 'react-router-dom'

const apiUrl = process.env.REACT_APP_API_URL

const Auth = (props) => {

  

  return (
    <div className='authDiv'>
      {props.username ? 
        <>
          <Link to=''>Hey {props.username}!</Link>
          <a href={'https://localhost:3001/api/v1/auth/login'}>Refresh Spotify</a>
        </>
        :
        <a href="https://localhost:3001/api/v1/auth/login"> Connect with Spotify </a>
      }
    </div>
  );
}

export default Auth;
