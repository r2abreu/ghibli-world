import React, { useState, useEffect } from 'react';
import ghibli from '../../api/ghibli';
import SearchBar from '../SearchBar';

const App = () => {
	const [ movies, setMovies ] = useState([]);

	useEffect(() => {
		search();
	}, []);

	const search = async () => {
		const response = await ghibli('films');
		setMovies(response.data);
	};

	return <div>{<SearchBar movies={movies} />}</div>;
};

export default App;
