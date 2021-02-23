import { useEffect, useState, useRef } from 'react';

//  Components
import Prop from '../components/Prop';

//	Redux
import { useSelector, useDispatch } from 'react-redux';
import {
	getProps as listProps,
	updateProps,
} from '../redux/actions/propActions';
import { updateCategory } from '../redux/actions/categoryActions';

const PropscreenPropContainer = () => {
	const dispatch = useDispatch();
	const getProps = useSelector(state => state.getProps);
	const { props, loading, error } = getProps;

	useEffect(() => {
		dispatch(updateCategory('all'));
		dispatch(listProps());
	}, [dispatch]);

	//	Doing something on scroll

	const loadMore = () => {
		if (props.hasNextPage) {
			dispatch(updateProps(props.nextPage + 1));
			setIsFetching(false);
		}
	};

	const [isFetching, setIsFetching] = useState(false);

	useEffect(() => {
		if (!loading && props.nextPage >= 3) {
			window.scrollTo(
				0,
				document.querySelector('.propsscreen__props').scrollHeight - 7500
			);
		}
	}, [loading]);

	useEffect(() => {
		if (isFetching) {
			if (props.hasNextPage) {
				dispatch(updateProps(props.nextPage));
				window.scrollTo(
					0,
					document.querySelector('.footer').scrollHeight - 1000
				);
				setIsFetching(false);
			}
		}
	}, [isFetching]);

	const handleScroll = () => {
		if (
			!isFetching &&
			window.innerHeight + document.documentElement.scrollTop !==
				document.documentElement.offsetHeight
		)
			return;
		setIsFetching(true);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<div className="propsscreen__props">
			{props && (
				<>
					{loading ? (
						<h2>Loading...</h2>
					) : error ? (
						<h2>{error}</h2>
					) : (
						props.docs &&
						props.docs.map(prop => (
							<Prop
								propId={prop._id}
								key={prop._id}
								propCode={prop.code}
								description={prop.description}
								number={prop.number}
							/>
						))
					)}
					{/* <div className="loading" ref={loader}>
						<h2>Load More</h2>
					</div> */}
				</>
			)}
			{isFetching && 'Fetching more list items...'}
		</div>
	);
};

export default PropscreenPropContainer;
