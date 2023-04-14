import React from "react";
import Header from "../Components/Header";
import HeroHome from "../Components/HeroHome.jsx";
import CityGrid from "../Components/CityGrid";
import Footer from "../Components/Footer";
import Compare from "../Components/Compare";

const HomePage = () => {
	return (
		<>
			<Header />
			<HeroHome />
			<CityGrid />
			<Compare/>
			<Footer />
		</>
	);
};

export default HomePage;
