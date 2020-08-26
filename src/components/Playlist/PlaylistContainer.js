import React, { useState, useEffect } from 'react'
import Spotify from '../../models/spotify'

//import components
import Sidebar from './Sidebar'
import SongList from './SongList';

//import styles
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import { LeftCircleTwoTone, RightCircleTwoTone } from '@ant-design/icons';
const { Sider, Content } = Layout;


const PlaylistContainer = ({playlist, token}) => {
  //Hook - Toggle sidebar functionality
  const [isHidden, setIsHidden] = useState(false)
  const toggle =() => {
    setIsHidden(!isHidden)
  }

  //Hook - Form/input functionality
  const [search, setSearch] = useState('')
  const [results, setResults] = useState({})

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    async function getData(){
      const data = ({search: search, token: token})
      const list = await Spotify.search(data)
      setResults(list)
      console.log({results})
    }
    getData()
  }, [search]);


  const searchSong = async (e) => {
    e.preventDefault()
  
  }

  
  return (
    <Layout>
      <Content>
        <header className='playlistHeader'>
          {playlist && playlist.playlist.coverart ? <img src={playlist.playlist.coverart} /> : 'loading...'}
          <h1>{playlist && playlist.playlist.title ? playlist.playlist.title : 'loading...'}</h1>
          <p>The song is... {search}</p>
          <form onSubmit={searchSong}>
            <input
              placeholder='Seach'
              type='text'
              value={search}
              onChange={e => setSearch(e.target.value)}
            />

            <button>Submit</button>
          </form>
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