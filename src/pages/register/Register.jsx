import React, { useState, useEffect, useContext } from 'react';
import UserContext from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';

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
		<div>
			<h2 className="text-yellow-300 py-1 pt-3 font-bold">CREATE YOUR ACCOUNT</h2>

			<form onSubmit={event => createAccountWithEmailAndPasword(event, userData)}>
				<input 
					type="email" 
					name="email" 
					value={userData.email}
					onChange={event => handleInputChange(event.target)}
					placeholder="Email Address"
					required/>
				<input 
					type="password" 
					name="password" 
					value={userData.password}
					onChange={event => handleInputChange(event.target)}
					placeholder="Password"
					required/>

				<button className="btn btn-outline btn-warning" type="submit">Create Account</button>

				{error && <p>{error}</p>}
			</form>

			<p>Already have an account? <a onClick={() => navigate('/login')}>Sign In</a></p>
		</div>
	);
};

export default Register;