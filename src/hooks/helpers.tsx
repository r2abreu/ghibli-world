import { useState, useEffect, RefObject } from 'react';
import ghibli from '../api/ghibli';
import youtube from '../api/youtube';
import {Object} from '../components/Autocomplete';
const KEY = process.env.REACT_APP_YOUTUBE_API;


const useOutsideAlerter = (ref: RefObject<HTMLDivElement>, hideAutocomplete: (arg : string) => void) => {
	useEffect(
		() => {
			const handleClickOuside = (event: MouseEvent) => {
				if (ref.current && !ref.current.contains(event.target as HTMLDivElement)) {
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

const useGhibli = (term: string): [Object[], () => void] => {
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

const useVideos = (term: string) => {
	const [ videos, setVideos ] = useState('');

	useEffect(
		() => {
			search(term);
		},
		[ term ]
	);

	const search = async (term: string) => {
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
