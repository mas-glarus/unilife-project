import { useContext } from "react";
import GridCityName from "../Components/GridCityName";
import { CityContext } from "../Context/CityContext";

const AllCities = () => {
	const { cityinfo } = useContext(CityContext)
	return (
		<div>
			<h1>All Cities Page</h1>
			<h2>Search by City</h2>
			<GridCityName />
		</div>
	);
};

export default AllCities;