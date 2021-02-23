import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';

//	Components
import IndivProp from '../components/IndivProp';
import PropscreenMobileNavigation from '../components/PropscreenMobileNavigation';
import PropscreenNavigation from '../components/PropscreenNavigation';
import PropscreenPropContainer from '../components/PropscreenPropContainer';
import InfiniteScroll from '../components/Scroller';

const PropsScreen = ({ setPropToggle }) => {
	const { id } = useParams();

	useEffect(() => {
		if (id) {
			setPropToggle(true);
		} else {
			setPropToggle(false);
		}
	});

	useEffect(() => {
		window.scrollTo(
			0,
			document.querySelector('.propsscreen__title').scrollHeight
		);
	});

	return (
		<div className="propsscreen">
			{id && <IndivProp />}
			<h2 className="propsscreen__title">The Collection</h2>
			<PropscreenMobileNavigation />
			<PropscreenNavigation />
			<PropscreenPropContainer />
			{/* <InfiniteScroll /> */}
			<div className="propsscreen__white"></div>
		</div>
	);
};

export default PropsScreen;
