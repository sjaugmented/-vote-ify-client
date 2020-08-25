import React from 'react';
import { Link } from 'react-router-dom'


const Card = (props) => {
  return (
    <div className='cardDiv'>
      <h3 className='playlistTitle'>{props.title}</h3>
      <Link to={`/playlist/${props._id}`} >
        <img className='cardImg' src={props.coverart} alt=' '/>
      </Link>
    </div>
  );
}

export default Card;
