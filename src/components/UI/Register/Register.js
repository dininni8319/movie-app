import { useState, useRef, useEffect } from 'react';
import classes from './Register.module.css';
import { useNavigate } from 'react-router';
import { inputValidation, validEmail, passwordValidation, errorMessages } from './../../../Utilities/FormValidation'

export default function Register(props) {
    
    const [ error, setError ] = useState({})
    const navigate = useNavigate()
    const username = useRef('')
    const email = useRef('')
    const password = useRef('')
    const passwordConfirm = useRef('')

    let passwordError = errorMessages.passwordRepeat
    // let passwordRepeatError = errorMessages.notValidPassword
    let emailError = errorMessages.email
    let emptyFormError = errorMessages.formFields

    const data = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
        passwordConfirm: passwordConfirm.current.value
    }

    const signUp = (e) => {
        e.preventDefault()
        
        if (inputValidation(data)) {

            if (validEmail(email.current.value)) {
            
                if (password.current.value === passwordConfirm.current.value && passwordValidation(password.current.value)) {
                    
                    const user = JSON.stringify({ 
                        username: username.current.value,
                        email: email.current.value,
                        password: password.current.value,
                        passwordConfirm: passwordConfirm.current.value
                     })
        
                    localStorage.setItem('user', user)
                    
                    props.setIsLogin(true)
                    navigate('/sign')
                } else {
                    setError({
                        ...error, 
                        passwordError     
                    })  
                }
                
            } else {
                    setError({
                        ...error,
                        emailError
                    })
                }
        
        } else {
            setError({
                ...error, 
                emptyFormError
            })
        }

    }

    return (
        <form onSubmit={signUp}>
            <div className={`${classes.title}`}>
                <h1>Register</h1>
            </div>
            <div className={`${classes['input-sign']}`}>
                <label htmlFor="username" className={`#`}>Username</label>
                <input type="text" id='username' ref={username} className={`${error.emptyFormError && classes['input-red']}`}/>
            </div>
            <div className={`${classes['input-sign']} `}>
                <label htmlFor="userEmail">Email</label>
                <input type="email" id='userEmail' ref={email} className={`${error.emptyFormError && classes['input-red']}`}/>
                {
                  error.emailError && <p className={`${classes['error-message']}`}>{errorMessages.email}</p> 
                }
            </div>
            <div className={`${classes['input-sign']}`}>
                <label htmlFor="userPassword">Password</label>
                <input type="password" id='userPassword' ref={password} className={`${error.emptyFormError && classes['input-red'] }`}/>
            </div>
                {
                  error.passwordError && <p className={`${classes['error-message']}`}>{errorMessages.passwordRepeat}</p> 
                }
                {/* {
                  error.passwordRepeatError && <p className={`${classes['error-message']}`}>{errorMessages.passwordRepeat}</p> 
                } */}
            <div className={`${classes['input-sign']}`}>
                <label htmlFor="userPasswordConfirm">Confirm Password</label>
                <input type="password" id='userPasswordConfirm' ref={passwordConfirm} className={`${error.emptyFormError && classes['input-red']}`}/>
            </div>
            <div>
                <button className={`${classes['btn-submit']}`}>Submit</button>
            </div>
                {
                  error.emptyFormError && <p className={`${classes['error-message']}`}>{errorMessages.formFields}</p> 
                }
        </form>
    );
}