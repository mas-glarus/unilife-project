import { Link } from "react-router-dom";
import CityGrid from "../Components/CityGrid";
import React from 'react';
import Header from '../Components/Header';
import HeroHome from '../Components/HeroHome.jsx';
import SearchBox from "../components/SearchBox";


const HomePage = () => {
	
	return (
		<div >
			<h1>HOMEPAGE</h1>
			<Header/>
     	<HeroHome/>
			<SearchBox />
			<h2>Student accomodations in our top cities</h2>
			<CityGrid />
			<Link to='allcities'><button className="allcitiesbtn" >See all cities</button></Link>
		</div>

	);
	
};


export default HomePage;
