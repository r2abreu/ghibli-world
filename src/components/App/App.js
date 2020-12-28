import React, { useState, useEffect } from 'react';
import ghibli from '../../api/ghibli';
import SearchBar from '../SearchBar';
import Layout from '../Layout';

const App = () => {
	const [ movies, setMovies ] = useState([]);

	useEffect(() => {
		search();
	}, []);

	const search = async () => {
		const response = await ghibli('films');
		setMovies(response.data);
	};

	return <Layout>{<SearchBar movies={movies} />}</Layout>;
};

export default App;
