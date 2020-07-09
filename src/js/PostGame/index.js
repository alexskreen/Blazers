import React from 'react';
import Hero from './../PreGame/Hero';
import CTA from './../PreGame/CTA';
import KeyPlayers from './../PreGame/KeyPlayers';
import NewsFeed from './../PreGame/NewsFeed';
import UpcomingGames from './../PreGame/UpcomingGames';
import ArenaInfo from './../PreGame/ArenaInfo';
import Footer from './../PreGame/Footer';

import '../../scss/components/_pre-game-index.scss';

///////  PRE GAME INDEX //////
const index = () => {
  return (
    <div className='pre-game'>
      <div className='pre-game-container'>
        <CTA />
        <KeyPlayers />
        <NewsFeed />
        <UpcomingGames />
        <ArenaInfo />
        <Footer />
      </div>
    </div>
  );
};

export default index;