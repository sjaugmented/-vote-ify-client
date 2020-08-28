import React, {useState, useEffect} from 'react';

const Sidebar = ({playlist, pendingPosts}) => {
  let posts
  // let pendingSongs = []
  // const songList = []
  if (playlist) {
    posts = playlist.playlist.posts
  }
  let songVotes
  const [isPending, setPending] = useState(true)
  const [votes, setVote] = useState(songVotes)
 
  console.log(posts)



  
  return (
    <div className='sidebarDiv'>
      <h1>Pending Songs</h1>
      <ul>
        {posts ? posts.map((post, index)=>{
          songVotes = post.votes
          return (
            <>
            <li>{post.artist} - {post.songName}</li>
            <li><button onClick={()=> setVote(post.votes++)}>Vote</button></li>
            <li><p>{post.votes}</p></li>
            </>
          )
        }) : 'loading...'}
      </ul>
      
    
    </div>
  );
}

export default Sidebar;
