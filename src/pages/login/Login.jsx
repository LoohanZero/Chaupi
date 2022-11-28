import React, { useState, useContext } from 'react';
import UserContext from '../../context/UserContext';
import '../login/Login.css';
import { useNavigate  } from 'react-router-dom';
import Button from '../../components/button/Button';

const initialState = {
	email: '',
	password: ''    
};

const Login = () => {
	const [ userData, setUserData ] = useState(initialState);
	const { handleLoginWidthEmailAndPassword, error} = useContext(UserContext);
	const navigate = useNavigate();

	const handleInputChange = (target) => {
		setUserData({ ...userData, [target.name]: target.value });
	};


	return (
		<div className="login-bg-container">
			<div className="login-container">
				<h2 className="main-text">LOGIN</h2>
				<form className="form-container" 
					onSubmit={event => handleLoginWidthEmailAndPassword(event, userData)}>
					<input 
						className="form-input"
						type="email" 
						name="email" 
						value={userData.email}
						onChange={event => handleInputChange(event.target)}
						placeholder="Email Address"
						required/>
					<input 
						className="form-input"
						type="password" 
						name="password" 
						value={userData.password}
						onChange={event => handleInputChange(event.target)}
						placeholder="Password"
						required/>

					<Button style={{padding: '0.5rem 1rem', marginTop: '1rem'}} type="submit">Login</Button>
					{error && <p>{error}</p>}

					<p className="register-msn">¿No tienes cuenta? <button className="create-account-button" onClick={() => navigate('/register')}> Crea una ahora</button>.</p>
				</form>
			</div>
		</div>
	);
};

export default Login;