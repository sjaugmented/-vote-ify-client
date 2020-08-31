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
    <div className='sidebarDiv w3-container w3-center w3-animate-right'>
      <h1 className='sidebarHeader'>Vote Songs In!</h1>
      <ul className='sidebarList'>
        {posts ? posts : 'loading...'}
      </ul>
    </div>
  );
}

export default Sidebar;