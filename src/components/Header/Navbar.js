import React from 'react';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';

import Auth from './Auth'
import PlaylistDropdown from './PlaylistDropdown'

const Navbar = (props) => {
  return (
    <div>
      <Row>
        <Col className='dropdownCol'>
          <PlaylistDropdown username={props.username}/>
        </Col>
        <Col className='authCol'>
          <Auth 
            username={props.username}
            spotifyId={props.spotifyId}
          />
        </Col>
      </Row>
    </div>
  );
}

export default Navbar;
