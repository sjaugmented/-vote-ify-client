import React, {useState, useEffect} from 'react';
import Routes from './config/routes'
import PlaylistModel from './models/playlist'
import useFetch from './hooks/useFetch'
import UserModel from './models/user'
import HeadContainer from './components/Header/HeadContainer'
import Player from './components/Footer/Player'

import { Layout } from 'antd';
import 'antd/dist/antd.css';
import './components/Header/header.css'

const { Header, Footer, Sider, Content } = Layout;

function App(props) {

  // current Playlist
  const [playlist, setPlaylist] = useState([
      {
        user: 'Seth',
        title: 'Piano Man',
        artist: 'Billy Joel'
      }, {
        user: 'Evan',
        title: 'Secret Garden',
        artist: 'Bruce Springsteen'
      }, {
        user: 'Larry',
        title: 'Wreckingball',
        artist: 'Miley Cyrus'
      }
  ])

  // user state
  const [currentUser, setCurrentUser] = useState(localStorage.getItem('uid'))

  const storeUser = userId => {
    setCurrentUser({ currentUser: userId })
    localStorage.setItem('uid', userId)
  }

  const logout = (event) => {
    event.preventDefault()

    localStorage.removeItem('uid')
    UserModel.logout()
      .then(res => {
        console.log(res)
        setCurrentUser(null)
        props.history.push('/login')
      })
  }
  // Getting all playlists from db with custom hook
  const playlists = useFetch([])

  return (
    <div className="App">
      <Layout>
        <Header>
          <HeadContainer 
            currentUser={currentUser}
            logout={logout}
            playlists={playlists}
          />
        </Header>
        <Content>
          <Routes
            playlists={playlists}
          />
        </Content>
        <Footer>
          <Player
            playlist={playlist}
          />
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
