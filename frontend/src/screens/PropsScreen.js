import { useParams, Link } from 'react-router-dom';
import { useEffect, useState, lazy, Suspense } from 'react';

//	Redux
import { useSelector, useDispatch } from 'react-redux';

//	Actions
import {
	getProps as listProps,
	getPropsByCat,
} from '../redux/actions/propActions';

//	Components
// import Prop from '../components/Prop';
import IndivProp from '../components/IndivProp';
const Prop = lazy(() => import('../components/Prop'));

const PropsScreen = ({ setPropToggle }) => {
	const { id } = useParams();
	const dispatch = useDispatch();

	const getProps = useSelector(state => state.getProps);
	const { props, loading, error } = getProps;

	const propDetails = useSelector(state => state.getPropDetails);

	useEffect(() => {
		dispatch(listProps());
	}, [dispatch]);

	useEffect(() => {
		if (id) {
			setPropToggle(true);
		} else {
			setPropToggle(false);
		}
	});

	//	Handlers
	const searchByCategoryHandler = (q1, q2, q3, q4) => {
		dispatch(getPropsByCat(q1, q2, q3, q4));
	};

	const searchAllHandler = () => {
		dispatch(listProps());
	};

	return (
		<div className="propsscreen">
			{id && <IndivProp />}
			<h2 className="propsscreen__title">The Collection</h2>
			<div className="propsscreen__links">
				<div className="propsscreen__linksone">
					<ul>
						<li onClick={searchAllHandler}>All</li>
						<li
							onClick={() => {
								searchByCategoryHandler('ST', 'M');
							}}
						>
							Marble &amp; Stone
						</li>
						<li
							onClick={() => {
								searchByCategoryHandler('MS');
							}}
						>
							Metal Surfaces
						</li>
						<li
							onClick={() => {
								searchByCategoryHandler('MM', 'MO', 'MW', 'MCT');
							}}
						>
							Miscellaneous
						</li>
						<li
							onClick={() => {
								searchByCategoryHandler('PB');
							}}
						>
							Painted Backgrounds
						</li>
					</ul>
				</div>
				<div className="propsscreen__linkstwo">
					<ul>
						<li
							onClick={() => {
								searchByCategoryHandler('PMT');
							}}
						>
							Painted Metal Tables
						</li>
						<li
							onClick={() => {
								searchByCategoryHandler('PWS');
							}}
						>
							Painted Woods
						</li>
						<li
							onClick={() => {
								searchByCategoryHandler('T');
							}}
						>
							Tables
						</li>
						<li
							onClick={() => {
								searchByCategoryHandler('BB', 'IPB');
							}}
						>
							Wood Boards
						</li>
						<li
							onClick={() => {
								searchByCategoryHandler('WTT');
							}}
						>
							Wood Table Tops
						</li>
					</ul>
				</div>
			</div>
			<div className="propsscreen__props">
				{loading ? (
					<h2>Loading...</h2>
				) : error ? (
					<h2>{error}</h2>
				) : (
					props.map(prop => (
						<Suspense fallback={<div>Loading...</div>}>
							<Prop
								propId={prop._id}
								key={prop._id}
								propCode={prop.code}
								description={prop.description}
								number={prop.number}
							/>
						</Suspense>
					))
				)}
			</div>
		</div>
	);
};

export default PropsScreen;
