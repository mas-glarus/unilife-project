
import React from 'react';
import Header from '../Components/Header';
import HeroHome from '../Components/HeroHome.jsx';
import SearchBox from "../components/SearchBox";
import HomepageGrid from "../Components/HomepageGrid";

const HomePage = () => {
	return (
		<>
		<Header/>
     	<HeroHome/>
		<SearchBox />
		<HomepageGrid />
		</>
	)

}

export default HomePage;
