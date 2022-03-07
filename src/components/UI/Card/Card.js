import classes from "./Card.module.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Logo from './../../assets/Images/logo192.png';
export default function Card(props) {
    
    return (
        <div className='container-cards'>
        {
          props.movies && props.movies.slice(0, 8).map(el => {
            return (
                <div key={el.id} className={`${classes['movies-card']}`}>
                  <img src={el.backdrop_path !== null ?`https://image.tmdb.org/t/p/w300${el.backdrop_path}` : Logo} alt={el.original_title} className={`${classes['card-img']}`} />
                    <h3 className={`${classes['card-title']}`}>{el.original_title ? el.original_title.slice(0, 20) : el.overview.slice(0, 20) || el.original_title === 'Null-Null' ? el.original_title : ''}</h3>
                    <p className={`${classes['card-description']}`}>{el.overview.slice(0, 20)}...</p>
                    <Link to={`/movie/${el.id}`} className={`${classes['link-detail-page']}`}>
                      <FontAwesomeIcon icon={faChevronRight} className={`fa-1x ${classes["chevron-right-icon"]}`} />  
                    </Link>
                </div>
                )
              })   
        }
      </div>
    )
}