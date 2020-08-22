import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';

import Title from './Title'
import Navbar from './Navbar'
import HeaderArt from './HeaderArt'

class HeadContainer extends Component {
  render() {
    return (
      <div className="headContainer">
        <Row>
          <Col span={8}>
            <Title />
          </Col>
          <Col span={16}>
            <Row>
              <Navbar/>
            </Row>
            <Row>
              <HeaderArt />
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

{/* <nav>
        <Link to='/'>Home</Link>{'  |  '}
        <Link to='/playlist'>Playlist</Link>{'  |  '}
        <Link to='/profile'>Profile</Link>
      </nav> */}

export default HeadContainer;
