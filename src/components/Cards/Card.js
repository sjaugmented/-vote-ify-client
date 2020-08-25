import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'
import DelayLink from 'react-delay-link'
//import './flipStyle.css'


const Card = (props) => {
  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  })

  return (
    <div onClick={() => set(state => !state)}>
      <DelayLink delay={1000} to={`/playlist/${props._id}`} >
        <div className='overlay'>
          <h3 className='playlistTitle'>{props.title}</h3>
        </div>
        <animated.div className='c cardImg' style={{
          backgroundImage: `url(${props.coverart})`,
          opacity: opacity.interpolate(o => 1 - o), transform
        }} />
        <animated.div className='c cardImg back' style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`)}} />
        
          {/* <img className='cardImg' src={props.coverart} alt=' '/> */}
      </DelayLink>
    </div>
  );
}

export default Card;
