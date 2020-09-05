import React, {useState} from 'react';
import 'antd/dist/antd.css';
import { HeartTwoTone, HeartFilled } from '@ant-design/icons';
import usePersistedState from '../../hooks/usePersistedState'

const PendingPost = ({ username, post, key, updateVotes, updatePlayer }) => {
  const [downVote, setUpVote] = usePersistedState(`${post._id} downvote`, 'false')
  const [votes, setVotes] = useState(post.votes)

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
  
  return (
    <div className='pending-post'>
      <li className='pendingSong' onClick={() => { updatePlayer(post.songId) }}>{post.artist} - {post.songName}</li>
      {username ?
        <li >
          <button className='voteBtn' onClick={() => { handleVote(post) }}>
                {downVote ? <HeartFilled className='filledHeart'/> : <HeartTwoTone twoToneColor='#eb2f96'/> }
          </button>
          <p className='voteCount'>{votes}</p>
          <p className='contributor'> - Suggested by: {post.user}</p>
        </li>
        :
        <></>
      }
    </div>
  )
}

export default PendingPost