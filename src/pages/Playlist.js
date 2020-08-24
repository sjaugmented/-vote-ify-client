import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Playlist/Sidebar'
import PlaylistContainer from '../components/Playlist/PlaylistContainer';
import PlaylistModel from '../models/playlist'
import SpotifyModel from '../models/spotify'


import '../components/Header/header.css'

import { Layout } from 'antd';
import 'antd/dist/antd.css';


const { Header, Footer, Sider, Content } = Layout;

const Playlist = (props) => {
  // const [isHidden, setIsHidden] = useState(true)

  // const toggle =() => {
  //   setIsHidden(!isHidden)
  // }

  // return (
  //   <Layout>
  //     <Content> <SongList /><button onClick={toggle}>toggle</button> </Content>
  //     <Sider className={isHidden ? 'hide' : 'show'}><Sidebar /></Sider>
  //   </Layout>
  // );
  const [playlist, setPlaylist] = useState()
  const [tracklist, setTracklist] = useState()


  const getTracks = async () => {
    const result = await SpotifyModel.all()
    console.log(result)
  }

  getTracks()
  
  const getPlaylist = async () => {
    const result = await PlaylistModel.show(props.match.params.id)
    setPlaylist({playlist: result.playlist})
    console.log(result)
  }
  
  useEffect(() => {
    getPlaylist()
  }, []);

  return (
    <Layout>
      <Content><PlaylistContainer playlist={playlist}/></Content>
      <Sider><Sidebar /></Sider>
    </Layout>
  );
      
    
}

export default Playlist;
