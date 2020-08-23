import React, { Component } from 'react';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';


import Card from './Card'
import PlaylistModel from '../../models/playlist';


class CardsContainer extends Component{ 
  state ={
    playlists: []
  }
  componentDidMount(){
    this.fetchData()
  }

  fetchData = () => {
    PlaylistModel.all()
      .then(data => this.setState({ playlists: data.playlists}))
  }

  render(){
    let list = this.state.playlists.map((playlist, index)=>{
      return <Card src={playlist.coverart} key={index} title={playlist.title}/>
    })
    return (
      <div>
        {list}
        {/* <Row>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Card 
               key={1}
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Card 
              
            />
          </Col>
        </Row>
        <Row>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Card 
              
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Card 
                
            />
          </Col>
        </Row>
        <Row>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Card 
                
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Card 
         
            />
          </Col>
        </Row> */}
      </div>
    );
  }
}

export default CardsContainer;
