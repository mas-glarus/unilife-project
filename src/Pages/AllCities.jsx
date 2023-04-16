
import React from 'react';
import Header from '../Components/Header';
import HeroAllCities from '../Components/HeroAllCities';
import { useContext } from "react";
import { CityContext } from "../Context/CityContext";
import GridAllCities from '../Components/GridAllCities';

const AllCities = () => {

	const { cityinfo } = useContext(CityContext)

	return (

		<>

		<Header/>
		<HeroAllCities/>
		<GridAllCities />

		</>
	);
};

export default AllCities;