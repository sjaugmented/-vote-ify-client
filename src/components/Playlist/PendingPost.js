import React, {useState} from 'react';
import 'antd/dist/antd.css';
import { DislikeOutlined, LikeTwoTone } from '@ant-design/icons';

const PendingPost = ({ post, key, updateVotes, updatePlayer }) => {
  const [upVote, setUpVote] = useState(true)
  const [votes, setVotes] = useState(post.votes)

  const handleVote = (post) => {
    let newVotes
    if (upVote) {
      newVotes = votes + 1
    } else {
      newVotes = votes - 1
    }
    //setVotes(newVotes)
    setUpVote(!upVote)
    updateVotes(post, newVotes)
  }
  
  return (
    <div className='pending-post'>
      <li className='pendingSong' onClick={() => { updatePlayer(post.songId) }}>{post.artist} - {post.songName}</li>
      <li >
        <button className='voteBtn' onClick={() => { handleVote(post) }}>
              {upVote ? <LikeTwoTone /> : <DislikeOutlined />}
        </button>
        <p className='voteCount'>{votes}</p>
        <p className='contributor'> - Suggested by: {post.user}</p>
      </li>
    </div>
  )
}

export default PendingPost