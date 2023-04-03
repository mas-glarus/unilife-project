
import React from 'react';
import Header from '../Components/Header';
import HeroHome from '../Components/HeroHome.jsx';

const HomePage = () => {
	return (
		<>
		<Header/>
     	<HeroHome/>
      	
		</>


import SearchBox from "../components/SearchBox";



import { Link } from "react-router-dom";
import CityGrid from "../Components/CityGrid";
import SearchBox from "../components/SearchBox";


const HomePage = () => {
	
	return (
		<div >
			<h1>HOMEPAGE</h1>

			<SearchBox />
		</div>


      <SearchBox />
			<h2>Student accomodations in our top cities</h2>
			<CityGrid />
			<Link to='allcities'><button className="allcitiesbtn" >See all cities</button></Link>
			
     </div>

	);
	
};


export default HomePage;
