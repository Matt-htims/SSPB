import React from 'react';

import logo from '../public/logoGrey.svg';
import phone from '../public/phoneBlack.svg';
import mail from '../public/mailBlack.svg';
import location from '../public/locationBlack.svg';

//	Components
import ScrollTop from '../components/ScrollTop';

const ContactScreen = () => {
	return (
		<div className="contactscreen">
			<ScrollTop />
			<div className="contactscreen__container">
				<div className="contactscreen__title">
					<img src={logo} alt="" />
					<h2>Contact us</h2>
				</div>
				<div className="contactscreen__main">
					<div className="contactscreen__contact">
						<div className="contactscreen__phone">
							<a href="tel:02087495888">
								<img src={phone} alt="" />
								<p>0208 749 5888</p>
							</a>
						</div>
						<div className="contactscreen__email">
							<a href="mailto:simon@simonsmithphotography.com">
								<img src={mail} alt="" />
								<p>simon@simonsmithphotography.com</p>
							</a>
						</div>
						<div className="contactscreen__location">
							<img src={location} alt="" />
							<div className="footer__address">
								<p className="first-line">6 Sun Studios</p>
								<p>30 Warple Way</p>
								<p>Acton</p>
								<p>London</p>
								<p>W3 0RX</p>
							</div>
						</div>
					</div>
					<div className="contactscreen__map"></div>
				</div>
			</div>
		</div>
	);
};

export default ContactScreen;
