import React, { createContext, useEffect, useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';



const UserContext = createContext();

const UserProvider = ({ children }) => {
	const [ user, setUser ] = useState();
	const [ error, setError ] = useState(false);
	const [isLoadingUser, setIsLoadingUser] = useState(false)
	const navigate = useNavigate();

	useEffect(()=> {
		const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
			setUser(currentuser);
			setIsLoadingUser(false);
		})

		return () => {
			unsubscribe();
			};
	}, [])

	const createAccountWithEmailAndPasword  = async (event, userData) => {
		event.preventDefault();
		setIsLoadingUser(true);
		const userEmail = userData.email;
		const userPassword = userData.password;

		try {
			const response = await createUserWithEmailAndPassword(auth, userEmail, userPassword);
			response && setUser(response);
			response && navigate('/');
		}
		catch(error) {
			setError(error.message);
			setUser(null)
		}
		finally {
			setIsLoadingUser(false)
		}
	};

	const handleLoginWidthEmailAndPassword = async (event, userData) => {
		event.preventDefault();
		setIsLoadingUser(true);
		const userEmail = userData.email;
		const userPassword = userData.password;

		try {
			const response = await signInWithEmailAndPassword(auth, userEmail, userPassword);
			response && setUser(response);
			response && navigate('/');
		}
		catch(error) {
			setError(error.message);
			setUser(null)
		}
		finally {
			setIsLoadingUser(false)
		}
		
	};

	const signOutUser = () => {
		auth.signOut();
		setUser(null)
	}

	return (
		<UserContext.Provider value={{ user, isLoadingUser, error, setUser, handleLoginWidthEmailAndPassword, createAccountWithEmailAndPasword, signOutUser}}>
			{children}
		</UserContext.Provider>
	);
};

export { UserProvider };
export default UserContext;