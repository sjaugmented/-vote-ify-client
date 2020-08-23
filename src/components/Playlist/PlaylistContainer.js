import React, { Component } from 'react'

import PlaylistModel from '../../models/playlist'
import Sidebar from './Sidebar'


class PlaylistContainer extends Component {
  
  render(props) {
    return (
      <div>
        <h1>{this.props.playlist.title}</h1>
      </div>
    )
  }
}

export default PlaylistContainer