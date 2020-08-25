import React, { useState, useEffect} from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Playlist from '../pages/Playlist';
import Profile from '../pages/Profile';

const Routes = (props) => {
  console.log("PROPS HERE", props)
  return (
  <Switch>
    <Route exact path='/' render={(propsRouter) => <Home {...propsRouter} playlists={props.playlists}/>} /> 
    <Route exact path='/playlist/:id' render={(propsRouter) => <Playlist {...propsRouter} playlists={props.playlists} token={props.token} />} />
      {/* will be /playlist/:id */}
    <Route exact path='/profile' render={(propsRouter) => <Profile {...propsRouter} playlists={props.playlists}/>} />
      {/* will be /profile/:id */}
  </Switch>
  )
}

export default Routes