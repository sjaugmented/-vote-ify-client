import React, { useState, useEffect } from 'react';
//import model
import PlaylistModel from '../models/playlist'

//import components
import PlaylistContainer from '../components/Playlist/PlaylistContainer';


//import styles
import '../components/Playlist/playlist.scss'
import 'antd/dist/antd.css';

const Playlist = (props) => {

  //call fetch request to show the single playlist
  const [playlist, setPlaylist] = useState()
  
  const getPlaylist = async () => {
    const result = await PlaylistModel.show(props.match.params.id)
    setPlaylist({playlist: result.playlist})
  }

  useEffect(() => {
    getPlaylist()
  }, []);

  return (

    <PlaylistContainer updatePlayer={props.updatePlayer} match={props.match} username={props.username} admin={props.admin} accessToken={props.accessToken} playlist={playlist} getPlaylist={getPlaylist}/>
  );   

}

export default Playlist;