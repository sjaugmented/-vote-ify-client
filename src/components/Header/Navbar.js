import React from 'react';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';

import Auth from './Auth'
import PlaylistDropdown from './PlaylistDropdown'

const Navbar = (props) => {
  console.log(props.location)
  return (
    <div>
      <Row>
        <Col className='dropdownCol'>
          {props.location.pathname !== '/' ? 
            <PlaylistDropdown username={props.username} />
            :
            <></>
          }
        </Col>
        <Col className='authCol'>
          <Auth 
            username={props.username}
            spotifyId={props.spotifyId}
            location={props.location}
          />
        </Col>
      </Row>
    </div>
  );
}

export default Navbar;
