import React, {useState, useEffect} from 'react';
import 'antd/dist/antd.css';
import { DislikeOutlined, LikeTwoTone } from '@ant-design/icons';
import PostModel from '../../models/post'

const PendingPost = ({ post, key, updateVotes }) => {
  const [upVote, setUpVote] = useState(true)
  const [votes, setVotes] = useState(post.votes)

  // const updateVotes = async (post, updatedVotes) => {
  //   let updatedPost = {
  //     _id: post._id,
  //     votes: updatedVotes,
  //   }
  //   const result = await PostModel.update(updatedPost)
  //   console.log(result)
  // }

  const handleVote = (post) => {
    let newVotes
    if (upVote) {
      newVotes = votes + 1
    } else {
      newVotes = votes - 1
    }
    setVotes(newVotes)
    setUpVote(!upVote)
    updateVotes(post, newVotes)
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