import { useState, useRef, useEffect, useContext } from 'react';
import './App.css';
import Header from './../../UI/Header/Header';
import Card from '../../UI/Card/Card';
import { ConfigContext } from './../../../Context/ConfigContext/ConfigContext';
import { MovieContext } from './../../../Context/MovieContext/MovieContext';

function App() {
  
  const { api_url } = useContext(ConfigContext)
  
  const { currentMovie, upComingMovie, tvShows , popular, topRated } = useContext(MovieContext)
  console.log(tvShows, 'tv shows');
  return (
      <div className="App">

        <Header />
        <h2>Now Played</h2>
        <Card 
          movies={currentMovie}
        />
        <h2>Up Coming</h2>
        <Card 
          movies={upComingMovie}
        />
        <h2>Tv Shows</h2>
        <Card 
          movies={tvShows}
        />
        <h2>Popular</h2>
        <Card 
          movies={popular}
        />
        <h2>Top Rated</h2>
        <Card 
          movies={topRated}
        />
      </div>
  );
}

export default App;



  // const scrolled = useRef(0);

  // console.log(scrolled.current, 'test');
  // useEffect(() => {
  //   const nav = document.querySelector('nav')
  //   nav.style.background = 'black'

  // }, [])
  

  // const handleScroll = () => {
    
  //   if(scrolled.current) {
     
  //     // if (scrollTop > 30) {
  //     // }
  //   }
  // }