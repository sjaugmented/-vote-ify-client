import React, {useState, useEffect} from 'react';
import 'antd/dist/antd.css';
import { DislikeOutlined } from '@ant-design/icons';



const Sidebar = ({playlist, isPending}) => {
  console.log(isPending)
  let posts
  
  if (playlist) {
    posts = playlist.playlist.posts
  }
  let songVotes
  // const [isPending, setPending] = useState(true)
  const [votes, setVote] = useState(songVotes)
 
  


  return (
    <div className='sidebarDiv'>
      <h1>Pending Songs</h1>
      <ul>
        {posts ? posts.map((post, index)=>{
          songVotes = post.votes
          return (
            <>
            <li>{post.artist} - {post.songName}</li>
            <li><button onClick={()=> setVote(post.votes++)}><DislikeOutlined /></button></li>
            <li><p>{post.votes}</p></li>
            </>
          )
        }) : 'loading...'}
      </ul>
      
    
    </div>
  );
}

export default Sidebar;
