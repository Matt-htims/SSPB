import React from 'react';
import { Link } from 'react-router-dom';

//	Animation
import { motion } from 'framer-motion';
import { slideIn } from '../animation';

const MobileMenu = ({ show, click }) => {
	return show ? (
		<motion.div
			variants={slideIn}
			exit="exit"
			initial="hidden"
			animate="show"
			className={`mobilemenu`}
		>
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
		</motion.div>
	) : null;
};

export default MobileMenu;
