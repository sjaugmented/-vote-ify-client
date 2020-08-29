import React, {useState, useEffect} from 'react';
import 'antd/dist/antd.css';
import { DislikeOutlined, LikeTwoTone } from '@ant-design/icons';
import PendingPost from './PendingPost'


const Sidebar = ({playlist, isPending}) => {
  
  let posts
  
  if (playlist) {
    posts = playlist.playlist.posts.map((post, index) => {
          return (
            <PendingPost 
              key={index}
              post={post}
            />
          )
        })
  }



  return (
    <div className='sidebarDiv'>
      <h1>Pending Songs</h1>
      <ul>
        {posts ? posts : 'loading...'}
      </ul>
      
    
    </div>
  );
}

export default Sidebar;
