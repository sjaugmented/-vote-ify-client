import React, { useState, useEffect } from 'react';
//import model
import PlaylistModel from '../models/playlist'
import Popup from 'reactjs-popup'

//import components
import PlaylistContainer from '../components/Playlist/PlaylistContainer';


//import styles
import '../components/Playlist/playlist.scss'
import '../components/Playlist/songList.css'
import 'antd/dist/antd.css';

const Playlist = (props) => {
  const [visited, setVisited] = useState(false)

  //call fetch request to show the single playlist
  const [playlist, setPlaylist] = useState()
  
  const getPlaylist = async () => {
    const result = await PlaylistModel.show(props.match.params.id)
    setPlaylist({playlist: result.playlist})
  }

  useEffect(() => {
    getPlaylist()
  }, []);

  const markVisited = () => {
    setVisited(true)
    localStorage.setItem('visited', true)
  }

  

  return (
    <>
      { !visited ?
        <Popup open={visited} closeOnDocumentClick onClose={markVisited}>
          <div className="modal">
            <p>This is the Playlist page. You can use the 'Suggest a song' search bar at the top to find songs on Spotify and suggest them to be added to the playlist.</p>
            <p>Once a song is suggested, it will show up in the sidebar on the right where other members of the community can like them.</p>
            <p>Once a song reaches the required number of likes, it will be added to the Playlist proper.</p>
          </div>
        </Popup>
        :
        ''
      }
      <PlaylistContainer updatePlayer={props.updatePlayer} match={props.match} username={props.username} spotifyId={props.spotifyId} admin={props.admin} accessToken={props.accessToken} playlist={playlist} getPlaylist={getPlaylist} />
    </>
  );   

}

export default Playlist;