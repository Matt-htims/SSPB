import { useParams, Link } from 'react-router-dom';
<<<<<<< HEAD
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
=======
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//	Components
import IndivProp from '../components/IndivProp';
import PropscreenMobileNavigation from '../components/PropscreenMobileNavigation';
import PropscreenNavigation from '../components/PropscreenNavigation';
import PropscreenPropContainer from '../components/PropscreenPropContainer';
import ScrollTop from '../components/ScrollTop';

import { updateProps, updatePropsByCat } from '../redux/actions/propActions';
>>>>>>> paginatedData

const PropsScreen = ({ setPropToggle }) => {
	const dispatch = useDispatch();
	const { id } = useParams();

	const getProps = useSelector(state => state.getProps);
	const { cat } = useSelector(state => state.currentCategory);
	const { props, loading, error, pageDetails } = getProps;

	useEffect(() => {
		if (id) {
			setPropToggle(true);
		} else {
			setPropToggle(false);
		}
	});

	const loadMoreHandler = () => {
		if (cat === 'all') {
			dispatch(updateProps(pageDetails.nextPage));
		} else {
			switch (cat) {
				case 'marbleAndStone':
					dispatch(updatePropsByCat(pageDetails.nextPage, 'ST', 'M'));
					break;
				case 'metalSurfaces':
					dispatch(updatePropsByCat(pageDetails.nextPage, 'MS'));
					break;
				case 'misc':
					dispatch(
						updatePropsByCat(pageDetails.nextPage, 'MM', 'MO', 'MW', 'MCT')
					);
					break;
				case 'paintedBackgrounds':
					dispatch(updatePropsByCat(pageDetails.nextPage, 'PB'));
					break;
				case 'paintedMetalTables':
					dispatch(updatePropsByCat(pageDetails.nextPage, 'PMT'));
					break;
				case 'paintedWoods':
					dispatch(updatePropsByCat(pageDetails.nextPage, 'PWS'));
					break;
				case 'tables':
					dispatch(updatePropsByCat(pageDetails.nextPage, 'T'));
					break;
				case 'woodBoards':
					dispatch(updatePropsByCat(pageDetails.nextPage, 'BB', 'IPB'));
					break;
				case 'woodTableTops':
					dispatch(updatePropsByCat(pageDetails.nextPage, 'WTT'));
					break;
			}
		}
	};

	return (
		<div className="propsscreen">
			<ScrollTop />
			{id && <IndivProp />}
			<h2 className="propsscreen__title">The Collection</h2>
			<PropscreenMobileNavigation />
			<PropscreenNavigation />
			<PropscreenPropContainer />
			{!loading && pageDetails && pageDetails.hasNextPage && (
				<div className="propsscreen__loadmorecontainer">
					<div className="propsscreen__loadmore" onClick={loadMoreHandler}>
						<p>Load More</p>
					</div>
				</div>
<<<<<<< HEAD
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
=======
			)}
			<div className="propsscreen__white"></div>
>>>>>>> paginatedData
		</div>
	);
};

export default PropsScreen;
