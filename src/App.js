import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/UI/Navbar/Navbar';
import Header from './components/UI/Header/Header';

function App() {

  const api_url = {
    secret: process.env.REACT_APP_MOVIES_SECRET,
    movies: process.env.REACT_APP_MOVIES_API_URL
  }
  
  // console.log(api_url);
  const [ movies, setMovies] = useState(null)

  useEffect(() => {
    fetch(`${api_url.movies}${api_url.secret}`)
      .then(response => response.json())
      .then(data => setMovies(data.results))
  }, [])

  return (
    <div className="App">
      <Navbar />
      <Header />
      <div className='container-cards'>
        {
          movies && movies.map(el => {
            return (
                     <div key={el.id} className='movies-card'>
                          <img src={el.backdrop_path} alt="" />
                          <h3>{el.original_title}</h3>
                          <p>{el.overview.slice(0, 20)}</p>
                           <ul>
                             <li>{el.popularity}</li>
                             <li>{el.release_date}</li>
                             <li>{el.vote_average}</li>
                             <li>{el.original_language}</li>
                           </ul>
                      </div>
                )
              })   
            }
      </div>
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