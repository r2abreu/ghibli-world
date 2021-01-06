import React, { useState } from 'react';
import { useGhibli } from '../../hooks/helpers';
import SearchBar from '../SearchBar';
import Layout from '../Layout';
import MovieDetails from '../MovieDetails/MovieDetails';

const App = () => {
	const [ movies, searchGhibli ] = useGhibli('films');
	const [ showAutocomplete, setShowAutocomplete ] = useState(true);
	const [ userInput, setUserInput ] = useState('Ponyo');

	const hideAutocomplete = (condition) => {
		if (condition === 'show') {
			setShowAutocomplete(true);
		} else {
			setShowAutocomplete(false);
		}
	};

	const onInputChange = (input) => {
		setUserInput(input);
	};

	return (
		<React.Fragment>
			<Layout>
				<SearchBar
					movies={movies}
					showAutocomplete={showAutocomplete}
					hideAutocomplete={hideAutocomplete}
					onInputChange={onInputChange}
					userInput={userInput}
				/>
				<MovieDetails userInput={userInput} movies={movies} />
			</Layout>
		</React.Fragment>
	);
};

export default App;
