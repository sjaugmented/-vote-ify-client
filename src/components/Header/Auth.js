import React from 'react';
import {Link} from 'react-router-dom'

const Auth = (props) => {

  const spotifyLogin = () => {

  }

  return (
    <div className='authDiv'>
      {props.currentUser ? 
        <>
          <Link to={'/profile'}>{props.currentUser}</Link>
          <Link to={'/logout'}>Logout</Link>
        </>
        :
        <button className='spotify-connect' onClick={spotifyLogin}>Login with Spotify</button>
      }
    </div>
  );
}

export default Auth;
