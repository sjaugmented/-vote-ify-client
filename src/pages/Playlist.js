import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Playlist/Sidebar'
import PlaylistContainer from '../components/Playlist/PlaylistContainer';
import PlaylistModel from '../models/playlist'


import '../components/Header/header.css'

import { Layout } from 'antd';
import 'antd/dist/antd.css';


const { Header, Footer, Sider, Content } = Layout;

const Playlist = () => {
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

  const getPlaylist = async () => {
    const result = await PlaylistModel.show()
    console.log(result)
  }
  getPlaylist()

  return (
    <Layout>
      <Content><PlaylistContainer playlist={this.state.playlist}/></Content>
      <Sider><Sidebar /></Sider>
    </Layout>
  );
      
    
}

export default Playlist;
