import { NavLink, Outlet } from "react-router-dom";


const Navbar = () => {
	return (
		<nav className="navbar">
			<NavLink to="/">Home</NavLink>
			<NavLink to="allCities">All Cities</NavLink>
			<NavLink to="cityDetails/:id">City Details</NavLink>
			<NavLink to="homeDetails/:idProp">Home Details</NavLink>
			<NavLink to="bookViewing">Book a Viewing</NavLink>
			<NavLink to="contactUs">Contact Us</NavLink>
		</nav>
	);
};

const RootLayout = () => {
	return (
		<div className="app">

			<Navbar />
			<Outlet />

		</div>
	);
};

export default RootLayout;
