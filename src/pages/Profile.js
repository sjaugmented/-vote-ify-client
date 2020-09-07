import React, { useState, useEffect } from 'react';
import UserModel from '../models/user'
import PostModel from '../models/post'
import Popup from 'reactjs-popup'

const Profile = (props) => {
  const [user, setUser] = useState()
  const [open, setOpen] = useState(true)
  const closeModal = () => setOpen(false)
  
  const fetchUser = async () => {
    const result = await UserModel.show(props.match.params.spotId)
    setUser(result.user)
  }
  
  // let posts
  let songs = []
  
  useEffect(() => {
    fetchUser()

  }, [])

  const deletePost = async (songId) => {
    const deletedPost = await PostModel.delete(songId)
    console.log('deletedPost:', deletedPost);
    fetchUser()
  }

  if (user) {
    songs = user.posts.map((post, index) => {
      return (
          <div onClick={() => props.updatePlayer(post.songId)} className='track' >
              <img src={post.albumArt} alt='album art'/>
              <p><span className='track-name'>{post.songName}</span> | {post.albumName} | {post.artist}</p> 
              <p>Contributed by {post.user} | {post.votes}</p>
              <button onClick={() => deletePost(post.songId)} className='delete' >Remove</button>
          </div>
      )
    })
  }

    return (
      <div className='profile'>
        <div className='profile-header'>
          <h1>{props.username}</h1>
        </div>
        { open ?
            <Popup open={open} closeOnDocumentClick onClose={closeModal}>
              <div className="modal tutorial">
                <p>Pardon our dust...</p>
                <p>We're still working on this page.</p>
                <button onClick={closeModal}>No worries!</button>
              </div>
            </Popup>
            :
            ''
          }
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