import React from 'react';

import { useHistory } from 'react-router-dom';

const Backdrop = ({ show, click, propShow, setMenuToggle }) => {
	const history = useHistory();
	const showElement = show || propShow;

	const close = () => setMenuToggle(false);

	const showHandler = e => {
		if (propShow) {
			history.push('/props');
			close();
		} else {
			close();
		}
	};

	return showElement ? (
		<div className="backdrop" onClick={showHandler}></div>
	) : null;
};

export default Backdrop;
