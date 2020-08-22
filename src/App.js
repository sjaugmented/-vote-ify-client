import React from 'react';
import { Link } from 'react-router-dom'
import routes from './config/routes'
import HeadContainer from './components/HeadContainer'
import Player from './components/Player'

import { Layout } from 'antd';
import 'antd/dist/antd.css';

const { Header, Footer, Sider, Content } = Layout;


function App() {
  return (
    <div className="App">
    <Layout>
      <Header><HeadContainer/></Header>
      <Content>{routes}</Content>
      <Footer><Player/></Footer>
    </Layout>
    
    </div>
  );
}

export default App;
