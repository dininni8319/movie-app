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
        <div className={`${classes['container-movie']}`} style={{backgroundImage: `linear-gradient(rgba(33, 33, 33, 1), rgba(33, 33, 33, 0.8), rgba(33, 33, 33, 1)), url(https://image.tmdb.org/t/p/w500${ movieDetail ? movieDetail.backdrop_path : null})`,
           backgroundSize: 'cover',
           backbroudPosition: 'center',
           backgroundRepeat: 'no-repeat'
        }}> 
             {
                movieDetail ? (
                    
                <>
                    <div className={`${classes['row-video']}`}> 
                        
                        <div className={`${classes['section-description']}`}>
                            <h1 className={`${classes['movie-title']}`}>{movieDetail.original_title}</h1>
                            <div className={`${classes['section-img-link-movie']}`}>
                                <img src={`https://image.tmdb.org/t/p/w500${movieDetail.backdrop_path}`} alt={movieDetail.original_title} className={`${classes['movie-detail-img']}`} /> 
                                <h3 className={`${classes['movie-details-title']}`}>Movie Website</h3>
                                <a href={movieDetail.homepage} target="_blank">{movieDetail.homepage}</a>
                            </div>
                            <p>{movieDetail.overview}</p>
                        </div>
                        <div className={`${classes['row-video-frame']}`}>
                            {
                                video1 && <iframe className={`${classes['video-frame-detail-page']}`} src={`https://youtube.com/embed/${video1.key}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            }                           
                        </div> 
                    </div>
                       
                </>
                
                ) : <p> hello</p>
             
          }
                <div className={`${classes['ul-section']}`}>
                    
                    <ul>
                        <h3 className={`${classes['movie-details-title']}`}>Genres</h3>

                        {
                            movieDetail && movieDetail.genres.map(el => {
                                return (
                                    <li key={el.id}>{el.name}</li>
                                    )
                                })
                        }
                    </ul>
                    <ul>
                        <h3 className={`${classes['movie-details-title']}`}>Languages</h3>

                        {
                            movieDetail && movieDetail.spoken_languages.map(el => {
                                return (
                                    <li key={el.id}>{el.name}</li>
                                    )
                                })
                            }
                    </ul>

                    <ul>
                    <h3 className={`${classes['movie-details-title']}`}>Movie Info</h3>
                        <li>{movieDetail ? movieDetail.popularity : null}</li>
                        <li>{movieDetail ? movieDetail.budget : null}</li>
                        <li>{movieDetail ? movieDetail.original_language : null}</li>
                        <li>{movieDetail ? movieDetail.release_date : null}</li>
                        <li></li>
                    </ul>
                    <ul>
                        <h3 className={`${classes['movie-details-title']}`}>Productions</h3>
                        {
                            movieDetail && movieDetail.production_companies.map(el => {
                                return (
                                    <li key={el.id}>{el.name}</li>
                                    )
                                })
                            }
                    </ul>
                </div>
        </div>
    );
}