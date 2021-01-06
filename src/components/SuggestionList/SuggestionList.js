import React from 'react';

const SuggestionList = ({ showSuggestions, userInput, filteredSuggestion, activeSuggestion, onClick }) => {
	if (showSuggestions && userInput) {
		if (filteredSuggestion.length) {
			return (
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
			return (
				<div className="no-suggestions">
					<em>Sin coincidencias.</em>
				</div>
			);
		}
	} else {
		return null;
	}
};

export default SuggestionList;
