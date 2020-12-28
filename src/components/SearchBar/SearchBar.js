import React from 'react';
import Autocomplete from '../Autocomplete';

const SearchBar = ({ movies, showAutocomplete }) => {
	return (
		<React.Fragment>
			<Autocomplete movies={movies} showAutocomplete={showAutocomplete} />
		</React.Fragment>
	);
};

export default SearchBar;
