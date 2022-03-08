import { useState, useRef } from 'react';
import { useNavigate } from 'react-router';
import classes from './../Register/Register.module.css';

export default function Login(params) {

    const [ error, setError ] = useState({})

    const navigate = useNavigate()
    const email = useRef('')
    const password = useRef('')
    let pass = password.current.value
    let mail = email.current.value
    const user = JSON.parse(localStorage.getItem("user"))

    const signIn = (e) => {
        e.preventDefault()

        if (user !== null) {
          
            if(mail !== '' && pass !== '' && user.email === mail && user.password === pass) {
                navigate('/')
              
            } else {
                  setError({
                      ...error,
                      errorMessageCredential: 'You creadentials are not valid'
                  })
              }
            
        } else {
            setError({
                ...error,
                errorMessageRegister: 'You are not registered'
            })
        }
    }

    return (
        <form onSubmit={signIn}>
            <div className={`${classes.title}`}>
                <h1>Login</h1>
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
            {
                  error.errorMessageCredential && <p className={`${classes['error-message']}`}>{error.errorMessageCredential}</p> 
            }
            {
                  error.errorMessageRegister && <p className={`${classes['error-message']}`}>{error.errorMessageRegister}</p> 
            }
        </form>
    );
}