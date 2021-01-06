import React from 'react';
import Autocomplete from '../Autocomplete';
import OutsideAlerter from '../OutsideAlerter/OutsideAlerter';

const SearchBar = ({ movies, showAutocomplete, hideAutocomplete, onInputChange, userInput }) => {
	return (
		<React.Fragment>
			<OutsideAlerter hideAutocomplete={hideAutocomplete}>
				<Autocomplete
					movies={movies}
					showAutocomplete={showAutocomplete}
					onInputChange={onInputChange}
					userInput={userInput}
				/>
			</OutsideAlerter>
		</React.Fragment>
	);
};

export default SearchBar;
