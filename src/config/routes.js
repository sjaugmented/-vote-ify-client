import React, { useState, useEffect} from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios'
import PlaylistModel from '../models/playlist'
import Home from '../pages/Home';
import Playlist from '../pages/Playlist';
import Profile from '../pages/Profile';

const Routes = () => {
  const [playlists, setPlaylists] = useState([])

  // useEffect(() => {
  //   async function fetchData(){
  //     PlaylistModel.all() 
  //   }
  //   fetchData()
  // })
  const getPlaylists = async () => {
    const result = await PlaylistModel.all()
    setPlaylists({playlists: result.playlists})
  }

  useEffect(() => {
    getPlaylists()
  }, []);

  
  return (
  <Switch>
    <Route exact path='/' render={(props) => <Home {...props} playlists={playlists}/>} /> 
    <Route exact path='/playlist/:id' render={(props) => <Playlist {...props} playlists={playlists}/>} />
      {/* will be /playlist/:id */}
    <Route exact path='/profile' render={(props) => <Profile {...props} playlists={playlists}/>} />
    {/* will be /profile/:id */}
  </Switch>
  )
  
}

export default Routes