import { Link } from "react-router-dom";


const CityCard = ({city}) => {


    const imgurl = {
        backgroundImage: `url(${city.image_url})`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center`,
        backgroundSize: `cover`,

    } 

    return (
        <>
          <Link to='cityDetails'><div style={imgurl} className="grid-item">
                <h2>{city.name}<br/>{city.property_count} properties</h2>
            </div></Link>
        </>
    )
}

export default CityCard;