import React, { Component } from 'react';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';


import Card from './Card'
import PlaylistModel from '../../models/playlist';


class CardsContainer extends Component{ 

  componentDidMount(){
    this.fetchData()
  }

  fetchData = () => {
    PlaylistModel.all()
      .then(data => {
        console.log(data.playlists)
      })
  }

  render(){
    return (
      <div>
        <Row>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Card 
              src={process.env.PUBLIC_URL + '/assets/images/electronic.jpg'}
              playlist='Electronic'  
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Card 
              src={process.env.PUBLIC_URL + '/assets/images/alternative.jpg'}
              playlist='Alternative'  
            />
          </Col>
        </Row>
        <Row>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Card 
              src={process.env.PUBLIC_URL + '/assets/images/rock.jpg'}
              playlist='Rock'  
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Card 
              src={process.env.PUBLIC_URL + '/assets/images/hiphop.jpg'}
              playlist='Hip Hop'  
            />
          </Col>
        </Row>
        <Row>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Card 
              src={process.env.PUBLIC_URL + '/assets/images/indie.jpg'}
              playlist='Indie'  
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Card 
              src={process.env.PUBLIC_URL + '/assets/images/classical.jpg'}
              playlist='Classical'  
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default CardsContainer;
