import React, { useRef } from 'react';
import { useOutsideAlerter } from '../../hooks/helpers';


interface Params {
	children: React.ReactNode
	hideAutocomplete: (condition:string) => void, 
	
	
}


const OutsideAlerter = ({ children, hideAutocomplete }: Params) => {
	const wrapperRef = useRef<HTMLDivElement>(null);
	useOutsideAlerter(wrapperRef, hideAutocomplete);
	return <div ref={wrapperRef}>{children}</div>;
};

export default OutsideAlerter;
