
import React from 'react';
import Header from '../Components/Header';
import { useParams } from 'react-router-dom';
import HomeDetailGrid from '../Components/HomeDetailGrid';
const HomeDetails = () => {

	return (
		<>
		<Header />
		<HomeDetailGrid />
		</>
	);
};

export default HomeDetails;
