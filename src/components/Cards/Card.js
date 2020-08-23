import React from 'react';


const Card = (props) => {
  return (
    <div>
      <h3>{props.playlist}</h3>
      <img className='cardImg' src={props.src} alt=' '/>
    </div>
  );
}

export default Card;
