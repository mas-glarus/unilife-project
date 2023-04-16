import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const HomeDetailGrid = () => {

    const { idProp } = useParams();

    console.log(idProp);

    const [homedetails, sethomedetails] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (idProp !== undefined) {
          setIsLoading(true);
          fetch(`https://unilife-server.herokuapp.com/properties/${idProp}`)
            .then(arr => arr.json())
            .then((res) => {
              sethomedetails(res);
              setIsLoading(false);
            })
        }
      }, [idProp]);
    const random1 = Math.floor(Math.random() * 2) + 1;
    
    console.log(homedetails)


   
    return (
       <>
        {isLoading ? (<p>Cargando...</p>
        ) : (
            <div>
                <div className="homedetailflex">
                    <div>
                        <img src={homedetails.images[random1]}/>
                        <div>

                        </div>
                    </div>
                <div className="homeinfoflex">
                    <address> {homedetails.address.street}, {homedetails.address.city}, {homedetails.address.postcode}</address>
                    <div className="homeinfocard">
                        <span>Bedrooms<br/>{homedetails.bedroom_count}</span>
                        <span>Bathrooms<br/>{homedetails.bathroom_count}</span>
                        <span>Property Type<br/>{homedetails.property_type}</span>
                        <span>Price<br/>{homedetails.rent}</span>
                        <span>Furnished type<br/>{homedetails.furnished}</span>
                        <span>Available from<br/>{homedetails.availability}</span>
                    </div>

                </div> 
                </div> 
            </div>
            )}
        </>
    )
}

export default HomeDetailGrid;