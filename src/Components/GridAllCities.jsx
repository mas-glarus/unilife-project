import { useContext } from "react"
import { CityContext } from "../Context/CityContext"
import CityName from "./CityName";
import '../styles/AllCitiesGrid.css';

// GRID OF ALL CITIES
const GridAllCities = () => {

    // // Extract first 24 cities
    // const limitedCityInfo = cityinfo.slice(0, 24);

    const { cityinfo } = useContext(CityContext);

    return (
        <div className="allcities">
            <h2>Search by city</h2>
            <div className="grid-allcities-name">
            {cityinfo.map((city) => <CityName city={city} key={city._id}/> )}
            </div>				
		</div>
    )
}

export default GridAllCities;
