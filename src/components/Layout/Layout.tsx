import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import {Params} from '../Autocomplete';


interface newParams extends Params {
	children: React.ReactNode,
	hideAutocomplete: (condition: string) => void
}

const Layout  = ({movies, showAutocomplete, hideAutocomplete, onInputChange, userInput, children }: newParams) => {
	return (
		<React.Fragment>
			<Header movies={movies}
					showAutocomplete={showAutocomplete}
					hideAutocomplete={hideAutocomplete}
					onInputChange={onInputChange}
					userInput={userInput} />
			<main>{children}</main>
			<Footer />
		</React.Fragment>
	);
};

export default Layout;
