import React from 'react'

import PlaylistModel from '../../models/playlist'
import Sidebar from './Sidebar'


const PlaylistContainer = (props) => {
const playlist = props.playlist
// console.log(playlist)
// let title
// if(playlist){
//   title = playlist.title
//   console.log(title)
//   return title
// }
  return (
    <div>
      {/* {playlist.title} */}
      <h1>playlist name</h1>
    </div>
  )
  
}

export default PlaylistContainer