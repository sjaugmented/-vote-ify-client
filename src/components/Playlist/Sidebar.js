import React, {useState, useEffect} from 'react';
import 'antd/dist/antd.css';
import PendingPost from './PendingPost'

const Sidebar = ({updatePlayer, isPending, updateVotes}) => {
  
  let posts
  
  if (isPending) {
    posts = isPending.map((post, index) => {
          return (
            <PendingPost 
              key={index}
              post={post}
              updateVotes={updateVotes}
              updatePlayer={updatePlayer}
            />
          )
        })
  }

  return (
    <div className='sidebarDiv'>
      <h1 className='sidebarHeader'>Pending Songs</h1>
      <ul className='sidebarList'>
        {posts ? posts : 'loading...'}
      </ul>
    </div>
  );
}

export default Sidebar;