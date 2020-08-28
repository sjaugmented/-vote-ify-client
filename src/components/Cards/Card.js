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
          backgroundImage: 'url(https://i.imgur.com/nY8PRGl.jpg)'
        }} />
        <img className='cardImg' src='https://i.imgur.com/fyANjbL.jpg' alt=' ' />
        <div className='overlay'>
          <h3 className='playlistTitle'>{props.title}</h3>
        </div>
    </div>


    // {/* <div
    //   className='cardDiv'
    //   onClick={() => toggle(!state)}
    // >
    //   <animated.div
    //     style={{
    //       opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
    //       transform: x
    //         .interpolate({
    //           range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
    //           output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
    //         })
    //         .interpolate(x => `scale(${x})`)
    //     }}
    //   >
    //   <DelayLink delay={500} className='playlistLink' to={`/playlist/${props._id}`} >
    //     <img className='cardImg' src={props.coverart} alt=' '/>
        // <div className='overlay'>
        //   <h3 className='playlistTitle'>{props.title}</h3>
        // </div>
    //     </DelayLink>
    //   </animated.div>  
    // </div> */}
  );
}

export default Card;
