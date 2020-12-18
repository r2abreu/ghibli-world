import React, { useState, useEffect } from 'react';
import ghibli from '../api/ghibli';

const App = () => {
	const [ movies, setMovies ] = useState([]);

	useEffect(() => {
		search();
	}, []);

	const search = async () => {
		const response = await ghibli('films');

		console.log(response);
	};
	return <div>Hola</div>;
};

export default App;
