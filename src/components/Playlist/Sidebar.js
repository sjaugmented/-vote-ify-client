import React, {useState, useEffect} from 'react';
import 'antd/dist/antd.css';
import { DislikeOutlined, LikeTwoTone } from '@ant-design/icons';



const Sidebar = ({playlist, isPending}) => {
  const [increment, setIncrement] = useState(true)
  
  console.log(isPending)
  let pendingPosts
  
  if (isPending) {
    pendingPosts = isPending
  }
  let songVotes
  // const [isPending, setPending] = useState(true)
  const [votes, setVote] = useState(songVotes)
  const [voteCount, setVoteCount] = useState(0)
  const [didVote, setDidVote] = useState(false)
 
  const handleVote = (post) => {
   setDidVote(!didVote)
  }


  return (
    <div className='sidebarDiv'>
      <h1>Pending Songs</h1>
      <ul>
        {pendingPosts ? pendingPosts.map((post, index)=>{
          songVotes = post.votes
          return (
            <>
            <li>{post.artist} - {post.songName}</li>
              <li><button onClick={() => {setDidVote(!didVote)}}>
              {/* <li><button onClick={setDidVote(!didVote)}> */}
                {didVote ? <LikeTwoTone /> : <DislikeOutlined />}
              </button></li>
            <li><p>{post.votes}</p></li>
            </>
          )
        }) : 'loading...'}
      </ul>
      
    
    </div>
  );
}

export default Sidebar;
