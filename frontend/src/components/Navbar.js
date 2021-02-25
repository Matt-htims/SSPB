import { Link } from 'react-router-dom';

import logo from '../public/Logo.svg';

const Navbar = ({ click, show, close }) => {
	return (
		<nav className="navbar sticky">
			<div className="navbar__logo">
				<Link to="/" onClick={close}>
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

			<div onClick={click} className={`navbar__toggle ${show ? 'open' : ''}`}>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</nav>
	);
};

export default Navbar;
