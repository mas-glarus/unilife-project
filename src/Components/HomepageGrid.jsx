import { useContext } from "react";
import { CityContext } from "../Context/CityContext";
import HomepageGridItem from "./HomepageGridItem"

// HOMEPAGE-GRID
const HomepageGrid = () => {

    const { cityinfo } = useContext(CityContext);
	const cityinfo1 = cityinfo.slice(0, 9);

    return (
        <div>
            <h2>Student accommodations in our top cities</h2>
            <div className="Homepagegrid-container">
				{cityinfo1.map((city) => <HomepageGridItem city={city} key={city._id}/>)}
		    </div>	
        </div>
    )
}


export default HomepageGrid;