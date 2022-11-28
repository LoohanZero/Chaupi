import React from 'react';

import { FaInstagram, FaPinterest, FaYoutube } from 'react-icons/fa';
import '../footer/Footer.css';
import Icon from '../icon/Icon';
import { footerLogo } from '../../assets/img'
import { NavLink } from 'react-router-dom';


export const Footer = () => {
	return (
		<footer className="footer-container">
			<div className="footer-nav-container">
				<nav className="footer-logo-container">
					<img className="footer-image-logo" src={footerLogo} />
					<ul className="footer-list-container">
						<li className="footer-list-item">
							<a href="https://bit.ly/3GO2UDU">
								<Icon value={{ className: 'nav-icons', style: { width: '2.5rem' } }}><FaYoutube/></Icon>
							</a>
						</li>
						<li>
							<a href="https://bit.ly/3V2SNiZ">
								<Icon value={{ className: 'nav-icons', style: { width: '1.6rem' } }}><FaInstagram/></Icon>
							</a>
						</li>
						<li>
							<a href="https://bit.ly/3GFYIq6">
								<Icon value={{ className: 'nav-icons', style: { width: '1.6rem' } }}><FaPinterest/></Icon>
							</a>
						</li>
					</ul>
				</nav>
				<nav className="footer-nav-links-container">
					<div className="footer-nav-links-list-container">
						<ul>
							<li className="footer-nav-title">Links</li>
							<li className="footer-nav-link-item"><NavLink className="footer-nav-link" to="/">Home</NavLink></li>
							<li className="footer-nav-link-item"><NavLink className="footer-nav-link" to="/shop">shop</NavLink></li>
							<li className="footer-nav-link-item"><NavLink className="footer-nav-link" to="/aboutme">Sobre Mi</NavLink></li>
						</ul>
					</div>
					<div className="footer-nav-links-list-container">
						<ul>
							<li className="footer-nav-title">Soporte</li>
							<li className="footer-nav-link-item"><a className="footer-nav-link" href="#">FAQ</a></li>
							<li className="footer-nav-link-item"><a className="footer-nav-link" href="#">News</a></li>
						</ul>
					</div>
					<div className="footer-nav-links-list-container">
						<ul>
							<li className="footer-nav-title">Contacto</li>
							<li className="footer-nav-link-item"><a className="footer-nav-link" href="mailto:casadechaupi@gmail.com">casadechaupi@gmail.com</a></li>
							<li className="footer-nav-link-item"><a className="footer-nav-link" href="#">+34 456 234 890</a></li>
						</ul>
					</div>
				</nav>
			</div>
			<div className="footer-copyright">
				<p>Copyright & Design by Savino.</p>

				<div className="footer-terms">
					<p className="footer-terms-text">Términos y Condiciones</p>
					<p className="footer-terms-text border-divisor" >Aviso Legal</p>
				</div>
             
			</div>
		</footer>
	);
};