import React from 'react';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';

import Auth from './Auth'
import PlaylistDropdown from './PlaylistDropdown'

const Navbar = (props) => {

  console.log("Profile Props:", props)

  return (
    <div>
      <Row>
        <Col className='dropdownCol'>
          <PlaylistDropdown />
        </Col>
        <Col className='authCol'>
          <Auth 
            username={props.username}
          />
        </Col>
      </Row>
    </div>
  );
}

export default Navbar;
