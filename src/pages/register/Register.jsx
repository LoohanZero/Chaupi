import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const initialState = {
	name: '',
	lastname: '',
	email: '',
	password: ''    
};

const Register = () => {
	const [ userData, setUserData ] = useState(initialState);
	const [ userHasAccount, setUserHasAccount ] = useState(false);
	const navigate = useNavigate();


	const handleSubmit = (event, userData) => {
		const { localStorage } = window;
		event.preventDefault();
		const storedUser = localStorage.getItem('popUpCardsLocalUser');
		const parseStoredUser = JSON.parse(storedUser);

		if (parseStoredUser?.email === userData.email) {
			setUserHasAccount(true);
			return;
		}

		userHasAccount && setUserHasAccount(false);
		localStorage.setItem('popUpCardsLocalUser', JSON.stringify(userData));
		setUserData(initialState);
	};

	const handleInputChange = (target) => {
		setUserData({ ...userData, [target.name]: target.value });
	};

	return ( 
		<div>
			<h2 className="text-yellow-300 py-1 pt-3 font-bold">CREATE YOUR ACCOUNT</h2>

			<form onSubmit={event => handleSubmit(event, userData)}>
				<input 
					type="text" 
					name="name" 
					value={userData.name}
					onChange={event => handleInputChange(event.target)}
					placeholder="First Name"
					required/>
				<input 
					type="text" 
					name="lastname" 
					value={userData.lastname}
					onChange={event => handleInputChange(event.target)}
					placeholder="Last Name"
					required/>
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

				<label><input type="checkbox" /> Show password</label>
				<label><input type="checkbox" /> Yes! I would like to receive by email special offers and updates about Lucasfilm Ltd. and other products and services from The Walt Disney Family of Companies.</label>

				<p>By creating an account, you agree to our Terms of Use, and acknowledge that you have read our Privacy Policy, Cookies Policy and UK & EU Privacy Rights. More...</p>
				<p>My home country/region: Spain. Change.</p>

				<button className="btn btn-outline btn-warning" type="submit">Create Account</button>

				{userHasAccount && <p>You already own an account!</p>}
			</form>

			<p>Already have an account? <a onClick={() => navigate('/login')}>Sign In</a></p>
		</div>
	);
};

export default Register;