import Select from "react-select";
import React, { useState } from "react";
import getCities from "../api/getCities";
import AsyncSelect from "react-select/async";

import "../assets/searchbox.css";

const SearchBox = () => {
	const [inputValue, setValue] = useState("");
	const [selectedValue, setSelectedValue] = useState(null);

	//handle input change event
	const handleInputChange = (value) => {
		setValue(value);
	};

	//handle selection
	const handleChange = (value) => {
		setSelectedValue(value);
	};

	const fetchData = () => {
		return getCities.get("/cities").then((result) => {
			const res = result.data.response;
			return res;
		});
	};

	return (
		<div>
			<h1>Searchbox</h1>
			<div className="test-log">
				Selected Value: {JSON.stringify(selectedValue || {}, null, 2)}
			</div>
			<div className="search-container">
				<div className="select-container">
					<AsyncSelect
						cacheOptions
						defaultOptions
						value={selectedValue}
						getOptionLabel={(e) => e.name}
						getOptionValue={(e) => e._id}
						loadOptions={fetchData}
						onInputChange={handleInputChange}
						onChange={handleChange}
						className="select"
					/>
				</div>
			</div>

		</div>
	);
};

export default SearchBox;
