import { useContext } from "react"
import { CityContext } from "../Context/CityContext"
import CityName from "./CityName";

// GRID OF ALL CITIES
const GridAllCities = () => {

const {cityinfo} = useContext(CityContext);


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