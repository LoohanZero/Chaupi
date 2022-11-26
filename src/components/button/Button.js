import React from 'react';
import '../button/Button.css';

const Button = ({ children, onClick, ...props }) => {
	return (
		<button 
			{...props}
			className="button-default" 
			onClick={() => onClick()}
		>{children}</button>
	);
};

export default Button;