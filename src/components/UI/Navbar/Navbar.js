import classes from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { useState } from 'react';

export default function Navbar(props) {
    // const [isScrolled, setIsScrolled ] = useState(false)
     
    const user = JSON.parse(localStorage.getItem('user'))
       
    const navigate = useNavigate()

    const logOut = () => {
        localStorage.removeItem('user')
        navigate('/sign')  
    }

    return (

        <nav className={`${ classes['container-navbar']}`}>
            <div className={`${classes['row-navbar']}`}>
                <ul className={`${classes['ul-navbar']}`}>
                    <li className={`${classes.title}`}><Link to='/'>MovieMax</Link></li>
                    
                    {
                        user === null && <li><Link to='/sign'>Sign</Link></li>
                    }

                    {
                        user && <li><Link to='/search'className={`${classes['btn-logout']}`}>Search</Link></li>
                    } 

                    {
                        user && <li onClick={logOut} className={`${classes["btn-logout"]}`}>Logout</li>
                    }

                </ul>
            </div>
        </nav>
    );
}