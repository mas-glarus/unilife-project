
import { Link } from "react-router-dom";
import CityGrid from "../Components/CityGrid";


 

const HomePage = () => {

	
	return (
		<div >
			<h1>HOMEPAGE</h1>
			<h2>Student accomodations in our top cities</h2>
			<CityGrid />
			<Link to='allcities'><button className="allcitiesbtn" >See all cities</button></Link>
		</div>
	);
	
};


export default HomePage;
