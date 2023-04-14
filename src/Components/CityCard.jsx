import { Link } from "react-router-dom";
import '../styles/HomeCityGrid.css';


const CityCard = ({city}) => {


    const imgurl = {
        backgroundImage: `url(${city.image_url})`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center`,
        backgroundSize: `cover`,
        textDecoration: 'none'
    } 

    return (
        <>
          <Link to='cityDetails'><div style={imgurl} className="grid-item">
                <h2 style={{ background: 'none' }}>{city.name}<br/>{city.property_count} properties</h2>
            </div></Link>
        </>
    )
}

export default CityCard;
