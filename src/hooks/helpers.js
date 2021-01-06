import { useState, useEffect } from 'react';
import ghibli from '../api/ghibli';
import youtube from '../api/youtube';
const KEY = process.env.REACT_APP_YOUTUBE_API;

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

const useVideos = (term) => {
	const [ videos, setVideos ] = useState('');

	useEffect(
		() => {
			search(term);
		},
		[ term ]
	);

	const search = async (term) => {
		const response = await youtube.get('search', {
			params: {
				q: term,
				part: 'snippet',
				type: 'video',
				maxResults: 1,
				key: KEY
			}
		});
		setVideos(response.data.items);
	};

	return [ videos, search ];
};

export { useOutsideAlerter, useGhibli, useVideos };
