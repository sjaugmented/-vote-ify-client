import React, { useState, useEffect } from 'react';
//import model
import PlaylistModel from '../models/playlist'
import SpotifyModel from '../models/spotify'

//import components
import PlaylistContainer from '../components/Playlist/PlaylistContainer';


//import styles
import '../components/Playlist/playlist.css'
import 'antd/dist/antd.css';

const Playlist = (props) => {
<<<<<<< HEAD

=======
>>>>>>> 00f0f041667597d203cca686d6ab0e0dd2e6f9f5
  //call fetch request to show the single playlist
  const [playlist, setPlaylist] = useState()

  const getPlaylist = async () => {
    const result = await PlaylistModel.show(props.match.params.id)
    setPlaylist({ playlist: result.playlist })
  }


  useEffect(() => {
    getPlaylist()
    // spotifyPlaylist()
  }, []);

  return (
    <PlaylistContainer token={props.token} playlist={playlist}/>
  );


}

export default Playlist;


