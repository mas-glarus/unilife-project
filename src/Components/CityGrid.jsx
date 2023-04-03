import { useContext } from "react";
import { CityContext } from "../Context/CityContext";
import CityCard from "./CityCard"


const CityGrid = () => {

    const { cityinfo } = useContext(CityContext);
	

    return (
        <div className="grid-container">
				  {cityinfo.map((city) => <CityCard city={city} key={city._id}/>)}
		    </div>	
    )
}


export default CityGrid;