import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";


const HomesPerCityGridItem = ({property}) => {
    
    const random = Math.floor(Math.random() * 2) + 1;

    return(
        <div className="cityhomesdetails">
            <img src={property.images[random]}/>
            <div className="pricebedbathflex">
                <span> ${property.bedroom_prices.bedroom_one}<br/>pppw including bills</span>
                
                <div className="bedbathflex">
                    <span>{property.bedroom_count}</span>
                    <span>{property.bathroom_count}</span>
                </div>
            </div>
            <div className="furnished">
                <div >
                    <span>{property.property_type}</span><span>{property.furnished}</span></div>
                <address>{property.address.street}, { property.address.city }, {property.address.postcode}</address>

            </div>
            <Link to={"../homeDetails/" + property._id}><button>
                View Home
            </button></Link>
        </div>

    )
}

export default HomesPerCityGridItem;