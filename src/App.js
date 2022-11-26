import React from 'react';
import { Footer } from './components/footer/Footer';
import Home from './pages/home/Home';
import { Routes, Route } from 'react-router-dom';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Header from './components/header/Header';

function App() {
	return (
		<div>
			<Header/>
			<main className="main-container">
				<Routes>
					<Route path="/register" element={<Register />} />
					<Route path="/login" element={<Login />} />
					<Route path="/" element={<Home />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
}

export default App;
