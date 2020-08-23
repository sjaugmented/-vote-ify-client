import React, { Component } from 'react';
import Sidebar from '../components/Playlist/Sidebar'
import SongList from '../components/Playlist/SongList'
import PlaylistContainer from '../components/Playlist/PlaylistContainer';
import PlaylistModel from '../models/playlist'


import '../components/Header/header.css'

import { Layout } from 'antd';
import 'antd/dist/antd.css';


const { Header, Footer, Sider, Content } = Layout;

class Playlist extends Component {
//   const [isHidden, setIsHidden] = useState(true)

//   const toggle =() => {
//     setIsHidden(!isHidden)
//   }

    // return (
    //   <Layout>
    //     <Content> <SongList /><button onClick={toggle}>toggle</button> </Content>
    //     <Sider className={isHidden ? 'hide' : 'show'}><Sidebar /></Sider>
    //   </Layout>
    // );

    state = {
      playlist: ''
    }
  
    componentDidMount(){
      PlaylistModel.show(this.props.match.params.id)
        .then(data => {
          this.setState({playlist: data.playlist})
          // console.log(this.state.playlist)
        })
    }

    render(){
      return (
        <PlaylistContainer playlist={this.state.playlist}/>
      )
    }
}

export default Playlist;
