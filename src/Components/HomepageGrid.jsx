import { useContext } from "react";
import { CityContext } from "../Context/CityContext";
import HomepageGridItem from "./HomepageGridItem";
import { Link } from "react-router-dom";

// HOMEPAGE-GRID
const HomepageGrid = () => {

    const { cityinfo } = useContext(CityContext);
	const cityinfo1 = cityinfo.slice(0, 9);

    return (
        <div className="allcitiesbtndiv">
            <h2>Student accommodations in our top cities</h2>
            <div className="Homepagegrid-container">
				{cityinfo1.map((city) => <HomepageGridItem city={city} key={city._id}/>)}
		    </div>
            <Link to='allcities'><button className="allcitiesbtn" >See all cities</button></Link>
        </div>
    )
}


export default HomepageGrid;