import React from 'react';
import { Link } from 'react-router-dom'

// API's
const local = 'http://localhost:3001/api/v1'
const heroku = 'https://spotify-us-api.herokuapp.com/api/v1'

const Auth = (props) => {

  const storeLocation = () => {
    localStorage.setItem('prevPath', props.location.pathname)
  }

  return (
    <div className='authDiv'>
      {props.username ? 
        <>
          <Link to={`/users/${props.spotifyId}`} >Hey {props.username}!</Link>
          <a onClick={storeLocation} href={`${local}/auth/logout`}>Logout</a>
          <a onClick={storeLocation} href={`${local}/auth/login`}>Refresh Spotify</a>
        </>
        :
          <a onClick={storeLocation} href={`${local}/auth/login`}>Connect with Spotify</a>
      }
    </div>
  );
}

export default Auth;