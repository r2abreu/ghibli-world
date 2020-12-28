import React, { useState } from 'react';

const SearchBar = ({ movies }) => {
	// Define index of selected suggestion
	const [ activeSuggestion, setActiveSuggestion ] = useState(0);
	// Match user's input
	const [ filteredSuggestion, setFilteredSuggestion ] = useState([]);
	// Determines if the suggestion list appears
	const [ showSuggestions, setShowSuggestions ] = useState(false);
	const [ userInput, setUserInput ] = useState('');

	const onChange = (event) => {
		const suggestions = movies;
		const userInput = event.currentTarget.value;
		const filteredSuggestions = suggestions.filter((suggestion) => {
			return suggestion.title.toLowerCase().indexOf(userInput.toLowerCase()) > -1;
		});
		console.log(filteredSuggestions);
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
		if (event.keyCode === 13) {
			setShowSuggestions(0);
			setUserInput(filteredSuggestion[activeSuggestion]);
		} else if (event.keyCode === 38) {
			if (activeSuggestion === 0) {
				return;
			}

			setActiveSuggestion(-1);
		} else if (event.keyCode === 40) {
			if (activeSuggestion - 1 === filteredSuggestion.length) {
				return;
			}
			setActiveSuggestion(+1);
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

export default SearchBar;
