import React from 'react';

import '../../styles/fonts.css';
import '../header/Header.css';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/Logo_CasadeChaupi.png';
import Button from '../button/Button';

const Header = () => {
	return (
		<header>
			<nav >
				<div className="nav-session-container">
					<img className="logo" alt="Logo Casa de Chaupi" src={logo} />
					<ul className="nav-list-container">
						<li className="nav-session-list-item">
							<li><NavLink className="nav-list-link">TIENDA</NavLink></li>
							<li><NavLink className="nav-list-link">SOBRE MI</NavLink></li>
							<Button style={{
								paddingTop: '0.35rem', paddingBottom: '0.15rem', marginLeft: '2rem' 
							}}>
								Iniciar Sesión
							</Button>
						</li>
						
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default Header;