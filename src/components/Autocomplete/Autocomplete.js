import React, { useState } from 'react';
import SuggestionList from '../SuggestionList';

const Autocomplete = ({ movies, showAutocomplete, onInputChange, userInput }) => {
	// Define index of selected suggestion
	let [ activeSuggestion, setActiveSuggestion ] = useState(0);
	// Match user's input
	let [ filteredSuggestion, setFilteredSuggestion ] = useState([]);
	// Determines if the suggestion list appears
	let [ showSuggestions, setShowSuggestions ] = useState(false);

	const onChange = (event) => {
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

	const onClick = (event) => {
		setFilteredSuggestion([]);
		setShowSuggestions(false);
		onInputChange(event.currentTarget.innerText);
	};

	const onKeyDown = (event) => {
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

	const onFormSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<React.Fragment>
			<form onSubmit={onFormSubmit}>
				<label htmlFor="searchbar">Busca una película</label>
				<input
					type="text"
					onChange={onChange}
					onKeyDown={onKeyDown}
					value={userInput}
					placeholder="Howl's Moving Castle"
					id="searchBar"
					autoComplete="off"
				/>
			</form>
			{renderContent()}
		</React.Fragment>
	);
};

export default Autocomplete;
