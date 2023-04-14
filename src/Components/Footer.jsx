import React from "react";
import { Link } from "react-router-dom";
// import {
// 	AiFillInstagram,
// 	AiFillTwitterCircle,
// 	AiOutlineCopyrightCircle,
// } from "react-icons/ai";
// import { BsFacebook } from "react-icons/bs";

import FooterStyles from "../styles/FooterStyles.css";

const Footer = () => {
	return (
		<footer>
			<div className="socials-bg">
				<div className="socials">
					<div className="socials-left">
						<h6>Keep in touch</h6>
						<p>
							Curious about new offerings? Sign up for our weekly newsletter and
							stay informed
						</p>
						<input type="email" placeholder="Your email"></input>
					</div>
					<div className="socials-right">
						<h6>Let's Socialize</h6>
						<Link to="/facebook" className="facebook">
							{/* <FAFacebook /> */}
							<span>Facebook</span>
						</Link>
						<Link to="/twitter" className="twitter">
							{/* <AiFillTwitterCircle /> */}
							<span>Twitter</span>
						</Link>
						<Link to="/instagram" className="instagram">
							{/* <AiFillInstagram /> */}
							<span>Instagram</span>
						</Link>
					</div>
				</div>
			</div>
			<div className="about-bg">
				<div className="about">
					<div className="about-left">
						<p>About Us</p>
						<p>Terms & Conditions</p>
						<p>Privacy & Cookie Policies</p>
					</div>
					<div className="about-right">
						<p>2022</p>
						<Link to="/copyright" className="copyright">
							{/* <AiOutlineCopyrightCircle /> */}
							<span>unilife</span>
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
