import Select from "react-select";

import "../assets/searchbox.css";

const cities = [
	{ label: "Leeds", value: "Leeds" },
	{ label: "Newcastle", value: "Newcastle" },
	{ label: "Sheffield", value: "Sheffield" },
	{ label: "Southampton", value: "Southampton" },
	{ label: "Leicester", value: "Leicester" },
	{ label: "Brighton", value: "Brighton" },
];

const bedrooms = [
	{ label: "1", value: "one" },
	{ label: "2", value: "two" },
	{ label: "3", value: "three" },
	{ label: "4", value: "four" },
	{ label: "5", value: "five" },
	{ label: "6", value: "six" },
];

const SearchBox = () => {
	return (
		<div>
			<h1>Searchbox</h1>
			<div className="search-container">
				<div className="select-container">
					<Select
						className="select cities"
						options={cities}
						placeholder="Search by city"
					/>
					<Select
						className="select bedrooms"
						options={bedrooms}
						placeholder="Any bedroom"
					/>
				</div>
				<button>Find Homes</button>
			</div>
		</div>
	);
};

export default SearchBox;
