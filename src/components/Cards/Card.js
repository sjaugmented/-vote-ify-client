import React, {useState} from 'react';
import { useSpring, animated } from 'react-spring'
import './cards.css'



const Card = (props) => {
  //React Spring animation from https://codesandbox.io/embed/88lmnl6w88
  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg) `,
    config: { mass: 5, tension: 500, friction: 80 },
    
  })

  return (
    <div onClick={() => set(state => !state)} className='cardDiv'>
        <animated.div className="c front cardImg" style={{
          opacity: opacity.interpolate(o => 1 - o),
          transform,
          backgroundImage: `url(${props.coverart})`
        }} />
        <animated.div className="c back cardImg" style={{
          opacity,
          transform: transform.interpolate(t => `${t} rotateX(180deg)`),
          backgroundImage: 'url(https://i.imgur.com/Xqojp77.png)'
        }} />
        <img className='cardImg' src='https://i.imgur.com/fyANjbL.jpg' alt=' ' />
        <div className='overlay'>
          <h3 className='playlistTitle'>{props.title}</h3>
        </div>
    </div>
  )
}

export default Card;
