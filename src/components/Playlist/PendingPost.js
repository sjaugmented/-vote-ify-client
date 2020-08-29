import React, {useState, useEffect} from 'react';
import 'antd/dist/antd.css';
import { DislikeOutlined, LikeTwoTone } from '@ant-design/icons';

const PendingPost = ({ post, key }) => {
  const [upVote, setUpVote] = useState(true)
  const [votes, setVotes] = useState(post.votes)

  const updatePost = (post, votes) => {
    
  }

  const handleVote = (post) => {
    upVote ? setVotes(votes + 1) : setVotes(votes - 1)
    setUpVote(!upVote)
    console.log(votes)
  }
  
  return (
      <div>
          <li>{post.artist} - {post.songName}</li>
            <li><button onClick={() => {handleVote(post)}}>
              {upVote ? <LikeTwoTone /> : <DislikeOutlined />}
            </button></li>
          <li><p>{votes}</p></li>
      </div>
  )
}

export default PendingPost