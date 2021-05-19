import React from 'react';

import s from './Button.module.scss';

interface ButtonProps {
	onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
	width?: 'narrow' | 'wide';
	color?: 'green' | 'yellow';
	size?: 'normal' | 'small';
}

const Button: React.FC<ButtonProps> = ({ children, onClick, width, color, size }) => {
	let classes = s.root;
	classes = !!width ? classes + ' ' + s[width] : classes;
	classes = !!color ? classes + ' ' + s[color] : classes;
	classes = !!size ? classes + ' ' + s[size] : classes;
	return (
		<button
			type="button"
			className={classes}
			onClick={onClick}
		>
			{ children }
		</button>
	);
};

export default Button;