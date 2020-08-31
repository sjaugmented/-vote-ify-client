import React from 'react';
import {Link} from 'react-router-dom'

const apiUrl = process.env.REACT_APP_API_URL2

const Auth = (props) => {

  

  return (
    <div className='authDiv'>
      {props.username ? 
        <>
          <Link to=''>Hey {props.username}!</Link>
          <a href={'https://spotify-us-api.herokuapp.com/api/v1/auth/login'}>Refresh Spotify</a>
        </>
        :
        < a href = "http://localhost:3001/api/v1/auth/login" > Connect with Spotify </a>
      }
    </div>
  );
}

export default Auth;
