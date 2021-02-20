import React from 'react';
import { Link } from 'react-router-dom';

const Prop = ({ propId, propCode, description, number }) => {
	const num = Number(number);
	const str = description.replace(/\s+/g, '-');
	const imgUrl = `https://cdn.image4.io/gallon/f_auto/${propCode}-${
		num < 10 ? '00' : '0'
	}${num}-${str}.jpg`;

	return (
		<>
			<Link to={`/props/${propId}`}>
				<div className="prop">
					<div className="prop__image">
						<img
							src="https://www.inderkitchen.co.uk/ekmps/shops/inderkitchen/images/blanco-wood-chopping-board-225362-11387-p.jpg"
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
			</Link>
		</>
	);
};

export default Prop;
