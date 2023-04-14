import React from "react";
import Header from "../Components/Header";
import HeroHome from "../Components/HeroHome.jsx";
import CityGrid from "../Components/CityGrid";
import Footer from "../Components/Footer";
import Compare from "../Components/Compare";
import SearchAndCompare from "../Components/SearchAndCompare";

const HomePage = () => {
	return (
		<>
			<Header />
			<HeroHome />
			<CityGrid />
			<Compare/>
			<SearchAndCompare/>
			<Footer />
		</>
	);
};

export default HomePage;
