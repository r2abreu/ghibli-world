import React, { useState } from 'react';
import SuggestionList from '../SuggestionList';

export interface Object {
	id: string, 
	title: string, 
	description: string, 
	director: string, 
	producer: string, 
	release_date: string, 
	rt_score: string, 
	people: Array<string>, 
	species: Array<string>, 
	locations: Array<string>, 
	vehicles: Array<string>
	url: string
}


export interface Params {
	movies: Array<Object>,
	showAutocomplete: boolean, 
	onInputChange: (arg: string) => void, 
	userInput: string
}




const Autocomplete = ({ movies, showAutocomplete, onInputChange, userInput } : Params) => {
	// Define index of selected suggestion
	let [ activeSuggestion, setActiveSuggestion ] = useState(0);
	// Match user's input
	let [ filteredSuggestion, setFilteredSuggestion ] = useState<Array<Object>>([]);
	// Determines if the suggestion list appears
	let [ showSuggestions, setShowSuggestions ] = useState(false);

	const onChange = (event: React.FormEvent<HTMLInputElement>) :void => {
		const suggestions = movies;
		// Making the component controlled
		onInputChange(event.currentTarget.value);

		// Go trough all the suggestions, filter out those that do not match users input and return a new array containing those suggestions that do
		const filteredSuggestions = suggestions.filter((suggestion) => {
			// Return  every element that matches the pattern (users input)
			return suggestion.title.toLowerCase().indexOf(userInput.toLowerCase()) > -1;
		});

		setActiveSuggestion(0);
		setFilteredSuggestion(filteredSuggestions);
		setShowSuggestions(true);
		onInputChange(event.currentTarget.value);
	};

	const onClick = (event: React.MouseEvent<HTMLElement>) => {
		setFilteredSuggestion([]);
		setShowSuggestions(false);
		onInputChange(event.currentTarget.innerText);
	};

	const onKeyDown = (event: React.KeyboardEvent<HTMLElement> ) => {
		// If the user presses "Enter"
		if (event.keyCode === 13) {
			setShowSuggestions(false);
			onInputChange(filteredSuggestion[activeSuggestion].title);
			// If the user presses the "Up" arrow
		} else if (event.keyCode === 38) {
			if (activeSuggestion === 0) {
				return;
			}

			setActiveSuggestion(--activeSuggestion);
			// If the user presses the "Down" arrow
		} else if (event.keyCode === 40) {
			if (activeSuggestion - 1 === filteredSuggestion.length) {
				return;
			}
			setActiveSuggestion(++activeSuggestion);
		}
	};

	const renderContent = () => {
		if (showAutocomplete) {
			return (
				<SuggestionList
					showSuggestions={showSuggestions}
					userInput={userInput}
					filteredSuggestion={filteredSuggestion}
					onClick={onClick}
					activeSuggestion={activeSuggestion}
				/>
			);
		} else {
			return null;
		}
	};

	const onFormSubmit = (event: React.FormEvent<EventTarget>): void => {
		event.preventDefault();
	};

	return (
		<React.Fragment>
			<form onSubmit={onFormSubmit}>
				<input
					type="text"
					onChange={onChange}
					onKeyDown={onKeyDown}
					value={userInput}
					placeholder="Search for Movies"
					id="searchBar"
					autoComplete="off"
				/>
			</form>
			{renderContent()}
		</React.Fragment>
	);
};

export default Autocomplete;
