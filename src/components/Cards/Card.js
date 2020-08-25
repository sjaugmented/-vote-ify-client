import React from 'react';
import { Link } from 'react-router-dom'


const Card = (props) => {
  return (
    <div className='cardDiv'>
      <Link to={`/playlist/${props._id}`} >
        <img className='cardImg' src={props.coverart} alt=' '/>
      </Link>
      <div className='overlay'>
        <h3 className='playlistTitle'>{props.title}</h3>
      </div>
    </div>
  );
}

export default Card;
