import React, { useState } from 'react';
import { useGhibli } from '../../hooks/helpers';

import Layout from '../Layout';
import MovieDetails from '../MovieDetails/MovieDetails';


const App = () => {
	const  [ movies ]  = useGhibli('films');
	const [ showAutocomplete, setShowAutocomplete ] = useState(true);
	const [ userInput, setUserInput ] = useState('Ponyo');

	const hideAutocomplete = (condition: string) => {
		if (condition === 'show') {
			setShowAutocomplete(true);
		} else {
			setShowAutocomplete(false);
		}
	};

	const onInputChange = (input: string) => {
		setUserInput(input);
	};

	return (
		<React.Fragment>
			<Layout movies={movies}
					showAutocomplete={showAutocomplete}
					hideAutocomplete={hideAutocomplete}
					onInputChange={onInputChange}
					userInput={userInput}>
		
				<MovieDetails userInput={userInput} movies={movies} />
			</Layout>
		</React.Fragment>
	);
};

export default App;
