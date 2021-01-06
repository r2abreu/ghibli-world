import React, { useRef } from 'react';
import { useOutsideAlerter } from '../../hooks/helpers';

const OutsideAlerter = ({ children, hideAutocomplete }) => {
	const wrapperRef = useRef(null);
	useOutsideAlerter(wrapperRef, hideAutocomplete);
	return <div ref={wrapperRef}>{children}</div>;
};

export default OutsideAlerter;
