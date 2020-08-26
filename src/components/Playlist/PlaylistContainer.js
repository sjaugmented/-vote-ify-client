import React, { useState, useEffect} from 'react'
import useToggle from '../../hooks/useToggle'
//import style
import { RightCircleTwoTone, LeftCircleTwoTone } from '@ant-design/icons';
import { Row, Col } from 'antd';
import { Layout } from 'antd';
import 'antd/dist/antd.css';

import SongList from './SongList'



const { Header, Footer, Sider, Content } = Layout;
const PlaylistContainer = ({playlist, toggle}) => {

  const [isIcon, setIsIcon] = useState(true)
  const toggleIsIcon = () => {
    setIsIcon(!isIcon)
  }

  return (
    <div className='playContainerDiv'>
        <header className='playlistHeader'>
          {playlist && playlist.playlist.coverart ? <img src={playlist.playlist.coverart} /> : 'loading...'}
          <h1>{playlist && playlist.playlist.title ? playlist.playlist.title : 'loading...'}</h1>
          <button className='toggleBtn' onClick={()=>{
            toggleIsIcon()
            toggle()
          }}>{isIcon ? <RightCircleTwoTone /> : <LeftCircleTwoTone />}</button>
        </header>
      <SongList playlist={playlist} />

    </div>
  )
  
}

export default PlaylistContainer