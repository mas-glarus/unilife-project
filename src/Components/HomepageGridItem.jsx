import { Link } from "react-router-dom";
import '../styles/HomeCityGrid.css';


const HomepageGridItem = ({city}) => {


    const imgurl = {
        backgroundImage: `url(${city.image_url})`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center`,
        backgroundSize: `cover`,
        textDecoration: 'none'
    } 

    return (
        <>
          <Link to={"cityDetails/"+ city._id}><div style={imgurl} className="Homepagegrid-item">
                <h2>{city.name}<br/>{city.property_count} properties</h2>
            </div></Link>
        </>
    )
}

export default HomepageGridItem;
