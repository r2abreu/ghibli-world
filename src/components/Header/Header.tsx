import React from 'react';
import img from './totoro.png';

const Header = () => {
	return (
		<header>
			<h1>Ghibli World</h1>
			<p>... a quick reference to this magical world</p>
			<figure>
				<img src={img} alt="Logo Ghibli" title="Totoro" />
			</figure>
		</header>
	);
};

export default Header;
