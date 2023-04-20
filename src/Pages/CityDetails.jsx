import React, { useContext } from 'react';
import Header from '../Components/Header';
import HeroCity from '../Components/HeroCity';
import HomesPerCityGrid from '../Components/HomesPerCityGrid';
import BeingAStudent from "../Components/BeingAStudent";
import Footer from "../Components/Footer";

const CityDetails = () => {
	
	return (
		<>
		<Header/>
		<HeroCity/>
		<HomesPerCityGrid/> 
		<BeingAStudent />
		<Footer />
		</>
	);
};

export default CityDetails;