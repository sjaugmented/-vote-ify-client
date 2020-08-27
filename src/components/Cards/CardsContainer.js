import React from 'react';


import { Row, Col } from 'antd';
import 'antd/dist/antd.css';

import Card from './Card'


const CardsContainer = (props) => { 
 
  const playlists = props.playlists.playlists
  let list = []
  if(playlists){
    list = playlists.map((playlist, index)=>{
      return  (
        <Card 
          key={index}
          { ...playlist }
          />
      )
    })
  }
  return (
    <div>
      
      <Row className='cardsRow'>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>

          {list[0]}

        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          {list[1]}
        </Col>
      </Row>
      <Row className='cardsRow'>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          {list[2]}
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          {list[3]}
        </Col>
      </Row>
      <Row className='cardsRow'>
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
