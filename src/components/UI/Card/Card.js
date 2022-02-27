import classes from "./Card.module.css";
import { Link } from 'react-router-dom';
export default function Card(props) {
    return (
        <div className='container-cards'>
        {
          props.movies && props.movies.map(el => {
            return (
                <div key={el.id} className={`${classes['movies-card']}`}>
                    <img src={`https://image.tmdb.org/t/p/w300${el.backdrop_path}`} alt={el.original_title} className={`${classes['card-img']}`} />
                    <h3 className={`${classes['card-title']}`}>{el.original_title.slice(0, 20)}</h3>
                    <p>{el.overview.slice(0, 20)}</p>
                    <Link to={`/movie/${el.id}`}>Detail</Link>
                </div>
                )
              })   
            }
      </div>
    )
}