import React from 'react';
import { useVideos } from '../../hooks/helpers';

const MovieTrailer = ({ userInput }) => {
	// const [ response, search ] = useVideos(`${userInput} trailer`);
	const response = 'yaha';
	if (response) {
		const video = response[0];
		const { videoId, snippet } = video;
		return (
			// <iframe
			// 	width="560"
			// 	height="315"
			// 	src={`https://www.youtube.com/embed/${videoId}`}
			// 	frameBorder="0"
			// 	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			// 	allowFullScreen
			// 	title={snippet.title}
			// />
			<iframe
				width="560"
				height="315"
				src="https://www.youtube.com/embed/bskgNOXbdiE"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
				title="Placeholder iframe"
			/>
		);
	}

	return <div>Movie Trailer: {userInput}</div>;
};

export default MovieTrailer;
