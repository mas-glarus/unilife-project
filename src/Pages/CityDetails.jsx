import React, { useContext } from 'react';
import Header from '../Components/Header';
import HeroCity from '../Components/HeroCity';
import { useParams } from 'react-router-dom';
import HomesPerCityGrid from '../Components/HomesPerCityGrid';

const CityDetails = () => {
	
	return (
		<>
		<Header/>
		<HeroCity/>
		<HomesPerCityGrid/> 
		</>
	);
};

export default CityDetails;

