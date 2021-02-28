import React from 'react';
import { Link } from 'react-router-dom';

//	Animations
import { motion } from 'framer-motion';
import { popup, fadeIn } from '../animation';

const Prop = ({ propId, propCode, description }) => {
	return (
		<>
			<Link to={`/props/${propId}`}>
				<motion.div
					variants={fadeIn}
					initial="hidden"
					animate="show"
					className="prop__container"
				>
					<div className="prop">
						<div className="prop__image">
							<img
								src={`https://cdn.image4.io/gallon/${propCode}.jpg`}
								alt="board"
							/>
						</div>
						<div className="prop__textcontainer">
							<div className="prop__text">
								<h4>{propCode}</h4>
								<p>{description}</p>
							</div>
						</div>
					</div>
				</motion.div>
			</Link>
		</>
	);
};

export default Prop;
