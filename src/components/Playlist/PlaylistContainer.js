import React, { useState, useEffect } from 'react'
import Spotify from '../../models/spotify'

//import components
import Sidebar from './Sidebar'
import SongList from './SongList';
import InputForm from './inputForm'
import AnimatedAlbum from './AnimatedAlbum'

//import styles
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import { LeftCircleTwoTone, RightCircleTwoTone } from '@ant-design/icons';
const { Sider, Content } = Layout;


const PlaylistContainer = ({playlist, token, updatePlayer}) => {
  //Hook - Toggle sidebar functionality
  const [isHidden, setIsHidden] = useState(true)
  const toggle =() => {
    setIsHidden(!isHidden)
  }

  //Hook - Form/input functionality
  const [search, setSearch] = useState('')
  const [results, setResults] = useState('')
  const [chosen, setChosen] = useState([])

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    async function getData(){
      const info = ({search, token})
      const list = await Spotify.search(info)
      // console.log(list)
      const stuff = ({...list})
      
      const fuck = ({...stuff.data})
      const shit = ({...fuck.tracks})
      const itemArr = ({...shit.items})
      // console.log(itemArr)
      setResults([{itemArr}])
    }
    getData()
  }, [search]);


  const searchSong = async (e) => {
    e.preventDefault()
    setChosen([results])
  }


  return (
    <Layout>
      <Content>
        <header className='playlistHeader'>
          {playlist && playlist.playlist.coverart ?
            <AnimatedAlbum 
              playlist={playlist.playlist}
            />
            : 'loading...'}
            {/* <img src={playlist.playlist.coverart} /> */}
          <h1>{playlist && playlist.playlist.title ? playlist.playlist.title : 'loading...'}</h1>
          <InputForm searchSong={searchSong} search={search} handleChange={handleChange} chosen={chosen} results={results}/>
         
          <button className='toggleBtn' onClick={toggle}>{isHidden ? <LeftCircleTwoTone /> : <RightCircleTwoTone />}</button>
        </header>

        <section>
          
          <SongList
            playlist={playlist}
            updatePlayer={updatePlayer}
          />
        </section>
      </Content>
      <Sider id='sider' className={isHidden ? 'hide' : 'show'}>
        <Sidebar />
      </Sider>
    </Layout>
  )
  
}

export default PlaylistContainer