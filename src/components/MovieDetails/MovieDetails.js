import React from 'react';

const MovieDetails = ({ userInput, movies }) => {
	const [ selectedMovie ] = movies.filter((movie) => {
		return movie.title === userInput;
	});

	if (selectedMovie) {
		const { title, release_date, director, rt_sore, producer, description } = selectedMovie;
		return (
			<div className="movie-details">
				<h2>{title}</h2>
				<span>{release_date}</span>
			</div>
		);
	} else {
		return null;
	}
};

export default MovieDetails;
