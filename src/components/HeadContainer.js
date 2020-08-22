import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class HeadContainer extends Component {
  render() {
    return (
      <div className="headContainer">
      <nav>
        <Link to='/'>Home</Link>{'  |  '}
        <Link to='/playlist'>Playlist</Link>{'  |  '}
        <Link to='/profile'>Profile</Link>
      </nav>
        
      </div>
    );
  }
}

export default HeadContainer;
