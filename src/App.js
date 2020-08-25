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
import './components/Footer/footer.css'

const { Header, Footer, Sider, Content } = Layout;

function App(props) {

  // current Playlist
  const [trackList, setTrackList] = useState([
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
  const [currentUser, setCurrentUser] = useState({})

  const fetchLogin = async () => {
    try {
      const result = await fetch('http://localhost:3001/api/v1/auth/verify', {
        credentials: 'include'
      })
      const data = await result.json()
      console.log('data:', data)
      if (data.spotifyId && data.name && data.token) {
        setCurrentUser({
          spotifyId: data.spotifyId,
          name: data.name,
          token: data.token
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchLogin()
    return () => {
      fetchLogin()
    }
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
            playlists={playlists}
          />
        </Content>
        <Footer>
          <Player
            playlist={trackList}
          />
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
