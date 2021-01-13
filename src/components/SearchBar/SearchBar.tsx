import React from 'react';
import Autocomplete from '../Autocomplete';
import OutsideAlerter from '../OutsideAlerter/OutsideAlerter';
import { Params} from '../Autocomplete';

interface newParams extends Params {
	hideAutocomplete: (condition: string) => void
}

const SearchBar = ({ movies, showAutocomplete, hideAutocomplete, onInputChange, userInput }: newParams) => {
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
