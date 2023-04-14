import { createContext, useEffect, useState } from "react";

export const CityContext = createContext();

const CityContextProvider = ({ children }) => {
  const [cityinfo, setcityinfo] = useState([]);
  const [cityinfo1, setcityinfo1] = useState([]);

  useEffect(() => {
    fetch("https://unilife-server.herokuapp.com/cities?page=1")
      .then((res) => res.json())
      .then((data) => setcityinfo(data.response));

    fetch("https://unilife-server.herokuapp.com/cities?page=2")
      .then((res) => res.json())
      .then((data) => setcityinfo1(data.response));
  }, []);

  console.log(cityinfo);
  console.log(cityinfo1);

  return (
    <CityContext.Provider value={{ cityinfo, setcityinfo }}>
      {children}
    </CityContext.Provider>
  );
};

export default CityContextProvider;
