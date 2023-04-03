import { createContext, useEffect, useState } from "react";


export const CityContext = createContext();

const CityContextProvider = ({ children }) => {

    const [cityinfo, setcityinfo] = useState([]);
    const [cityinfo1, setcityinfo1] = useState([]);
    // const url = ;
   
    useEffect(() => {

            fetch('https://unilife-server.herokuapp.com/cities?page=1')
            .then(arr=> arr.json())
            .then((res) => setcityinfo(res.response));
        

            fetch('https://unilife-server.herokuapp.com/cities?page=2')
            .then(arr2=> arr2.json(arr2))
            .then((res2) => setcityinfo1(res2.response));

    
    }, [])

    console.log(cityinfo);
    console.log(cityinfo1);

  
    return (
        <CityContext.Provider value={{ cityinfo, setcityinfo }}>
            {children}
        </CityContext.Provider>
    )
}

export default CityContextProvider;



