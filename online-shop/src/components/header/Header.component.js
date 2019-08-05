import React from 'react';
import { Link } from 'react-router-dom';
import './Header.styles.scss';

const Header = () => {
	return (
		<div className="header">
			<Link to="/">hi</Link>
		</div>
	);
};

export default Header;
