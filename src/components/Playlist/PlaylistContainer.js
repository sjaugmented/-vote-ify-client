import React, { useState, useEffect, useRef } from 'react'
import Spotify from '../../models/spotify'
//import db
import PostModel from '../../models/post'
//import components
import Sidebar from './Sidebar'
import SongList from './SongList';
import InputForm from './inputForm'

//import styles
import { Row, Col } from 'antd';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import { LeftCircleTwoTone, RightCircleTwoTone } from '@ant-design/icons';


const { Sider, Content } = Layout;



const PlaylistContainer = ({playlist, accessToken, username, spotifyId, admin, match, updatePlayer, getPlaylist}) => {

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
    sortPosts()
    return () => document.removeEventListener('mousedown', handleClick, false);
  }, [playlist]);

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
    setTimeout(() => {
      getPlaylist()
      sortPosts()
    }, delay)
  }

  const updatePost = async (postId) => {
    const updatedPost = await PostModel.update(postId)
    console.log(updatedPost)
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
      userSpotId: spotifyId,
      albumArt: song.album.images[0].url,
      timestamp: Date.now()
    }
    setSelectedSong(postData)
    // console.log(selectedSong)
    postSong(postData)
    refreshPlaylist(500)
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

  const pending = []
  const approved = []

  const sortPosts = () => {
    try {
      //await playlist
      if (playlist) {
        if (playlist.playlist) {
        console.log('playlist>>', playlist.playlist)
        // loop through playlist.playlist.posts
          playlist.playlist.posts.map(post => {
          console.log(post.pending)
          // if post.pending => pending.push(post)
          if (post.pending) pending.push(post)
          // if !post.pending => approved.push(post)
          else approved.push(post)
        })
      }}
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <Layout>
      <Content>
      <Row className='playlistHeader'>
        <Col xs={12} sm={12} md={8} lg={8} xl={5}>
            {playlist && playlist.playlist.coverart ?
              <div className="card">
                <img src={playlist.playlist.coverart} alt='album art' />
              </div>
              : 'loading...'}
        </Col>
        <Col xs={0} sm={0} md={0} lg={8} xl={8}className='headerPlaylistTitle'>
          <h1>{playlist && playlist.playlist.title ? playlist.playlist.title : 'loading...'}</h1>
        </Col>  
          <Col xs={10} sm={10} md={8} lg={6} xl={6}className='inputDiv'>
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
          </Col>
          <Col xs={1} sm={1} md={1} lg={1} xl={1}>
            <button className='toggleBtn' 
              onClick={toggle}>{isHidden ? 
                  <LeftCircleTwoTone /> : 
                  <RightCircleTwoTone />}
            </button>
          </Col>
      </Row>

      <Row>
        <SongList
          playlist={playlist}
            updatePlayer={updatePlayer}
            admin={admin}
            deletePost={deletePost}
            approvedPosts={approved}
        />
      </Row>
      </Content>
      <Sider className='sidebarDiv' className={isHidden ? 'hide' : 'show'}>
        <Sidebar playlist={playlist} pendingPosts={pending}/>
      </Sider>
    </Layout>
  )
  
}

export default PlaylistContainer