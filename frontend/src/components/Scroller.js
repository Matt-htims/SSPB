import { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

//  Components
import Prop from '../components/Prop';

import { useSelector, useDispatch } from 'react-redux';
import {
	getProps as listProps,
	updateProps,
} from '../redux/actions/propActions';

const Scroller = () => {
	const dispatch = useDispatch();
	const getProps = useSelector(state => state.getProps);
	const { props, loading, error } = getProps;

	useEffect(() => {
		dispatch(listProps());
	}, [dispatch]);

	//	State
	const [dataLength, setDataLength] = useState(1);

	const [nextPage, setNextPage] = useState(2);

	const [data, setData] = useState({});

	const fetchMoreDataHandler = page => {
		dispatch(updateProps(page));
		setData(props);
		setDataLength(props.docs.length);
		setNextPage(props.nextPage);
	};

	return (
		<div className="propsscreen__props">
			<h1>Test infinite scroll</h1>
			<hr />
			{props.docs && (
				<InfiniteScroll
					dataLength={props.docs.length}
					next={() => {
						fetchMoreDataHandler(props.nextPage);
					}}
					hasMore={props.hasNextPage ? true : false}
					loader={<h4>Loading...</h4>}
				>
					{loading ? (
						<h2>Loading...</h2>
					) : error ? (
						<h2>{error}</h2>
					) : (
						props.docs.map(prop => (
							// <div className="">
							// 	<h1>{prop.code}</h1>
							// 	<p>{prop.description}</p>
							// </div>
							<Prop
								propId={prop._id}
								key={prop._id}
								propCode={prop.code}
								description={prop.description}
								number={prop.number}
							/>
						))
					)}
				</InfiniteScroll>
			)}
		</div>
	);
};

export default Scroller;
