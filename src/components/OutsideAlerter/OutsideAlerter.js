import React, { useRef, useEffect } from 'react';

const useOutsideAlerter = (ref, fn) => {
	useEffect(
		() => {
			const handleClickOuside = (event) => {
				if (ref.current && !ref.current.contains(event.target)) {
					fn('hide');
				} else {
					fn('show');
				}
			};

			document.addEventListener('mousedown', handleClickOuside);
		},
		[ ref ]
	);
};

const OutsideAlerter = ({ children, hideAutocomplete }) => {
	const wrapperRef = useRef(null);
	useOutsideAlerter(wrapperRef, hideAutocomplete);
	return <div ref={wrapperRef}>{children}</div>;
};

export default OutsideAlerter;
