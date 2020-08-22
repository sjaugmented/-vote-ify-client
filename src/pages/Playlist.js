import React, { useState } from 'react';
import Sidebar from '../components/Sidebar'
import SongList from '../components/SongList'
import HeadContainer from '../components/Header/HeadContainer'
import styled from 'styled-components'

import '../components/sidebar.css'

import { Layout } from 'antd';
import 'antd/dist/antd.css';

const { Header, Footer, Sider, Content } = Layout;

function Playlist() {
  const [isHidden, setIsHidden] = useState(true)

  const toggle =() => {
    setIsHidden(!isHidden)
  }

    return (
      <Layout>
        <Content> <SongList /><button onClick={toggle}>toggle</button> </Content>
        <Sider className={isHidden ? 'hide' : 'show'}><Sidebar /></Sider>
      </Layout>
    );
}

export default Playlist;
