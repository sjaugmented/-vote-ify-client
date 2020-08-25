import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'
import DelayLink from 'react-delay-link'
//import './flipStyle.css'


const Card = (props) => {
  return (
    <div className='cardDiv'>
      <h3 className='playlistTitle'>{props.title}</h3>
      <Link to={`/playlist/${props._id}`} >
        <img className='cardImg' src={props.coverart} alt=' '/>
      <div className='overlay'>
        <h3 className='playlistTitle'>{props.title}</h3>
      </div>
      </Link>
    </div>
  );
}

export default Card;
