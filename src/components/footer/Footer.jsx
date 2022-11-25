import React from 'react';

import { FaInstagram, FaPinterest, FaYoutube } from 'react-icons/fa';
import '../footer/Footer.css';
import Icon from '../icon/Icon';

export const Footer = () => {
	return (
		<footer className="footer-container">
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
			<p className="footer-text">
              Copyright © by Casa de Chaupi 2022.{' '}
			</p>
		</footer>
	);
};