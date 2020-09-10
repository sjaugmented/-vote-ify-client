import React, {useState, useEffect} from 'react';
import 'antd/dist/antd.css';
import { HeartTwoTone } from '@ant-design/icons';
import Icon from '@ant-design/icons';
import usePersistedState from '../../hooks/usePersistedState'


const PendingPost = ({ isVisible, username, post, index, updateVotes, updatePlayer }) => {
  const [downVote, setUpVote] = usePersistedState(`${post._id} downvote`, 'false')
  const [votes, setVotes] = useState(post.votes)
  const [time, setTime] = useState()

  // store ms remaining in state
  const getRemainingMs = () => {
    // console.log('getting ms')

    let today = Date.now()
    let cutoff = Date.parse(post.timestamp) + (1000 * 60 * 60 * 24 * 14)
    let remaining = cutoff - today
    setTime(remaining)
  }
  // convert ms into readable time format
  const msToTime = () => {
    let seconds = Math.floor((time / 1000) % 60)
    let minutes = Math.floor((time / (1000 * 60)) % 60)
    let hours = Math.floor((time / (1000 * 60 * 60)) % 24)
    let days = Math.floor((time / (1000 * 60 * 60 * 24)))

    // days = (days < 10) ? '0' + days : days
    hours = (hours < 10) ? '0' + hours : hours
    minutes = (minutes < 10) ? '0' + minutes : minutes
    seconds = (seconds < 10) ? '0' + seconds : seconds

    let className

    // one hour left
    if (time <= 3600000) className = 'priority'
    // one day left
    else if (time <= 86400000) className = 'attention'
    else className = 'safe'

    return (
      <span className={className}>{days}d {hours}:{minutes}:{seconds}</span>
    )
  }

  useEffect(() => {
    getRemainingMs()
    const interval = setInterval(() => {
      getRemainingMs()
    }, 1000);
    return () => clearInterval(interval)
  }, [])

  const handleVote = (post) => {
    let newVotes
    if (downVote) {
      newVotes = votes - 1
    } else {
      newVotes = votes + 1
    }
    setVotes(newVotes)
    setUpVote(!downVote)
    updateVotes(post, newVotes)
  }

  const HeartSvg = () => (
    <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
      <path d="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z" />
    </svg>
);

  const HeartIcon = props => <Icon component={HeartSvg} {...props} />;

  let postDisplay

  if (username) {
    if (username !== post.user) {
      postDisplay =
        <>
          <li className='pendingSong others' onClick={() => { updatePlayer(post.songId) }}>{post.artist} - {post.songName}</li>
          <li className = 'contributor others'> Suggested by {post.user} </li>
          <li>
            <button className='voteBtn' onClick={() => { handleVote(post) }}>
                  {downVote ? <HeartIcon style={{ color: 'rgb(255, 0, 200)' }} /> : <HeartTwoTone color="#eb2f96" twoToneColor="rgb(0,0,0)" /> }
          </button>
          Voting ends in: {msToTime()}
          </li>
        </>  
    } else {
      postDisplay = 
        <>
          <li className='pendingSong self' onClick={() => { updatePlayer(post.songId) }}>{post.artist} - {post.songName}</li>
          <li>
            <button className = 'voteBtn self' >
                  <HeartIcon className='self' style={{ color: 'rgb(43, 87, 141)' }} />
            </button>
          {post.user === username ? <p className='voteCount self'>{votes}</p> : ''} {'\n'}
          <span className='self'>Voting ends in: {msToTime()}</span>
          </li>
        </>  
    }
  } else {
    postDisplay = 
      <>
        <li className='pendingSong others' onClick={() => { updatePlayer(post.songId) }}>{post.artist} - {post.songName}</li>
      <li className='contributor others'> Suggested by {post.user} </li>
      </>
  }
  
  return (
    <div className='pending-post' key={index}>
      {postDisplay}
    </div>
  )
}

export default PendingPost