import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import DelayLink from 'react-delay-link'
import { useSpring, animated } from 'react-spring'




const Card = (props) => {
  //React Spring animation from https://codesandbox.io/embed/88lmnl6w88
  const [state, toggle] = useState(true)
  const { x } = useSpring({ from: { x: 0 }, x: state ? 1 : 0, config: { duration: 1000 } })
  return (
    <div
      className='cardDiv'
      onClick={() => toggle(!state)}
    >
      <animated.div
        style={{
          opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
          transform: x
            .interpolate({
              range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
              output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
            })
            .interpolate(x => `scale(${x})`)
        }}
      >
      <DelayLink delay={500} className='playlistLink' to={`/playlist/${props._id}`} >
        <img className='cardImg' src={props.coverart} alt=' '/>
        <div className='overlay'>
          <h3 className='playlistTitle'>{props.title}</h3>
        </div>
        </DelayLink>
      </animated.div>  
    </div>
  );
}

export default Card;
