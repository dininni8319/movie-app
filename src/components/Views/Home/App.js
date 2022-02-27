import { useState, useRef, useEffect } from 'react';
import './App.css';
import Header from './../../UI/Header/Header';
import Card from '../../UI/Card/Card';

function App() {
  
  const api_url = {
    secret: process.env.REACT_APP_MOVIES_SECRET,
    movies: process.env.REACT_APP_MOVIES_API_URL
  }
  
  const [ movies, setMovies] = useState(null)
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
  
  useEffect(() => {
    fetch(`${api_url.movies}${api_url.secret}`)
      .then(response => response.json())
      .then(data => setMovies(data.results))
  }, [])

  return (
      <div className="App">

        <Header />
        <Card 
          movies={movies}
        />
      </div>
  );
}

export default App;

// :
// adult: false
// backdrop_path: "/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg"
// genre_ids: (3) [28, 12, 878]
// id: 634649
// original_language: "en"
// original_title: "Spider-Man: No Way Home"
// overview: "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man."
// popularity: 6345.634
// poster_path: "/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"
// release_date: "2021-12-15"
// title: "Spider-Man: No Way Home"
// video: false
// vote_average: 8.3
// vote_count: 8354