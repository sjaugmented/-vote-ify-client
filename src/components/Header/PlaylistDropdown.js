import React from 'react';
import 'antd/dist/antd.css';

import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const menu = (
  <Menu>
    <Menu.Item>
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
      <a target="_blank" rel="noopener noreferrer" href="http://localhost:3000/playlist/5f41ceada73d7c73c5d7317a">
        Rock
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://localhost:3000/playlist/5f41ceada73d7c73c5d7317b">
        Hip Hop
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://localhost:3000/playlist/5f41ceada73d7c73c5d7317c">
        Indie
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://localhost:3000/playlist/5f41ceada73d7c73c5d7317d">
        Reggae
      </a>
    </Menu.Item>
    
  </Menu>
);

const PlaylistDropdown = () => {
  return (
    <div className='dropdownDiv'>
      <Dropdown overlay={menu}>
        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
          Playlists <DownOutlined />
        </a>
    </Dropdown>
    </div>
  );
}

export default PlaylistDropdown;
