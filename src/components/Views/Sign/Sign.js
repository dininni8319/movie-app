import { useState } from 'react';
import Login from '../../UI/Login/Login';
import Register from '../../UI/Register/Register';
import classes from './Sign.module.css';

export default function Sign(params) {
    const [isLogin, setIsLogin ] = useState(true)

    return (
        <div className={`${classes['container-sign']}`}>
            <div className={`${classes['row-sign']}`}>
                {
                    isLogin ? <Login /> : <Register />
                }
              <div className={`${classes['row-btn']}`}>
                <button className={`${classes['btn-switch']}`} onClick={() => setIsLogin(!isLogin)}>
                    {
                        isLogin ? 'Not a User? Register' : 'Are you a User? Login'
                    }
                </button>

              </div>
  
            </div>
        </div>
    )
}