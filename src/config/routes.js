import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Playlist from '../pages/Playlist';
import Profile from '../pages/Profile';

const Routes = (props) => {
  return (
  <Switch>

    <Route exact path='/' render={(propsRouter) => 
          <Home {...propsRouter} 
            playlists={props.playlists}/>} /> 
    <Route exact path='/playlist/:id' render={(propsRouter) => 
          <Playlist {...propsRouter} 
            playlists={props.playlists} 
            updatePlayer={props.updatePlayer}
            username={props.username} 
            accessToken={props.accessToken} />}
            admin={props.admin}
      />
    <Route exact path='/users/:id' render={(propsRouter) => 
          <Profile {...propsRouter} playlists={props.playlists}/>} admin={props.admin} username={props.username} /> 

  </Switch>
  )
}

export default Routes