import React from "react";
import Header from "../Components/Header";
import HeroHome from "../Components/HeroHome.jsx";
import CityGrid from "../Components/CityGrid";
import Footer from "../Components/Footer";

const HomePage = () => {
	return (
		<>
			<Header />
			<HeroHome />
			<CityGrid />
			<Footer />
		</>
	);
};

export default HomePage;
