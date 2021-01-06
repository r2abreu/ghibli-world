import React from 'react';
import MovieTrailer from '../MovieTrailer';

const MovieDetails = ({ userInput, movies }) => {
	const [ selectedMovie ] = movies.filter((movie) => {
		return movie.title === userInput;
	});

	if (selectedMovie) {
		const { title, release_date, director, rt_score, producer, description } = selectedMovie;
		return (
			<div className="movie-details">
				<div>
					<h2>{title}</h2>
					<span>{release_date}</span>
				</div>
				<div>
					<h3>{rt_score} / 10</h3>
				</div>
				<MovieTrailer userInput={userInput} />
				<p>{description}</p>
				<div>
					<p>Director: {director}</p>
					<p>Producer: {producer}</p>
				</div>
			</div>
		);
	} else {
		return null;
	}
};

export default MovieDetails;
