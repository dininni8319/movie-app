import classes from './Navbar.module.css';
import { Link } from 'react-router-dom';

export default function Navbar(props) {

    return (

        <nav className={`${classes['container-navbar']}`}>
            <div className={`${classes['row-navbar']}`}>
                <ul className={`${classes['ul-navbar']}`}>
                    <li className={`${classes.title}`}><Link to='/'>MovieMax</Link></li>
                    
                    <li><Link to='/sign'>Sign</Link></li>
                    
                    <li><Link to='/logout'>Logout</Link></li>
                </ul>
            </div>
        </nav>
    );
}