import React from 'react';
import { useSpring, animated } from 'react-spring'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

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
