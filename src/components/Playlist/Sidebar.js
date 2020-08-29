import React, {useState, useEffect} from 'react';
import 'antd/dist/antd.css';
import { DislikeOutlined, LikeTwoTone } from '@ant-design/icons';



const Sidebar = ({playlist, isPending}) => {
  const [increment, setIncrement] = useState(true)
  
  console.log(isPending)
  let posts
  
  if (playlist) {
    posts = playlist.playlist.posts
  }
  let songVotes
  // const [isPending, setPending] = useState(true)
  const [votes, setVote] = useState(songVotes)
 
  const handleVote = (post) => {
    increment ? setVote(post.vote++) : setVote(post.vote--)
    setIncrement(!increment)
  }


  return (
    <div className='sidebarDiv'>
      <h1>Pending Songs</h1>
      <ul>
        {posts ? posts.map((post, index)=>{
          songVotes = post.votes
          return (
            <>
            <li>{post.artist} - {post.songName}</li>
              <li><button onClick={() => {setVote(post.votes++)}}>
                {increment ? <LikeTwoTone /> : <DislikeOutlined />}
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
