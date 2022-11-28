import React, { useState, useEffect, useContext } from 'react';
import UserContext from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/button/Button';

const initialState = {
	email: '',
	password: ''    
};

const Register = () => {
	const [ userData, setUserData ] = useState(initialState);
	const {user, createAccountWithEmailAndPasword, error} = useContext(UserContext);
	const navigate = useNavigate();


	useEffect(() => {
		if (user) {
			console.log(user)
			navigate('/');
		}
	}, []);


	const handleInputChange = (target) => {
		setUserData({ ...userData, [target.name]: target.value });
	};

	return ( 
		<div className="login-bg-container">
			<div className="login-container">
				<h2 className="main-text">CREA TU CUENTA</h2>
				<form className="form-container" 
					onSubmit={event => createAccountWithEmailAndPasword(event, userData)}>
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

					<Button style={{padding: '0.5rem 1rem', marginTop: '1rem'}} type="submit">Crear</Button>
					{error && <p>{error}</p>}

					<p className="register-msn">¿Ya tienes una cuenta? <button className="create-account-button" onClick={() => navigate('/login')}> Inicia Sesion</button>.</p>
				</form>
			</div>
		</div>
	);
};

export default Register;