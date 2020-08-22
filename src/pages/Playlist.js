import React, { Component } from 'react';
import Sidebar from '../components/Sidebar'
import SongList from '../components/SongList'
import HeadContainer from '../components/HeadContainer'


import { Layout } from 'antd';
import 'antd/dist/antd.css';

const { Header, Footer, Sider, Content } = Layout;

class Playlist extends Component {
  render() {
    return (
      <Layout>
        {/* <Header><HeadContainer/></Header>
        <Layout> */}
          <Content><SongList /></Content>
          <Sider><Sidebar /></Sider>
        {/* </Layout> */}
      </Layout>
    );
  }
}

export default Playlist;
