import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import routes from './config/routes'
import HeadContainer from './components/Header/HeadContainer'
import Player from './components/Player'

import { Layout } from 'antd';
import 'antd/dist/antd.css';
import './components/Header/header.css'

const { Header, Footer, Sider, Content } = Layout;


function App() {
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
        title: 'Lady In Red',
        artist: 'Chris DeBurgh'
      }
  ])

  return (
    <div className="App">
    <Layout>
      <Header><HeadContainer/></Header>
      <Content>{routes}</Content>
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
