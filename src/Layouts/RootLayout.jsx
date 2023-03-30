import { NavLink, Outlet } from "react-router-dom";
import Header from "../Components/Header";

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
			<Outlet />
		</div>
	);
};

export default RootLayout;
