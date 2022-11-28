import React, {useContext} from 'react';

import '../../styles/fonts.css';
import '../header/Header.css';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/Logo_CasadeChaupi.png';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import Button from '../button/Button';

const Header = () => {
	const navigate = useNavigate();
	const {user, signOutUser} = useContext(UserContext);
	return (
		<header>
			<nav >
				<div className="nav-session-container">
					<button 
					className="nav-logo-button"
					onClick={()=> navigate("/")} >
						<img className="logo" alt="Logo Casa de Chaupi" src={logo} />
					</button>
					<ul className="nav-list-container">
						{user && 
						<li className="nav-list-item">
							<NavLink to="/shop" className="nav-list-link">shop</NavLink>
						</li>}
						<li  className="nav-list-item">
							<NavLink to="/aboutme" className="nav-list-link">SOBRE MI</NavLink>
						</li>
						<li className="nav-session-list-item">
							{user ? 
							<Button 
								style={{
									paddingTop: '0.35rem', paddingBottom: '0.15rem', marginLeft: '2rem' 
								}}
								onClick={() => signOutUser()}>
								Cerrar Sesión
							</Button>
							:
							<Button
								style={{
									paddingTop: '0.35rem', paddingBottom: '0.15rem', marginLeft: '2rem' 
								}}
								onClick={() => navigate("/login")}>
								Iniciar Sesión
							</Button>}
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default Header;