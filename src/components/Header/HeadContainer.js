import React, { Component } from 'react';

import { Row, Col } from 'antd';
import 'antd/dist/antd.css';

import Brand from './Brand'
import Navbar from './Navbar'
import HeaderArt from './HeaderArt'

class HeadContainer extends Component {
  render() {
    return (
      <div className="headContainer">
        <Row>
          <Col xs={0} sm={0} md={0} lg={6} xl={6} className='titleCol'>
            <Brand />
          </Col>
          <Col xs={24} sm={24} md={24} lg={18} xl={18}>
            <Row justify="end" className='navbarRow'>
              <Navbar/>
            </Row>
            <Row className='headerArtRow'>
              <HeaderArt />
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default HeadContainer;
