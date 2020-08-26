import React, { useState, useEffect } from 'react'

//import components
import Sidebar from './Sidebar'
import SongList from './SongList';

//import styles
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import { LeftCircleTwoTone, RightCircleTwoTone } from '@ant-design/icons';
const { Header, Footer, Sider, Content } = Layout;


const PlaylistContainer = ({ playlist }) => {
  //Toggle sidebar functionality
  const [isHidden, setIsHidden] = useState(false)
  const toggle = () => {
    setIsHidden(!isHidden)
  }

  return (
    <Layout>
      <Content>
        <header className='playlistHeader'>
          {playlist && playlist.playlist.coverart ? <img src={playlist.playlist.coverart} /> : 'loading...'}
          <h1>{playlist && playlist.playlist.title ? playlist.playlist.title : 'loading...'}</h1>
          <button className='toggleBtn' onClick={toggle}>{isHidden ? <LeftCircleTwoTone /> : <RightCircleTwoTone />}</button>
        </header>

        <section>
          <SongList playlist={playlist} />
        </section>
      </Content>
      <Sider id='sider' className={isHidden ? 'hide' : 'show'}>
        <Sidebar />
      </Sider>
    </Layout>
  )

}

export default PlaylistContainer