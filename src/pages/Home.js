import React from 'react';
import CardContainer from '../components/Cards/CardsContainer'
import '../components/Cards/cards.css'



const Home = (props) => {
    return (
      <div className='card-container'>
        <CardContainer playlists={props.playlists}/>
      </div>
    );
}

export default Home;


