import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Playlist from '../pages/Playlist';
import Profile from '../pages/Profile';

export default (
  <Switch>
    <Route exact path='/' component={ Home } /> 
    <Route exact path='/playlist/:id' component={ Playlist } />
      {/* will be /playlist/:id */}
    <Route exact path='/profile' component={ Profile } />
    {/* will be /profile/:id */}
  </Switch>
)