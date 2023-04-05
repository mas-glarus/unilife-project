import { createContext, useEffect, useState } from "react";


export const CityContext = createContext();

const CityContextProvider = ({ children }) => {

    const [cityinfo, setcityinfo] = useState([]);
    const [properties, setProperties] = useState([]);
   
    useEffect(() => {

            fetch('https://unilife-server.herokuapp.com/cities?limit=20')
            .then(arr=> arr.json())
            .then((res) => setcityinfo(res.response));
        
        }, [])

    
    console.log(cityinfo);
  

  
    return (
        <CityContext.Provider value={{ cityinfo, setcityinfo }}>
            {children}
        </CityContext.Provider>
    )
}

export default CityContextProvider;


