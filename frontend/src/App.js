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

function App() {
	const [menuToggle, setMenuToggle] = useState(false);
	const toggle = () => setMenuToggle(!menuToggle);

	return (
		<Router>
			<Navbar click={toggle} show={menuToggle} />
			<MobileMenu show={menuToggle} />
			<Backdrop show={menuToggle} click={toggle} />
			<main>
				<Switch>
					<Route exact path="/" component={HomeScreen} />
					<Route exact path="/props" component={PropsScreen} />
					<Route exact path="/contact" component={ContactScreen} />
				</Switch>
			</main>

			{/* Footer */}
		</Router>
	);
}

export default App;
