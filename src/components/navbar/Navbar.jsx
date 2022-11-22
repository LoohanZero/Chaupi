import React from 'react';

import { FaInstagram, FaYoutube, FaPinterest } from 'react-icons/fa';
import './Navbar.css';
import Icon from '../icon/Icon';

const Navbar = () => {
	return (
		<nav className="nav-container">
			<ul className="nav-list-container">
				<li className="nav-list-item">
					<button className="nav-button">
              Iniciar Sesión
					</button>
				</li>
				<li>
					<a href="http://instagram.com">
						<Icon value={{ className: 'nav-icons', style: { width: '2.5rem' } }}><FaYoutube/></Icon>
					</a>
				</li>
				<li>
					<a href="http://instagram.com">
						<Icon value={{ className: 'nav-icons', style: { width: '1.6rem' } }}><FaInstagram/></Icon>
					</a>
				</li>
				<li>
					<a href="http://instagram.com">
						<Icon value={{ className: 'nav-icons', style: { width: '1.6rem' } }}><FaPinterest/></Icon>
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;