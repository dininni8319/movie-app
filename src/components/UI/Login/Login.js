import { useRef } from 'react';
import { useNavigate } from 'react-router';
import classes from './../Register/Register.module.css';

export default function Login(params) {
    
    const navigate = useNavigate()
    const email = useRef('')
    const password = useRef('')
    
    const user = JSON.parse(localStorage.getItem("user"))

    const signIn = (e) => {
        e.preventDefault()

        if (user !== null) {
            password = password.current.value
            email = email.current.value

            if(email !== '' || password !== '' || user.email === email && user.password === password) {
                navigate('/')
              
            } else {
                  alert('Email or password are not valid')
              }
            
        } else {
            alert('You are not registed')
        }
    }

    return (
        <form onSubmit={signIn}>
            <div className={`${classes.title}`}>
                <h2>Login</h2>
            </div>
            <div className={`${classes['input-sign']}`}>
                <label htmlFor="userEmail">Email</label>
                <input type="email" id='userEmail' ref={email}/>
            </div>
            <div className={`${classes['input-sign']}`}>
                <label htmlFor="userPassword">Password</label>
                <input type="password" id='userPassword' ref={password}/>
            </div>
            <div>
                <button type='submit' className={`${classes['btn-submit']}`}>Submit</button>
            </div>
        </form>
    );
}