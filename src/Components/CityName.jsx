import { useContext } from "react"
import { CityContext } from "../Context/CityContext";
import '../styles/AllCitiesGrid.css';


const CityName = ({city}) => {
    const { setSelectedCity } = useContext(CityContext);
    const handleClick = () => {
        setSelectedCity(city);
    }
    
    return (
        <div className="grid-city-item" onClick={handleClick}>{city.name}</div>
    )
}

export default CityName;