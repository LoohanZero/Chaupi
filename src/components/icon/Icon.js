import React from 'react';
import { IconContext } from 'react-icons';


const Icon = ({ value, children }) => {
	return (
		<IconContext.Provider
			value={value}
		>
			<div>
				{children}
			</div>
		</IconContext.Provider>
	);
};

export default Icon;