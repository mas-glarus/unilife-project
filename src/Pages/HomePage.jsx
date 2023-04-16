
import React from 'react';
import Header from '../Components/Header';
import HeroHome from '../Components/HeroHome.jsx';
import SearchBox from "../components/SearchBox";
import { Link } from "react-router-dom";
import HomepageGrid from "../Components/HomepageGrid";

const HomePage = () => {
	return (
		<>
		<Header/>
     	<HeroHome/>
		<SearchBox />
		<HomepageGrid />
		<Link to='allcities'><button className="allcitiesbtn" >See all cities</button></Link>
		</>
	)

}

export default HomePage;
