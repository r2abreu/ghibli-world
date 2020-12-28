import React from 'react';
import Autocomplete from '../Autocomplete';

const SearchBar = ({ movies }) => {
	return (
		<React.Fragment>
			<Autocomplete movies={movies} />
		</React.Fragment>
	);
};

export default SearchBar;
