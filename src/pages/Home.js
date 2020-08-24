import React, { Component } from 'react';
import CardContainer from '../components/Cards/CardsContainer'
import '../components/Cards/cards.css'
import PlaylistModel from '../models/playlist'


const Home = (props) => {
  // state = {
  //   playlists: []
  // }

  // componentDidMount(){
  //   this.fetchData()
  // }

  // fetchData = () => {
  //   PlaylistModel.all()
  //     .then(data => this.setState({playlists: data.playlists}))
  // }
  // render() {
    
    return (
      <div>
        <CardContainer playlists={props.playlists}/>
      </div>
    );
  
}

export default Home;


