import React, { useState, useEffect } from 'react';
//import model
import PlaylistModel from '../models/playlist'
import SpotifyModel from '../models/spotify'

//import components
import PlaylistContainer from '../components/Playlist/PlaylistContainer';
import Sidebar from '../components/Playlist/Sidebar'


//import styles
import '../components/Playlist/playlist.css'
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import PostModel from '../models/post';
const { Sider, Content } = Layout;

const Playlist = (props) => {

  //call fetch request to show the single playlist
  const [playlist, setPlaylist] = useState()

  const getPlaylist = async () => {
    const result = await PlaylistModel.show(props.match.params.id)
    setPlaylist({ playlist: result.playlist })
  }

  //spotify api get request - test
  const [spotPlaylist, setSpotPlaylist] = useState()
  const spotifyPlaylist = async () => {
    try {
      console.log(props.token)
      const showPlaylist = await SpotifyModel.playlist(props.token)
      console.log(showPlaylist) // spotify object
      setSpotPlaylist({ spotPlaylist: showPlaylist.data.items })
      console.log(spotPlaylist) // fucking nothing
    } catch (error) {
      console.log(error)
    }
  }



  const populate = () => {
    console.log(spotPlaylist) // array of 50 objects

    // let songNames = spotPlaylist.map((song, index) => {
    //   return `song at index ${index} is ${song.track.name}`
    // })
    // console.log(songNames)

    //let songs = spotPlaylist.data.items

    // songs.forEach(async song => {
    //   const newPost = await PostModel.create({
    //     song: song.track.name,
    //     albumName: song.track.album.name,
    //     albumArt: song.track.album.images[2].url,
    //     artist: song.track.artist[0].name
    //   })
    //   console.log(newPost)
    // })
  }

  useEffect(() => {
    getPlaylist()
    spotifyPlaylist()
  }, []);

  return (
    <>
      <PlaylistContainer playlist={playlist} />
      <button onClick={populate}>Populate</button>
    </>
  );


}

export default Playlist;


