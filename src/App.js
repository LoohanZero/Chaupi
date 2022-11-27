import React, {useContext } from 'react';
import { Footer } from './components/footer/Footer';
import Home from './pages/home/Home';
import { Routes, Route } from 'react-router-dom';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Header from './components/header/Header';
import About from './pages/about/About';
import Shop from './pages/shop/Shop';
import UserContext from './context/UserContext';
import ProtectedRoute from './helpers/ProtectedRoute';
import ConditionalRoute from './helpers/ConditionalRoute';


function App() {
	const {user, isLoadingUser} = useContext(UserContext);
	console.log(user, isLoadingUser)
	return (
		<div>
			<Header/>
			<main className="main-container">
				<Routes>
					<Route path="/sobremi" element={<About />} />
					<Route path="/login" element={
						<ConditionalRoute user={user} isLoadingUser={isLoadingUser}>
							<Login />
						</ConditionalRoute>} />
					<Route path="/registro" element={
						<ConditionalRoute user={user} isLoadingUser={isLoadingUser}>
							<Register />
						</ConditionalRoute>} />
					<Route path="/tienda" element={
						<ProtectedRoute user={user} isLoadingUser={isLoadingUser}>
							<Shop />
						</ProtectedRoute>} />
					<Route path="/" element={<Home />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
}

export default App;
