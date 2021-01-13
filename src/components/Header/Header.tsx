import React from 'react';
import SearchBar from '../SearchBar';
import {Params} from '../Autocomplete';

interface newParams extends Params {
	hideAutocomplete: (condition: string) => void
}



const Header = ({movies, showAutocomplete, hideAutocomplete, onInputChange, userInput}: newParams) => {
	return (
		<header>
			<div>
				<h1>Ghibli World</h1>
			</div>
			<SearchBar movies={movies}
					showAutocomplete={showAutocomplete}
					hideAutocomplete={hideAutocomplete}
					onInputChange={onInputChange}
					userInput={userInput} />
		</header>
	);
};

export default Header;
