import React from 'react';
import { Link } from 'react-router-dom'
import routes from './config/routes'


function App() {
  return (
    <div className="App">
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/playlist'>Playlist</Link>
      <Link to='/profile'>Profile</Link>
    </nav>
      {routes}
    </div>
  );
}

export default App;
