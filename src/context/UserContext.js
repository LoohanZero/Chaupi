import React, { createContext, useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';



const UserContext = createContext();

const UserProvider = ({ children }) => {
	const [ user, setUser ] = useState(null);
	const [ error, setError ] = useState(false);
	const navigate = useNavigate();

	const createAccountWithEmailAndPasword  = async (event, userData) => {
		event.preventDefault();
		const userEmail = userData.email;
		const userPassword = userData.password;

		try {
			const response = await createUserWithEmailAndPassword(auth, userEmail, userPassword);
			console.log(response)
			response && setUser(response);
			response && navigate('/');
		}
		catch(error) {
			setError(error.message);
		}
	};

	const handleLoginWidthEmailAndPassword = async (event, userData) => {
		event.preventDefault();
		const userEmail = userData.email;
		const userPassword = userData.password;

		try {
			const response = await signInWithEmailAndPassword(auth, userEmail, userPassword);
			console.log(response)
			response && setUser(response);
			response && navigate('/');
		}
		catch(error) {
			setError(error.message);
		}
		
	};

	const signOutUser = () => {
		auth.signOut();
		setUser(null)
	}

	return (
		<UserContext.Provider value={{ user, error, setUser, handleLoginWidthEmailAndPassword, createAccountWithEmailAndPasword, signOutUser}}>
			{children}
		</UserContext.Provider>
	);
};

export { UserProvider };
export default UserContext;