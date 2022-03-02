import { useState, useEffect } from 'react';
import { useParams } from 'react-router'
import classes from './MovieDetail.module.css';

export default function MovieDetail(){

    const [movieDetail, setMovieDetail] = useState(null)

    const api_url = {
        secret: process.env.REACT_APP_MOVIES_SECRET,
        movies: process.env.REACT_APP_MOVIES_API_URL
    }

    const { slug } = useParams()

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${slug}?api_key=${api_url.secret}&language=en-US`)
        .then(response => response.json())
        .then(data => setMovieDetail(data))
    })
    
    return (
         <div className={`${classes['container-movie-detail']}`}> 
             {
             movieDetail ? (
                <div key={movieDetail.id} className={`${classes['row-movie-detail']}`}>
                    <img src={`https://image.tmdb.org/t/p/w500${movieDetail.backdrop_path}`} alt={movieDetail.original_title} className={`${classes['movie-detail-img']}`} />
                    <h3 className={`${classes['card-title']}`}>{movieDetail.original_title}</h3>
                    <p>{movieDetail.overview}</p>
                    {/* <Link to={`/movie/${movieDetail.id}`}>Detail</Link> */}
                </div>
                ) : <p> hello</p>
             
          }
         </div>
    );
}