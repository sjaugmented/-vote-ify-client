import React from 'react';
import 'antd/dist/antd.css';
import { Location } from '@reach/router'
import {Link} from 'react-router-dom'
// import { Location } from 'react-router'
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const menu = () => (
  <Location>
    {props => {
      console.log(props)
    return (
      <Menu selectedKeys={[props.location.pathname, props.location.pathname.hash, props.accessToken]}>
        <Menu.Item key="/playlist/:id">
          <Link to="/playlist/5f41ceada73d7c73c5d73178" {...props}>Electronic</Link>
        </Menu.Item>
        <Menu.Item key="/playlist/5f41ceada73d7c73c5d73179">
          <Link to="/playlist/5f41ceada73d7c73c5d73179">Alternative</Link>
        </Menu.Item>
      </Menu>
    );
  }}
  </Location>
  /* <Menu>
    <Menu.Item key="/playlist/5f41ceada73d7c73c5d73178">
      <a target="_blank" rel="noopener noreferrer" href="http://localhost:3000/playlist/5f41ceada73d7c73c5d73178">
        Electronic
      </a>
      
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://localhost:3000/playlist/5f41ceada73d7c73c5d73179">
        Alternative
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" alt=' ' href="http://localhost:3000/playlist/5f41ceada73d7c73c5d7317a">
        Rock
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" alt=' ' href="http://localhost:3000/playlist/5f41ceada73d7c73c5d7317b">
        Hip Hop
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" alt=' ' href="http://localhost:3000/playlist/5f41ceada73d7c73c5d7317c">
        Indie
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" alt=' ' href="http://localhost:3000/playlist/5f41ceada73d7c73c5d7317d">
        Reggae
      </a>
    </Menu.Item>
  </Menu>  */
);



const PlaylistDropdown = (props) => {
  
  return (
    <div className='dropdownDiv'>
    {props.username ? 
      <Dropdown overlay={menu}>
        <a className="ant-dropdown-link">
          Playlists <DownOutlined />
        </a>
    </Dropdown>
    : ''
    
    }

    
      
    </div>
  );
  
}

export default PlaylistDropdown;
