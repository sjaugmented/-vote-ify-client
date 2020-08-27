import React, {useState, useEffect} from 'react';
import Routes from './config/routes'
import useFetch from './hooks/useFetch'
import UserModel from './models/user'
import HeadContainer from './components/Header/HeadContainer'
import Player from './components/Footer/Player'
import SpotifyPlayer from 'react-spotify-player'

import { Layout } from 'antd';
import 'antd/dist/antd.css';
import './components/Header/header.css'
import './components/Footer/footer.css'
import './app.css'

const { Header, Footer, Sider, Content } = Layout;

const size = {
  width: '100%',
  height: 100
}
const view = 'coverart'
const theme = 'black'

function App(props) {
  const [currentSong, setCurrentSong] = useState({
    currentSong: '2SAqBLGA283SUiwJ3xOUVI'
  })

  const spotifyUri = 'spotify:track:'
  const playerUri = spotifyUri + currentSong.currentSong

  const updatePlayer = (songId) => {
    setCurrentSong({
      currentSong: songId
    })
  }

  // user state
  const [currentUser, setCurrentUser] = useState({})

  const fetchLogin = async () => {
    try {
      const result = await fetch('http://localhost:3001/api/v1/auth/verify', {
        credentials: 'include'
      })
      const data = await result.json()
      if (data.spotifyId && data.name && data.access) {
        setCurrentUser({
          spotifyId: data.spotifyId,
          name: data.name,
          token: data.access
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchLogin()
  }, []);

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
            username={currentUser.name}
            logout={logout}
            playlists={playlists}
          />
        </Header>
        <Content>
          <Routes
            token={currentUser.token}
            updatePlayer={updatePlayer}
            playlists={playlists}
            username={currentUser.name}
          />
        </Content>
        <Footer>
          <div className="player">
          <SpotifyPlayer 
            uri={playerUri}
            size={size}
            view={view}
            theme={theme}
            />
          </div>  
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
