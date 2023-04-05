import Select from "react-select";
import React, { useState, useContext } from "react";
import { CityContext } from "../Context/CityContext";
import {useNavigate} from 'react-router-dom';


import "../assets/searchbox.css";

const SearchBox = () => {
	const { cityinfo } = useContext(CityContext);

	const [inputValue, setValue] = useState("");
	const [selectedValue, setSelectedValue] = useState(null);

	//Navigation to cityDetails with an onClick on "find Homes" button
	const navigate = useNavigate();

	const navigateToDetails = () => {
	  // 👇️ navigate to /contacts
	  navigate('/cityDetails');
	};
	//-------------

	//handle input change event
	const handleInputChange = (value) => {
		setValue(value);
	};

	//handle selection
	const handleChange = (value) => {
		setSelectedValue(value);
	};

	return (
		<div>
			<div className="test-log">
				Selected Value: {JSON.stringify(selectedValue || {}, null, 2)}
			</div>
			<div className="search-container">
				<div className="select-container">
					<Select
						value={selectedValue}
						options={cityinfo.map((city) => {
							return { value: city._id, label: city.name };
						})}
						onInputChange={handleInputChange}
						onChange={handleChange}
						className="select"
						placeholder="Any City"
					/>
					<Select className="select" placeholder="Any Bedrooms" />
					<button onClick={navigateToDetails}>Find Homes</button>
				</div>
			</div>
		</div>
	);
};

export default SearchBox;
