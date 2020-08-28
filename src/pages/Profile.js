import React from 'react';
import PostModel from '../models/post'

class Profile extends React.Component  {
  
  state = {
    posts: []
  }

  fetchData = async () => {
    let posts = []
    let array = this.props.posts[0]
    await array.forEach.forEach( async (post) => {
      await PostModel.show(post)
        .then(response => {
          posts.push(response)
        })
    })
    this.setState({
      posts
    })
  }

  componentDidMount() {
    this.fetchData()
  } 

  //Need to test the props getting passed down from verify. Currently getting an array of an array

render() {
  let songs = this.state.posts.map((post, index) => {
    return (
      <ul key={index}>
        <li> {post.songName} </li>
        <li> {post.artist} </li>
        <li> {post.albumName} </li>
      </ul>
    )
  }) 
  console.log("Here", this.props.posts[0])
    return (
      <div>
        <h1> {this.props.username} </h1>
        {this.state.posts ? songs : "Loading..."}
      </div>
    );
  }
}

export default Profile;
