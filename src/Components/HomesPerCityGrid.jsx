import { useContext, useState, useEffect } from "react";
import { CityContext } from "../Context/CityContext";
import HomesPerCityGridItem from "./HomesPerCityGridItem";
import { useParams } from "react-router-dom";


const HomesPerCityGrid = () => {

    const { id } = useParams();

    const [properties, setProperties] = useState([]);

    if (id !== undefined) {

        useEffect(() => {
            fetch(`https://unilife-server.herokuapp.com/properties/city/${id}`)
            .then(arr => arr.json())
            .then((res) => setProperties(res.response))
        }, [id])

    }

    console.log(properties);
    return (

        <div className='grid-container-properties'>
        {properties.map((property) => <HomesPerCityGridItem property={property} key={property._id} /> )} 
    </div>
    )
}

export default HomesPerCityGrid;