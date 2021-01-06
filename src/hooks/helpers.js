import { useState, useEffect } from 'react';
import ghibli from '../api/ghibli';

const useOutsideAlerter = (ref, hideAutocomplete) => {
	useEffect(
		() => {
			const handleClickOuside = (event) => {
				if (ref.current && !ref.current.contains(event.target)) {
					hideAutocomplete('hide');
				} else {
					hideAutocomplete('show');
				}
			};

			document.addEventListener('mousedown', handleClickOuside);
		},
		[ ref, hideAutocomplete ]
	);
};

const useGhibli = (term) => {
	const [ movies, setMovies ] = useState([]);
	useEffect(() => {
		searchGhibli();
	}, []);

	const searchGhibli = async () => {
		const response = await ghibli(term);
		setMovies(response.data);
	};

	return [ movies, searchGhibli ];
};

export { useOutsideAlerter, useGhibli };
