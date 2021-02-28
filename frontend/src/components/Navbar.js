import { Link, NavLink } from 'react-router-dom';

import logo from '../public/Logo.svg';

const Navbar = ({ click, show, close }) => {
	return (
		<nav className={`navbar sticky ${show ? 'open' : ''}`}>
			<div className="navbar__logo">
				<Link to="/" onClick={close}>
					<img src={logo} alt="" />
				</Link>
			</div>
			<ul className="navbar__links ">
				<li>
					<NavLink activeClassName="active" to="/props">
						PROPS
					</NavLink>
				</li>
				<li>
					<NavLink activeClassName="active" to="/contact">
						CONTACT
					</NavLink>
				</li>
			</ul>

			<div onClick={click} className={`navbar__toggle`}>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</nav>
	);
};

export default Navbar;
