import { Link } from 'react-router-dom';

import logo from '../Logo.svg';

const Navbar = ({ click, show }) => {
	return (
		<nav className={`navbar ${show ? 'open' : ''}`}>
			<div className="navbar__logo">
				<Link to="/">
					<img src={logo} alt="" />
				</Link>
			</div>
			<ul className="navbar__links ">
				<li>
					<Link to="/props">PROPS</Link>
				</li>
				<li>
					<Link to="/contact">CONTACT</Link>
				</li>
			</ul>

			<a onClick={click} className="navbar__toggle " href="#">
				<span></span>
				<span></span>
				<span></span>
			</a>
		</nav>
	);
};

export default Navbar;
