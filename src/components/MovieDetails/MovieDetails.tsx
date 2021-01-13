import React from 'react';
import MovieTrailer from '../MovieTrailer';
import {Object} from '../Autocomplete';

interface Params {
	userInput: string, 
	movies: Array<Object>
}

const MovieDetails = ({ userInput, movies }: Params) => {
	const [ selectedMovie ] = movies.filter((movie) => {
		return movie.title === userInput;
	});

	if (selectedMovie) {
		const { title, release_date, director, rt_score, producer, description } = selectedMovie;
		return (
			<div className="movie-details">
				<div>
					<div>
						<h2>{title}</h2>
						<span>({release_date})</span>
					</div>
					<div>
						<h3>{rt_score} / 10</h3>
					</div>
				</div>
				<hr />
				<MovieTrailer userInput={userInput} />
				<p>{description}</p>
				<div>
					<p>Director: {director}</p>
					<p>Producer: {producer}</p>
				</div>
			</div>
		);
	} else {
		return <h4>Select a Movie</h4>;
	}
};

export default MovieDetails;
