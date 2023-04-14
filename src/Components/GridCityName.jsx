import { useContext } from "react"
import { CityContext } from "../Context/CityContext"
import CityName from "./CityName";
import '../styles/AllCitiesGrid.css';

const GridCityName = () => {
    const { cityinfo } = useContext(CityContext);

    // Extract first 24 cities
    const limitedCityInfo = cityinfo.slice(0, 24);

    return (
        <>
        <div className="container">
            <h2>Search by City</h2>
            <div className="grid-city-name">
                {limitedCityInfo.map((city) => <CityName city={city} key={city._id}/> )}				
            </div>
        </div>
        </>
    )
}

export default GridCityName;
