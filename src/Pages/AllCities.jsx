
import React from 'react';
import Header from '../Components/Header';
import HeroAllCities from '../Components/HeroAllCities';
import { useContext } from "react";
import GridCityName from "../Components/GridCityName";
import { CityContext } from "../Context/CityContext";
import Footer from "../Components/Footer";

const AllCities = () => {
	const { cityinfo } = useContext(CityContext)
	return (
		<div>
			<h1>All Cities Page</h1>
			<h2>Search by City</h2>
			<Header/>
		<HeroAllCities/>
			<GridCityName />
			<Footer />
		</div>
	);
};

export default AllCities;