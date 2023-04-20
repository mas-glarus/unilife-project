// import { createContext, useContext, useEffect, useState } from "react"
// import { CityContext } from "./CityContext";
// import { useParams } from "react-router-dom";


// export const PropertiesContext = createContext();

// const PropertiesContextProvider = ({children}) => {

//     const [properties, setProperties] = useState([]);
//     const { cityinfo } = useContext(CityContext)
//     const { id } = useParams();
//     useEffect (() => {
//         fetch(`https://unilife-server.herokuapp.com/properties/city/${id}`)
//         .then( arr => arr.json())
//         .then((res) => setProperties(res.data))
//     }, [])
//     console.log(properties);

//     return (
//         <PropertiesContext.Provider value={{properties, setProperties}}>
//             {children}
//         </PropertiesContext.Provider>
//     )
// }

// export default PropertiesContextProvider;