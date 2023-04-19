import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBath, faBed, faHeart, faPoundSign} from "@fortawesome/free-solid-svg-icons";


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
            
            <div className="homedetailflex">
                <div className="big-img">
                    <img src={homedetails.images[0]}/>
                    <div className="small-img">
                        <img src={homedetails.images[1]}/>
                        <img src={homedetails.images[2]}/>
                        <img src={homedetails.images[3]}/>
                         
                    </div>
                </div>    
                <div className="homedetailbtns" >
                    <div className="homeinfoflex">
                        <address> {homedetails.address.street}, {homedetails.address.city}, {homedetails.address.postcode}</address>
                        <div className="homeinfocard">
                            <p>Bedrooms<br/><br/><span className="homedetailspan"><FontAwesomeIcon icon={faBed}/>  {homedetails.bedroom_count}</span></p>
                            <p>Bathrooms<br/><br/><span className="homedetailspan"><FontAwesomeIcon icon={faBath}/>  {homedetails.bathroom_count}</span></p>
                            <p>Property Type<br/><br/><span className="homedetailspan">{homedetails.property_type}</span></p>
                            <p>Price<br/><br/><span className="homedetailspan"><FontAwesomeIcon icon={faPoundSign}/> {homedetails.rent}</span></p>
                            <p>Furnished type<br/><br/><span className="homedetailspan">{homedetails.furnished}</span></p>
                            <p>Available from<br/><br/><span className="homedetailspan">{homedetails.availability}</span></p>
                        </div>
                    </div>
                    <div className="btns"><button><FontAwesomeIcon icon={faHeart}/>  Shortlist</button><button className="btnblue">Book a Wiewing</button></div>
                </div>
            </div> 
            
            )}
        </>
    )
}

export default HomeDetailGrid;