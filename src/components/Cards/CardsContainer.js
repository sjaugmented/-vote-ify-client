import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import { Row, Col } from 'antd';
import 'antd/dist/antd.css';

import Card from './Card'
import PlaylistModel from '../../models/playlist';


const CardsContainer = (props) => { 
 
  const playlists = props.playlists.playlists
  console.log(playlists)
  let list = []
  if(playlists){
    list = playlists.map((playlist, index)=>{
      return  <Link to={`/playlist/${playlist._id}`} key={index} >
        <Card 
          { ...playlist }
          />
      </Link> 
    })
  }
  return (
    <div>
      <Row>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          {list[0]}
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          {list[1]}
        </Col>
      </Row>
      <Row>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          {list[2]}
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          {list[3]}
        </Col>
      </Row>
      <Row>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}> 
          {list[4]}
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}> 
          {list[5]}
        </Col>
      </Row>
    </div>
  );
}


export default CardsContainer;
