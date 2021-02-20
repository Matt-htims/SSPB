import React from 'react';
import { Link } from 'react-router-dom';

const MobileMenu = ({ show, click }) => {
	return show ? (
		<div className={`mobilemenu`}>
			<ul className="mobilemenu__links" onClick={click}>
				<Link to="/">
					<li>HOME</li>
				</Link>
				<Link to="/props">
					<li>PROPS</li>
				</Link>
				<Link to="/contact">
					<li>CONTACT</li>
				</Link>
			</ul>
		</div>
	) : null;
};

export default MobileMenu;
