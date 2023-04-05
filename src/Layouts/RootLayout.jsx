import { NavLink, Outlet } from "react-router-dom";


const Navbar = () => {
	return (
		<nav className="navbar">
			<NavLink to="/">Home</NavLink>
			<NavLink to="allCities">All Cities</NavLink>
			<NavLink to="cityDetails">City Details</NavLink>
			<NavLink to="homeDetails">Home Details</NavLink>
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
