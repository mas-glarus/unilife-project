import { useContext } from "react"
import { CityContext } from "../Context/CityContext"
import CityName from "./CityName";

const GridCityName = () => {

const {cityinfo} = useContext(CityContext);


    return (
        <div className="grid-city-name">
            {cityinfo.map((city) => <CityName city={city} key={city._id}/> )}				
		</div>
    )
}

export default GridCityName;