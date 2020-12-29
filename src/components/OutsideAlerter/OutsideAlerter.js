import React, { useRef, useEffect } from 'react';

const useOutsideAlerter = (ref, hideAutocomplete) => {
	useEffect(
		() => {
			const handleClickOuside = (event) => {
				if (ref.current && !ref.current.contains(event.target)) {
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

const OutsideAlerter = ({ children, hideAutocomplete }) => {
	const wrapperRef = useRef(null);
	useOutsideAlerter(wrapperRef, hideAutocomplete);
	return <div ref={wrapperRef}>{children}</div>;
};

export default OutsideAlerter;
