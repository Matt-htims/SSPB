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
	const close = () => setMenuToggle(false);

	return (
		<Router>
			<Navbar click={toggle} show={menuToggle} close={close} />
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
