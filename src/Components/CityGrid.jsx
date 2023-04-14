import React, { useContext } from "react";
import { CityContext } from "../Context/CityContext";
import CityCard from "./CityCard";
import { Link } from "react-router-dom";
import '../styles/HomeCityGrid.css';

const CityGrid = () => {
  const { cityinfo } = useContext(CityContext);

  return (
    <div className="containerGridComponent">
      <h2>Student accommodations in our top cities</h2>
      <div className="grid-container">
        {cityinfo.slice(0, 9).map((city) => <CityCard city={city} key={city._id}/>)}
      </div>
      <Link to="/AllCities" className="see-all-button">See All Cities</Link>
    </div>	
  )
}

export default CityGrid;
