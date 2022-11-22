import React from 'react';
import Navbar from '../navbar/Navbar';
import { logo } from '../../assets/img';

const Header = () => {
	return (
		<header>
			<Navbar/>
			<div className="content">
				<img className="logo" alt="Logo Casa de Chaupi" src={logo} />
				<h1 className="content-title">
            Tarjetas desplegables
				</h1>
				<h2>
            tridimensionales
				</h2>
				<h4>
            Las tarjetas cobran vida y movimiento cada vez que las abres.
				</h4>
			</div>
		</header>
	);
};

export default Header;