import React, { useState, useEffect, useRef } from 'react'
import Spotify from '../../models/spotify'
//import db
import PostModel from '../../models/post'
//import components
import Sidebar from './Sidebar'
import SongList from './SongList';
import InputForm from './inputForm'

//import styles
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import { LeftCircleTwoTone, RightCircleTwoTone } from '@ant-design/icons';


const { Sider, Content } = Layout;



const PlaylistContainer = ({playlist, accessToken, username, admin, match, updatePlayer, getPlaylist}) => {

  //Hook - Toggle sidebar functionality
  const [isHidden, setIsHidden] = useState(true)
  const toggle =() => {
    setIsHidden(!isHidden)
  }

  //Hook - Form/input functionality
  const [visible, setVisible] = useState(false);
  const [searchValue, setSearchValue] = useState('')
  const [results, setResults] = useState('')
  const [selectedSong, setSelectedSong] = useState(null);
  const dropdownRef = useRef(null);

  const handleChange = (e) => {
    setSearchValue(e.target.value)
    if(!visible){
      setVisible(true)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClick, false);
    return () => document.removeEventListener('mousedown', handleClick, false);
  }, []);

  const handleClick = e => {
    if (dropdownRef.current.contains(e.target)) {
      return;
    }
    setVisible(false);
    
  };

  useEffect(() => {
    async function getData(){
      const info = ({searchValue, accessToken})
      const list = await Spotify.search(info)
      const {items} = list.data.tracks
      setResults(items)
    }
    if(searchValue){
      getData()
    } else {
      setResults(null)
    }
    
  }, [searchValue]);

  const refreshPlaylist = (delay) => {
    setTimeout(() => getPlaylist(), delay)
    
  }

  const selectSong = song => {
    setSearchValue('')
    setVisible(false)
    let postData = {
      songId: song.id,
      songName: song.name,
      albumName: song.album.name,
      artist: song.artists[0].name,
      votes: 0,
      pending: true,
      user: username,
      albumArt: song.album.images[0].url
    }
    setSelectedSong(postData)
    // console.log(selectedSong)
    postSong(postData)
    refreshPlaylist(200)
  }

  const postSong = async (song) => {
    const urlId = match.params.id
    const data = {urlId, song}
    const result = await PostModel.create(data)
    // console.log(result)
    setSelectedSong(null)
  }

  const deletePost = async (songId) => {
    const deletedPost = await PostModel.delete(songId)
    console.log('deletedPost:', deletedPost);
    refreshPlaylist(100)
  }

  return (
    <Layout>
      <Content>
      <div>
        <header className='playlistHeader'>
            {playlist && playlist.playlist.coverart ?
              <div className="card">
                <img src={playlist.playlist.coverart} />
              </div>
              : 'loading...'}
              {/* <img src={playlist.playlist.coverart} /> */}
            <h1>{playlist && playlist.playlist.title ? playlist.playlist.title : 'loading...'}</h1>
            {username ?
              <div className='inputDiv'>
              <InputForm 
                  dropdownRef={dropdownRef} 
                  searchValue={searchValue} 
                  results={results}
                  dropdownRef={dropdownRef}
                  visible={visible}
                  setVisible={setVisible}
                  selectSong={selectSong}
                  handleChange={handleChange} 
                />
              </div>
            :
              <div className='inputDiv hide'>
                <InputForm 
                  dropdownRef={dropdownRef} 
                  searchValue={searchValue} 
                  results={results}
                  dropdownRef={dropdownRef}
                  visible={visible}
                  setVisible={setVisible}
                  selectSong={selectSong}
                  handleChange={handleChange} 
                />
              </div>
            }
          <button className='toggleBtn' 
            onClick={toggle}>{isHidden ? 
                <LeftCircleTwoTone /> : 
                <RightCircleTwoTone />}
          </button>
        </header>
      </div>
      <section>
        <SongList
          playlist={playlist}
            updatePlayer={updatePlayer}
            admin={admin}
            deletePost={deletePost}
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