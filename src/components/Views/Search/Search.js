import { faHourglass3 } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useState, useEffect, useContext, useRef } from 'react';
import { ConfigContext } from '../../../Context/ConfigContext/ConfigContext';
import classes from './Search.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

// import Card from './../../UI/Card/Card'
import Logo from './../../assets/Images/logo192.png'

export function Search(params) {
    const { api_url } = useContext(ConfigContext)
    
    const [genres, setGenres ] = useState(null)
    const [ movie, setMovie] = useState(null)
    
    const [searched , setSearched] = useState('')
    
    console.log(searched);
    
    const handleClick = () => { 
        setMovie(null)
        setSearched('')
    }

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_url.secret}&language=en-US`)
        .then(resp => resp.json())
        .then(data => setGenres(data.genres))
    }, [])
        
    
    useEffect(() => {
        if (searched.length >= 4) {
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_url.secret}&query=${searched}&language=en-US`)
            .then(resp => resp.json())
            .then(data => setMovie(data.results))    
            
        }
    }, [searched])

    return (
        
       <section className={`${classes['search-page-container']}`}>
           <div className={`row-genres`}>
               <div>
                 <input type="search" 
                   placeholder='Search a movie'
                   onChange={(e) => setSearched(e.target.value)}
                   value={searched}
                   className={`${classes['search-input-row']}`}
                   onClick={() => handleClick()}
                 />
               </div>
                {
                    genres && genres.map(el => {
                        return (
                           <Link to='/' key={el.id}>
                               <button className={`${classes['genres-title']}`}>{el.name}</button>
                           </Link>
                       
                        )       
                    })
                }
           </div>
           <div className={`row-cards-genres`}>
           {
                movie && movie.slice(0, 8).map(el => {
                    return (
                        <div key={el.id} className={`${classes['movies-card']}`}>
                        <img src={el.backdrop_path !== null ?`https://image.tmdb.org/t/p/w300${el.backdrop_path}` : Logo} alt={el.original_title} className={`${classes['card-img']}`} />
                            <h3 className={`${classes['card-title-search']}`}>{el.original_title ? el.original_title.slice(0, 20) : el.overview.slice(0, 20) || el.original_title === 'Null-Null' ? el.original_title : ''}</h3>
                            <p className={`${classes['card-description']}`}>{el.overview.slice(0, 20)}...</p>
                            <Link to={`/movie/${el.id}`} className={`${classes['link-detail-page']}`}>
                            <FontAwesomeIcon icon={faChevronRight} className={`fa-1x ${classes["chevron-right-icon"]}`} />  
                            </Link>
                        </div>
                        )
                })   
            }
           </div>
       </section>
    );
}