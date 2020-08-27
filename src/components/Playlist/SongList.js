import React from 'react';

const SongList = ({ playlist, updatePlayer }) => {
  
  
  let posts
  let songs = []
  
  if (playlist) {
    posts = playlist.playlist.posts
  }
  
  if (posts) {
    songs = posts.map((post, index) => {
      return (
        <div onClick={() => updatePlayer(post.songId)} className='track'>
          <img src={post.albumArt} />
          <p>{post.songName}</p>
          <p>{post.albumName}</p>
          <p>{post.artist}</p>
          <p>Contributed by {post.user}</p>
        </div>
      )
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
