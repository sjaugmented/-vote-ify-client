import React, { useState, useEffect } from 'react';
import UserModel from '../models/user'

const Profile = (props) => {
  console.log('posts>>>', props.posts)
  console.log('username>>>', props.username);
  let postArr = []
  if (props.posts) {
    postArr = props.posts.map((post, index) => {
      return (
        <li>{post}</li>
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
            {postArr}
          
          </ul>
        </div>
      </div>
    );
  }

export default Profile