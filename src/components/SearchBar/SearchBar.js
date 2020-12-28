import React from 'react';
import Autocomplete from '../Autocomplete';
import OutsideAlerter from '../OutsideAlerter/OutsideAlerter';

const SearchBar = ({ movies, showAutocomplete, hideAutocomplete }) => {
	return (
		<React.Fragment>
			<OutsideAlerter hideAutocomplete={hideAutocomplete}>
				<Autocomplete movies={movies} showAutocomplete={showAutocomplete} />
			</OutsideAlerter>
		</React.Fragment>
	);
};

export default SearchBar;
