const useOutsideAlerter = (ref) => {
	useEffect(
		() => {
			const handleClickOuside = (event) => {
				if (ref.current && !ref.current.contains(event.target)) {
					alert('You clicked outisde of me!');
				}
			};

			document.addEventListener('mousedown', handleClickOuside);
		},
		[ ref ]
	);
};

export { useOutsideAlerter };
