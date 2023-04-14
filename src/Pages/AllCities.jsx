import React from "react";
import Header from "../Components/Header";
import HeroAllCities from "../Components/HeroAllCities";
import GridCityName from "../Components/GridCityName";
import Footer from "../Components/Footer";
import { useContext } from "react";
import { CityContext } from "../Context/CityContext";
const AllCities = () => {
	return (
		<>
			<Header />
			<HeroAllCities />
			<GridCityName />
			<Footer />
		</>
	);
};

export default AllCities;
