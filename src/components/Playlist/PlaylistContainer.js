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

  //#region STATE & GLOBALS
  //Toggle sidebar functionality
  const [isHidden, setIsHidden] = useState(false)
  const toggle =() => {
    setIsHidden(!isHidden)
  }


  //**********************PRESENT************************* */
  //Form/input functionality
  const [visible, setVisible] = useState(false);
  const [searchValue, setSearchValue] = useState('')
  const [results, setResults] = useState('')
  const [selectedSong, setSelectedSong] = useState(null);
  const dropdownRef = useRef(null);

  //pending/approved posts
  const [isPending, setPending] = useState([])
  const [isApproved, setApproved] = useState([])
  const pending = []
  const approved = []
  //#endregion


  //#region SORTING, DELETING, UPDATING
  const sortPosts = () => {
    //await playlist
    if (playlist) {
      if (playlist.playlist) {
        // loop through playlist.playlist.posts
        playlist.playlist.posts.map(post => {
          // if post.pending => pending.push(post)
          if (post.votes < 5) pending.push(post)
          else if (post.timestamp >= post.timestamp * 1000 * 60 * 60 * 24 * 7) deletePost(post._id)
          // if !post.pending => approved.push(post)
          else approved.push(post)
          setApproved(approved)
          setPending(pending)
        })
      }
    }
  }

  const refreshPlaylist = (delay) => {
    setTimeout(() => {
      getPlaylist()
      console.log('playlist refreshed');
      sortPosts()
      console.log('posts sorted');
    }, delay)
  }

  const deletePost = async (songId) => {
    const deletedPost = await PostModel.delete(songId)
    console.log('deletedPost:', deletedPost);
    refreshPlaylist(100)
  }

  const updateVotes = async (post, updatedVotes) => {
    let updatedPost = {
      _id: post._id,
      votes: updatedVotes,
    }
    const result = await PostModel.update(updatedPost)
    if (result.data.post.votes >= 5) refreshPlaylist(100)
  }
  //#endregion

  //#region SEARCHING
  const handleChange = (e) => {
    setSearchValue(e.target.value)
    if(!visible){
      setVisible(true)
    }
  }

  //***************PRESENT****************** */

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
    postSong(postData)
    refreshPlaylist(500)
  }

  const postSong = async (song) => {
    if(isHidden === true){
      setIsHidden(false)
    }
    const urlId = match.params.id
    const data = {
      urlId,
      song
    }
    const result = await PostModel.create(data)
    // console.log(result)
    setSelectedSong(null)
  
  }
  const handleClick = e => {
    if (dropdownRef.current.contains(e.target)) {
      return;
    }
    setVisible(false);
    
  };
  //#endregion

  useEffect(() => {
    document.addEventListener('mousedown', handleClick, false);
    sortPosts()
    return () => document.removeEventListener('mousedown', handleClick, false);
  }, [playlist]);


  //*********************PRESENT******************* */
  useEffect(() => {
    async function getData(){
      const info = ({searchValue, accessToken})
      const list = await Spotify.search(info)
      const {items} = list.data.tracks
      console.log(items)
      setResults(items)
    }
    if(searchValue){
      getData()
    } else {
      setResults(null)
    }
    
  }, [searchValue]);


  return (
    <Layout>
      <Content>
      <Row className='playlistHeader'>
        <Col xs={0} sm={0} md={8} lg={7} xl={6}>
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
              visible={visible}
              setVisible={setVisible}
              selectSong={selectSong}
              handleChange={handleChange} 
              />
          </Col>
          <Col className='voteCol' xs={1} sm={1} md={1} lg={1} xl={1}>
            <p>Vote</p>
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
            isApproved={isApproved}
        />
      </Row>
      </Content>
      <Sider className='sidebarDiv' className={isHidden ? 'hide' : 'show'}>
        <Sidebar username={username} playlist={playlist} isPending={isPending} updatePlayer={updatePlayer} updateVotes={updateVotes}/>
      </Sider>
    </Layout>
  )
  
}

export default PlaylistContainer