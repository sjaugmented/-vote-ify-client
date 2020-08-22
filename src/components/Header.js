import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div className="headerContainer">
      <nav>
        <Link to='/'>Home</Link>{'  |  '}
        <Link to='/playlist'>Playlist</Link>{'  |  '}
        <Link to='/profile'>Profile</Link>
      </nav>
        <h1>This is a header</h1>
      </div>
    );
  }
}

export default Header;
