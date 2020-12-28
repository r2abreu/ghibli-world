import React, { useState, useEffect } from 'react';
import ghibli from '../../api/ghibli';
import SearchBar from '../SearchBar';
import Layout from '../Layout';

const App = () => {
	const [ movies, setMovies ] = useState([]);
	const [ showAutocomplete, setShowAutocomplete ] = useState(true);

	useEffect(() => {
		search();
	}, []);

	const search = async () => {
		const response = await ghibli('films');
		setMovies(response.data);
	};

	const hideAutocomplete = (condition) => {
		if (condition === 'show') {
			setShowAutocomplete(true);
		} else {
			setShowAutocomplete(false);
		}
	};

	return (
		<React.Fragment>
			<Layout>
				{<SearchBar movies={movies} showAutocomplete={showAutocomplete} hideAutocomplete={hideAutocomplete} />}
			</Layout>
		</React.Fragment>
	);
};

export default App;
