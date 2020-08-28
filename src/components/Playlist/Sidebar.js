import React from 'react';

const Sidebar = ({playlist, pendingPosts}) => {
  let posts
  let pendingSongs = []
  const songList = []
  if (playlist) {
    posts = playlist.playlist.posts
  }
  if(posts){
    pendingSongs = posts.map((post, index)=>{
      if(post.pending === true){
        return (
          {...post}
          
          )
        }
      })
    }
    console.log(pendingSongs)
    console.log(pendingPosts)
  return (
    <div className='sidebarDiv'>
    
    
    </div>
  );
}

export default Sidebar;
