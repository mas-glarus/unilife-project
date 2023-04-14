
import React from 'react';
import Header from '../Components/Header';
import HeroAllCities from '../Components/HeroAllCities';
import GridCityName from "../Components/GridCityName";
import { useContext } from "react";
import { CityContext } from "../Context/CityContext";
const AllCities = () => {
	return (
		<>
		<Header/>
		<HeroAllCities/>
		<GridCityName />
		</>
	);
};



export default AllCities;