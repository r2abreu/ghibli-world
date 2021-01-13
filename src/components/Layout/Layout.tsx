import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const Layout : React.FC = ({ children }) => {
	return (
		<React.Fragment>
			<Header />
			<main>{children}</main>
			<Footer />
		</React.Fragment>
	);
};

export default Layout;
