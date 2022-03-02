import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router'
import classes from './MovieDetail.module.css';
import { ConfigContext } from './../../../Context/ConfigContext/ConfigContext';

export default function MovieDetail(){

    const [movieDetail, setMovieDetail] = useState(null)
    const [ video, setVideo ] = useState(null)
    const { api_url } = useContext(ConfigContext)
    
    let video1 =  video ? video[1] : null
    
    const { slug } = useParams()

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${slug}/videos?api_key=${api_url.secret}&language=en-US`)
        .then(response => response.json())
        .then(data => setVideo(data.results))
    }, [])

     useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${slug}?api_key=${api_url.secret}&language=en-US`)
        .then(response => response.json())
        .then(data => setMovieDetail(data))
    }, [])

    return (
        <div className={`${classes['container-movie-detail']}`} style={{backgroundImage: `linear-gradient(rgba(33, 33, 33, 1), rgba(33, 33, 33, 0.8), rgba(33, 33, 33, 1)), url(https://image.tmdb.org/t/p/w500${ movieDetail ? movieDetail.backdrop_path : null})`,
        backgroundSize: 'cover',
        backbroudPosition: 'center',
        backgroundRepeat: 'no-repeat'
  }} > 
             {
                movieDetail ? (
                    <>
                        <div key={movieDetail.id} className={`${classes['row-movie-detail']}`} >
                            <div className={`${classes['row-img']}`}>
                                <div className={`${classes['img-section']}`}>
                                   <img src={`https://image.tmdb.org/t/p/w500${movieDetail.backdrop_path}`} alt={movieDetail.original_title} className={`${classes['movie-detail-img']}`} />
                                    <h1 className={`${classes['card-title']}`}>{movieDetail.original_title}</h1>
                                </div>
                                <div>
                                    <p>{movieDetail.overview}</p>
                                    <a href={movieDetail.homepage} target="_blank">{movieDetail.homepage}</a>
                                </div>
                            </div>
                                <div className={`${classes['row-description']}`}>
                                    {
                                        video && <iframe width="400" height="280" src={`https://youtube.com/embed/${video1.key}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    }                           
                                </div> 
                        </div>
                        <div className={`${classes['row-info']}`}>

                            <ul>
                                {
                                    movieDetail && movieDetail.genres.map(el => {
                                        return (
                                            <li key={el.id}>{el.name}</li>
                                            )
                                        })
                                }
                            </ul>
                             <ul>
                                {
                                    movieDetail && movieDetail.spoken_languages.map(el => {
                                        return (
                                            <li key={el.id}>{el.name}</li>
                                            )
                                        })
                                    }
                            </ul>

                            <ul>
                                <li>{movieDetail.popularity}</li>
                                <li>{movieDetail.budget}</li>
                                <li>{movieDetail.original_language}</li>
                                <li>{movieDetail.release_date}</li>
                                <li></li>
                            </ul>
                            <ul>
                                {
                                    movieDetail && movieDetail.production_companies.map(el => {
                                        return (
                                            <li key={el.id}>{el.name}</li>
                                            )
                                        })
                                    }
                            </ul>
                            
                        </div>
                    </>
                ) : <p> hello</p>
             
          }
         </div>
    );
}