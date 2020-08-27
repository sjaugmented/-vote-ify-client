import React from 'react';
import DelayLink from 'react-delay-link'

import { Row, Col } from 'antd';
import 'antd/dist/antd.css';

import Card from './Card'


const CardsContainer = (props) => { 
 
  const playlists = props.playlists.playlists
  let list = []
  if(playlists){
    list = playlists.map((playlist, index)=>{
      return  (
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <DelayLink delay={500} className='playlistLink' to={`/playlist/${playlist._id}`} >
            <Card 
              key={index}
              { ...playlist }
              />
          </DelayLink>
        </Col>
      )
    })
  }
  return (
    <div>
      <Row className='cardsRow'>
          {list[0]}
          {list[1]}
      </Row>
      <Row className='cardsRow'>
          {list[2]}
          {list[3]}
      </Row>
      <Row className='cardsRow'>
          {list[4]}
          {list[5]}
      </Row>
      <Row className='cardsRow'>
          {list[6]}
          {list[7]}
      </Row>
      <Row className='cardsRow'>
          {list[8]}
          {list[9]}
      </Row>
      <Row className='cardsRow'>
          {list[10]}
          {list[11]}
      </Row>
    </div>
  );
}


export default CardsContainer;
