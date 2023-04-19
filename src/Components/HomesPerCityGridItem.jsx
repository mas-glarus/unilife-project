import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBath, faBed, faHouse, faLocationDot, faPoundSign} from "@fortawesome/free-solid-svg-icons";

const HomesPerCityGridItem = ({property}) => {
    
    const random = Math.floor(Math.random() * 2) + 1;

    return(
        <div className="cityhomesdetails">
            <img src={property.images[random]}/>
            <div className="pricebedbathflex">
                <span> <FontAwesomeIcon icon={faPoundSign}/>{property.bedroom_prices.bedroom_one}<br/>pppw including bills</span>
                
                <div className="bedbathflex">
                    <span><FontAwesomeIcon icon={faBed}/>  {property.bedroom_count}</span>
                    <span><FontAwesomeIcon icon={faBath}/>  {property.bathroom_count}</span>
                </div>
            </div>
            <div className="furnished">
                <div className="type-furnished">
                    <span>{property.property_type}</span><span>{property.furnished}</span>
                </div>
                <address><FontAwesomeIcon icon={faLocationDot}/> {property.address.street}, { property.address.city }, {property.address.postcode}</address>

            </div>
            <Link to={"../homeDetails/" + property._id}><button>
            <FontAwesomeIcon icon={faHouse}/> View Home
            </button></Link>
        </div>

    )
}

export default HomesPerCityGridItem;