import { useRef } from 'react';
import classes from './Register.module.css';
import { useNavigate } from 'react-router';
// import useInput from './../../../CustomHooks/useInput'

export default function Register(params) {
    
    const navigate = useNavigate()
    const username = useRef('')
    const email = useRef('')
    const password = useRef('')
    const passwordConfirm = useRef('')

    
    // console.log(user);
    
    const signUp = (e) => {
        e.preventDefault()
        
        if (username.current.value === '' || email.current.value  === '' || password.current.value  === '' || passwordConfirm.current.value === '') {
            alert('you must feel the form')
        } 
        if (password.current.value === passwordConfirm.current.value) {
            const user = JSON.stringify({
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
                passwordConfirm: passwordConfirm.current.value
            })

            localStorage.setItem('user', user)
            
            navigate('/')

        } else {
          alert('password must be the same')
        }
    }
    return (
        <form onSubmit={signUp}>
            <div className={`${classes.title}`}>
                <h2>Register</h2>
            </div>
            <div className={`${classes['input-sign']}`}>
                <label htmlFor="username" className={`#`}>Username</label>
                <input type="text" id='username' ref={username} />
            </div>
            <div className={`${classes['input-sign']}`}>
                <label htmlFor="userEmail">Email</label>
                <input type="email" id='userEmail' ref={email}/>
            </div>
            <div className={`${classes['input-sign']}`}>
                <label htmlFor="userPassword">Password</label>
                <input type="password" id='userPassword' ref={password}/>
            </div>
            <div className={`${classes['input-sign']}`}>
                <label htmlFor="userPasswordConfirm">Confirm Password</label>
                <input type="password" id='userPasswordConfirm' ref={passwordConfirm}/>
            </div>
            <div>
                <button className={`${classes['btn-submit']}`}>Submit</button>
            </div>
        </form>
    );
}