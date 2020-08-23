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
          <PlaylistDropdown />
        </Col>
        <Col className='authCol'>
          <Auth 
            currentUser={props.currentUser}
          />
        </Col>
      </Row>
    </div>
  );
}

export default Navbar;
