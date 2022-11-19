import React, { useState } from 'react';
import './Login.css';

const initialState = {
  email: '',
  password: ''    
}

const Login = () => {
  const [ userData, setUserData ] = useState(initialState);

  const handleSubmit = (event, userData) => {
        const localStorage = window.localStorage;
        event.preventDefault();
        const storedUser = localStorage.getItem("popUpCardsLocalUser");
        const parseStoredUser = JSON.parse(storedUser);
        
        if(parseStoredUser?.email === userData.email) {
            return;
        }

        localStorage.setItem("popUpCardsLocalUser", JSON.stringify(userData));
    }

    const handleInputChange = (target) => {
        setUserData({
            ...userData, [target.name]: target.value
        })
    }


  return (
    <div className='login-container'>
        <h2 className='main-text'>LOGIN</h2>

        <form onSubmit={(event) => handleSubmit(event)}>
            <input 
                type="email" 
                name="email" 
                value={userData.email}
                onChange={(event) => handleInputChange(event.target)}
                placeholder="Email Address"
                required/>
            <input 
                type="password" 
                name="password" 
                value={userData.password}
                onChange={(event) => handleInputChange(event.target)}
                placeholder="Password"
                required/>

            <button className="btn-login" type="submit">Login</button>
        </form>
    </div>
  )
}

export default Login;