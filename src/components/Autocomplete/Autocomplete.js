import React, { useState } from 'react';

const Autocomplete = ({ movies }) => {
	// Define index of selected suggestion
	let [ activeSuggestion, setActiveSuggestion ] = useState(0);
	// Match user's input
	let [ filteredSuggestion, setFilteredSuggestion ] = useState([]);
	// Determines if the suggestion list appears
	let [ showSuggestions, setShowSuggestions ] = useState(false);
	let [ userInput, setUserInput ] = useState('');

	const onChange = (event) => {
		const suggestions = movies;
		// Making the component controlled
		const userInput = event.currentTarget.value;
		// Go trough all the suggestions, filter out those that do not match users input and return a new array containing those suggestions that do
		const filteredSuggestions = suggestions.filter((suggestion) => {
			// Return  every element that matches the pattern (users input)
			return suggestion.title.toLowerCase().indexOf(userInput.toLowerCase()) > -1;
		});

		setActiveSuggestion(0);
		setFilteredSuggestion(filteredSuggestions);
		setShowSuggestions(true);
		setUserInput(event.currentTarget.value);
	};

	const onClick = (event) => {
		setFilteredSuggestion([]);
		setShowSuggestions(false);
		setUserInput(event.currentTarget.innerText);
	};

	const onKeyDown = (event) => {
		// If the user presses "Enter"
		if (event.keyCode === 13) {
			setActiveSuggestion(0);
			setShowSuggestions(false);
			setUserInput(filteredSuggestion[activeSuggestion].title);
			// If the user presses the "Up" arrow
		} else if (event.keyCode === 38) {
			if (activeSuggestion === 0) {
				return;
			}

			setActiveSuggestion(-1);
			// If the user presses the "Down" arrow
		} else if (event.keyCode === 40) {
			if (activeSuggestion - 1 === filteredSuggestion.length) {
				return;
			}
			setActiveSuggestion(++activeSuggestion);
		}
	};

	let suggestionListComponent;

	if (showSuggestions && userInput) {
		if (filteredSuggestion.length) {
			suggestionListComponent = (
				<ul className="suggestions">
					{filteredSuggestion.map((suggestion, index) => {
						let className;

						if (index === activeSuggestion) {
							className = 'suggestion-active';
						}

						return (
							<li className={className} key={suggestion.title} onClick={onClick}>
								{suggestion.title}
							</li>
						);
					})}
				</ul>
			);
		} else {
			suggestionListComponent = (
				<div className="no-suggestions">
					<em>No suggestions available.</em>
				</div>
			);
		}
	}

	return (
		<React.Fragment>
			<input type="text" onChange={onChange} onKeyDown={onKeyDown} value={userInput} />
			{suggestionListComponent}
		</React.Fragment>
	);
};

export default Autocomplete;
