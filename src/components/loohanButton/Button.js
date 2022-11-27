import React from 'react';
import './Button.css';

const Button = ({ children, onClick, frontStyle, ...props }) => {
	return (
		<button 
			{...props}
			className="button-default" 
			onClick={() => onClick()}
		> 
		<span className="shadow"></span>
		<span className="edge"></span>
		<span className="front" style={frontStyle}>{children}</span>
		</button>
	);
};

export default Button;