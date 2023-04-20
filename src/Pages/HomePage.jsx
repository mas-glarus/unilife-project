
import React from 'react';
import Header from '../Components/Header';
import HeroHome from '../Components/HeroHome.jsx';
import SearchBox from "../Components/SearchBox";
import HomepageGrid from "../Components/HomepageGrid";
import Footer from "../Components/Footer";
import Compare from "../Components/Compare";
import SearchAndCompare from "../Components/SearchAndCompare";

const HomePage = () => {
	return (
		<>
		<Header/>
     	<HeroHome/>
		<SearchBox />
		<HomepageGrid />
		<Compare/>
		<SearchAndCompare/>
		<Footer />
		</>
	)

}

export default HomePage;
