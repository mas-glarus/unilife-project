import { Link } from 'react-router-dom'
const CityName = ({city}) => {
    
    return (
        <Link to={"../cityDetails/"+ city._id}>
        <div className="grid-item-name">{city.name}</div>
        </Link>
    )
}

export default CityName;