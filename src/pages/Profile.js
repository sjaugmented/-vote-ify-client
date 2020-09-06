import React, { useState, useEffect } from 'react';
import UserModel from '../models/user'

const Profile = (props) => {
  const [user, setUser] = useState()
  
  const fetchUser = async () => {
    console.log(props.match.params.spotId);
    const result = await UserModel.show(props.match.params.spotId)
    console.log(result);
    setUser(result.user)
  }
  
  useEffect(() => {
    fetchUser()

  }, [])

  // let posts
  let songs = []

  // if (user) {
  //   console.log('user', user)
  //   posts = user.posts
  //   console.log(user.posts)
  // }

  if (user) {
    // console.log(user.user)
    songs = user.posts.map((post, index) => {
      // console.log(post);
      return (
          <div onClick={() => props.updatePlayer(post.songId)} className='track'>
            <img src={post.albumArt} alt='album art'/>
            <p>{post.songName}</p>
            <p>{post.albumName}</p>
            <p>{post.artist}</p>
            <p>Contributed by {post.user}</p>
            <p>{post.votes}</p>
            <button onClick={() => props.deletePost(post.songId)} className='delete' >X</button>
          </div>
      )
    })
  }

    return (
      <div className='profile'>
        <div className='profile-header'>
          <h1>{props.username}</h1>
        </div>
        <div className='profile-posts-list'>
          <h3>Contributed Songs:</h3>
          <ul>
            {songs}
          </ul>
        </div>
      </div>
    );
  }

export default Profile