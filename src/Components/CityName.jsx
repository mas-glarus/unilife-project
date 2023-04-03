import { useContext } from "react"
import { CityContext } from "../Context/CityContext";


const CityName = ({city}) => {

    return (
        <div className="grid-city-item">{city.name}</div>
    )
}

export default CityName;