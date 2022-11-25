import React from 'react';
import '../button/Button.css';

const Button = ({ children, handleClick, ...props }) => {
	return (
		<button 
			{...props}
			className="button-default" 
			onClick={() => handleClick(-1)}
		>{children}</button>
	);
};

export default Button;