import Select from "react-select";
import React, { useState } from "react";
import getCities from "../api/getCities";
import AsyncSelect from "react-select/async";
import "../styles/SearchBox.css?v=4";

const SearchBox = () => {
  const [cityValue, setCityValue] = useState(null);
  const [bedroomValue, setBedroomValue] = useState(null);

  const handleCityChange = (selectedOption) => {
    setCityValue(selectedOption);
  };

  const handleBedroomChange = (selectedOption) => {
    setBedroomValue(selectedOption);
  };

  const handleSearch = () => {
    // Do something with the selected city and bedroom values
    console.log("Selected city:", cityValue);
    console.log("Selected bedroom:", bedroomValue);
  };

  const fetchData = () => {
    return getCities.get("/cities").then((result) => {
      const res = result.data.response;
      return res;
    });
  };

  return (
    <div className="searchBox-container">
      <div className="search-container">
        <div className="select-container">
          <Select
            value={cityValue}
            onChange={handleCityChange}
            options={[
              { value: "New York", label: "New York" },
              { value: "Los Angeles", label: "Los Angeles" },
              { value: "Chicago", label: "Chicago" },
              { value: "Houston", label: "Houston" },
              { value: "Phoenix", label: "Phoenix" },
            ]}
            placeholder="Search by city..."
            className="select"
          />
        </div>
        <div className="select-container">
          <Select
            value={bedroomValue}
            onChange={handleBedroomChange}
            options={[
              { value: "1", label: "1 Bedroom" },
              { value: "2", label: "2 Bedrooms" },
              { value: "3", label: "3 Bedrooms" },
              { value: "4", label: "4+ Bedrooms" },
            ]}
            placeholder="Any bedroom..."
            className="select"
          />
        </div>
        <button onClick={handleSearch} className="find-homes-button">
          Find Homes
        </button>
      </div>
    </div>
  );
};

export default SearchBox;

