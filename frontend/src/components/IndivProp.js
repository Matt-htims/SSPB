import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

//	Animations
import { motion } from 'framer-motion';
import { fadeIn } from '../animation';

//	Actions
import { getPropDetails } from '../redux/actions/propActions';

const IndivProp = () => {
	const { id } = useParams();

	const dispatch = useDispatch();
	const propDetails = useSelector(state => state.getPropDetails);
	const { loading, error, prop } = propDetails;

	useEffect(() => {
		if (prop && id !== prop._id) {
			dispatch(getPropDetails(id));
		}
	}, [dispatch, prop, id]);

	return (
		<>
			{!loading && (
				<motion.div
					variants={fadeIn}
					initial="hidden"
					animate="show"
					className="indivprop"
				>
					{error ? (
						<h2>{error}</h2>
					) : (
						<>
							<div className="indivprop__container">
								<div className="indivprop__image">
									<img
										src={`https://cdn.image4.io/gallon/${prop.code}.jpg`}
										alt="board"
									/>
								</div>
								<div className="text">
									<div className="indivprop__textcontainer">
										<div className="indivprop__lefttext">
											<h4>{prop.code}</h4>
											<p className="description">{prop.description}</p>
											<p id="size">{`${prop.size} cm`}</p>
										</div>
										<div className="indivprop__righttext">
											<p className="cost">{`${prop.hireCost} per week`}</p>
										</div>
									</div>
								</div>
							</div>
						</>
					)}
				</motion.div>
			)}
		</>
	);
};

export default IndivProp;
