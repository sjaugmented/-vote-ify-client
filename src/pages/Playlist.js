import React, { useState, useEffect } from 'react';
//import model
import PlaylistModel from '../models/playlist'
import SpotifyModel from '../models/spotify'

//import components
import PlaylistContainer from '../components/Playlist/PlaylistContainer';
import Sidebar from '../components/Playlist/Sidebar'
import SongList from '../components/Playlist/SongList';

//import styles
import '../components/Playlist/playlist.css'
import { Layout } from 'antd';
import 'antd/dist/antd.css';
const { Sider, Content } = Layout;

const Playlist = (props) => {
  //Toggle sidebar functionality
  const [isHidden, setIsHidden] = useState(false)
  const toggle =() => {
    setIsHidden(!isHidden)
  }

  //call fetch request to show the single playlist
  const [playlist, setPlaylist] = useState()
  
  const getPlaylist = async () => {
    const result = await PlaylistModel.show(props.match.params.id)
    setPlaylist({playlist: result.playlist})
  }

  const [token, setToken] = useState()
  
  useEffect(() => {
    getPlaylist()
<<<<<<< HEAD
    return () => {
      getPlaylist()
    }
=======
    //spotifyPlaylist()
>>>>>>> lelwut
  }, []);

  const spotifyPlaylist = async () => {
    const showPlaylist = await SpotifyModel.playlist(props.token)
    console.log("PLAYLIST.JS > showPlaylist>>>", showPlaylist)
  }

  return (
    <Layout>
      {/* Header is here */}
      <Content>
        <PlaylistContainer toggle={toggle} playlist={playlist}/>
        <SongList playlist={playlist} />
        <button onClick={spotifyPlaylist}>Test Endpoint</button>
      </Content>
      <Sider className={isHidden ? 'hide' : 'show'}>
        <Sidebar />
      </Sider>
      {/* Footer is here */}
    </Layout>
  );
      
    
}

export default Playlist;


