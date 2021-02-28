import { Link } from 'react-router-dom';

// Icons
import photographyLogo from '../public/photography-logo.svg';
import phone from '../public/phoneWhite.svg';
import mail from '../public/mailWhite.svg';
import location from '../public/locationWhite.svg';

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer__main">
				<div className="footer__visit">
					<h2>Visit our other website</h2>
					<p className="footer__subtext">
						All of the photographs were taken by us at Simon Smith Photography
					</p>
					<a href="www.simonsmithphotography.co.uk" className="footer__link">
						www.simonsmithphotography.co.uk
					</a>
					<a href="www.simonsmithphotography.co.uk">
						<img src={photographyLogo} alt="" />
					</a>
				</div>
				<div className="footer__contact">
					<h4>Contact us</h4>
					<div className="footer__links">
						<div className="footer__phone">
							<a href="tel:02087495888">
								<img src={phone} alt="" />
								<p>0208 749 5888</p>
							</a>
						</div>
						<div className="footer__email">
							<a href="mailto:simon@simonsmithphotography.com">
								<img src={mail} alt="" />
								<p>simon@simonsmithphotography.com</p>
							</a>
						</div>
						<div className="footer__location">
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
				</div>
				<div className="footer__sitemap">
					<h4>Sitemap</h4>
					<div className="sitemap_links">
						<Link to="/">Home</Link>
						<Link to="/props">Props</Link>
						<Link to="/contact">Contact</Link>
					</div>
				</div>
			</div>
			<p className="footer__copy">Copyright Simon Smith Photography 2021</p>
		</div>
	);
};

export default Footer;
