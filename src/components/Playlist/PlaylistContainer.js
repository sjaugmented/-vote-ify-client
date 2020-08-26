import React, { useState, useEffect} from 'react'

import { Layout } from 'antd';
import 'antd/dist/antd.css';


const { Header, Footer, Sider, Content } = Layout;
const PlaylistContainer = ({playlist, spotPlaylist}, props) => {
  console.log({spotPlaylist})
  return (
    <div className='playContainerDiv'>
      <header className='playlistHeader'>
        {playlist && playlist.playlist.coverart ? <img src={playlist.playlist.coverart} /> : 'loading...'}
        <h1>{playlist && playlist.playlist.title ? playlist.playlist.title : 'loading...'}</h1>
        <button onClick={props.toggle}>Toggle</button>
      </header>
        

    </div>
  )
  
}

export default PlaylistContainer