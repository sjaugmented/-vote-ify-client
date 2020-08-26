import React from 'react';

const SongList = ({ playlist }) => {
  
  let posts
  let songs = []
  
  if (playlist) {
    posts = playlist.playlist.posts
  }
  
  if (posts) {
    songs = posts.map((post, index) => {
      return <p>{post.song}</p>
    })
  } else {
    
  }
  
  
  return (
    <div className='songList'>
      {songs}

    </div>
  );
}

export default SongList;
