import { useEffect } from 'react';

const ScrollTop = () => {
	useEffect(() => {
		window.scroll({
			top: 0,
			left: 0,
		});
	}, []);
	return null;
};

export default ScrollTop;
