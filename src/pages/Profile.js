import React, { useState, useEffect } from 'react';
import UserModel from '../models/user'

const Profile = (props) => {
  
  

    return (
      <div className='profile'>
        <div className='profile-header'>
          <h1>{props.username}</h1>
        </div>
        <div className='profile-posts-list'>
          <h3>Contributed Songs:</h3>
          <ul>
          
          </ul>
        </div>
      </div>
    );
  }

export default Profile