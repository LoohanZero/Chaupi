import React from 'react';
import {
	FaFacebook, FaTwitter, FaInstagram, FaYoutube 
} from 'react-icons/fa';
import './Footer.css';

export const Footer = () => {
	return (
		<footer>
			<div className="footer-links">
				<a href="http://facebook.com">
					<FaFacebook className="link" />
				</a>
				<> </>
				<a href="http://twitter.com">
					<FaTwitter className="link" />
				</a>
				<> </>
				<a href="http://instagram.com">
					<FaInstagram className="link" />
				</a>
				<> </>
				<a href="http://youtube.com">
					<FaYoutube className="link" />
				</a>
			</div>
			<p className="footer-text">
              Copyright © by Casa de Chaupi 2022.{' '}
			</p>
		</footer>
	);
};