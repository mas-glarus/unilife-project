import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBath, faBed, faCheck, faHeart, faPoundSign} from "@fortawesome/free-solid-svg-icons";


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
        ) : (<>
            <Link to={"/cityDetails/" + homedetails.city_id._id }><button>Back to search</button></Link>
            <div className="homedetailflex">
                <div className="img">
                    <img src={homedetails.images[0]}/>
                    <img src={homedetails.images[1]}/>
                    <img src={homedetails.images[2]}/>
                    <img src={homedetails.images[3]}/>
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
            <div className="homedetail-flex">
                <div className="homedetail-desc">
                    <h3>Description</h3>
                    <p>{homedetails.property_description}</p>
                </div>
                <div className="homedetail-bedroomprices">
                    <h3>Bedroom Prices</h3>
                    <div className="homedetail-table">
                        <div><span>Bedroom 1</span><span><FontAwesomeIcon icon={faPoundSign}/> {homedetails.bedroom_prices.bedroom_one}</span></div><hr></hr>
                        <div><span>Bedroom 2</span><span><FontAwesomeIcon icon={faPoundSign}/> {homedetails.bedroom_prices.bedroom_two}</span></div><hr></hr>
                        <div><span>Bedroom 3</span><span><FontAwesomeIcon icon={faPoundSign}/> {homedetails.bedroom_prices.bedroom_three}</span></div><hr></hr>
                        <div><span>Bedroom 4</span><span><FontAwesomeIcon icon={faPoundSign}/> {homedetails.bedroom_prices.bedroom_four}</span></div><hr></hr>
                        <div><span>Bedroom 5</span><span><FontAwesomeIcon icon={faPoundSign}/> {homedetails.bedroom_prices.bedroom_five}</span></div>
                    </div>
                </div>
                <div className="homedetail-keyfeatures">
                    <h3>Key Features</h3>
                    <ul>
                        <li>{homedetails.key_features[0]} <FontAwesomeIcon icon={faCheck}/></li>
                        <li>{homedetails.key_features[1]} <FontAwesomeIcon icon={faCheck}/></li>
                        <li>{homedetails.key_features[2]} <FontAwesomeIcon icon={faCheck}/></li>
                        <li>{homedetails.key_features[3]} <FontAwesomeIcon icon={faCheck}/></li>
                        <li>{homedetails.key_features[4]} <FontAwesomeIcon icon={faCheck}/></li>
                    </ul>
                </div>
            </div>
            </>
            )}
        </>
    )
}

export default HomeDetailGrid;