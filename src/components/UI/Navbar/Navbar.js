import classes from './Navbar.module.css';

export default function Navbar(props) {
    return (
        <div className={`${classes['container-navbar']}`}>

            <div className={`${classes['row-navbar']}`}>
                <ul className={`${classes['ul-navbar']}`}>
                    <h2 className={`${classes.title}`}>MovieMax</h2>
                    <li>Movies</li>
                    <li>Login</li>
                    <li>Regiter</li>
                    <li>Logout</li>
                </ul>
            </div>
        </div>
    );
}