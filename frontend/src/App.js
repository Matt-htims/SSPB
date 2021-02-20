import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react';

//	Styles
import './styles/app.scss';

//	Screens
import HomeScreen from './screens/HomeScreen';
import PropsScreen from './screens/PropsScreen';
import ContactScreen from './screens/ContactScreen';
import MobileMenu from './components/MobileMenu';

//	Components
import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop';
import Footer from './components/Footer';

function App() {
	const [menuToggle, setMenuToggle] = useState(false);
	const [propToggle, setPropToggle] = useState(false);

	const toggle = () => setMenuToggle(!menuToggle);

	//	When mobile menu is open the overflow is hidden to get rid of the scroll
	//	Normally shouldn't manipulate dom in this way as it goes against react
	//	However we are manipulating parent of what react is manipulating (App) so it is ok
	if (menuToggle || propToggle) {
		document.body.style.overflow = 'hidden';
	} else {
		document.body.style.overflow = 'auto';
	}

	return (
		<Router>
			<Navbar click={toggle} show={menuToggle} />
			<MobileMenu show={menuToggle} click={toggle} />
			<Backdrop
				show={menuToggle}
				setMenuToggle={setMenuToggle}
				propShow={propToggle}
				click={toggle}
			/>
			<main>
				<Switch>
					<Route exact path="/" component={HomeScreen} />

					<Route exact path={['/props', '/props/:id']}>
						<PropsScreen setPropToggle={setPropToggle} />
					</Route>
					<Route exact path="/contact" component={ContactScreen} />
				</Switch>
			</main>

			<Footer />
		</Router>
	);
}

export default App;
