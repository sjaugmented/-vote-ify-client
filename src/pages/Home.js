import React, { Component } from 'react';
import CardContainer from '../components/Cards/CardsContainer'
import '../components/Cards/cards.css'


class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <CardContainer />
      </div>
    );
  }
}

export default Home;


