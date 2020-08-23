import React from 'react';


const Card = (props) => {
  return (
    <div className='cardDiv'>
      <h3>{props.title}</h3>
      <img className='cardImg' src={props.coverart} alt=' '/>
    </div>
  );
}

export default Card;
