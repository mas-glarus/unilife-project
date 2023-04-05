import Select from "react-select";
import React, { useState, useContext } from "react";

import "../assets/searchboxdetailpage.css";

const sampleData = [
	{
		_id: "633d453061f49f86a21caa10",
		city_id: "633a96b96893d471a68cc891",
		key_features: [
			"Modern Quartz Counter Tops",
			"Remodelled Bathrooms",
			"Two Reception Rooms",
			"Lift & Secure Entrance",
			"City Centre Location",
		],
		property_type: "Detached",
		property_description:
			"We are proud to bring to the market this well presented home in Newcastle. This home is perfect for professionals or students for high quality, City Centre living. Recently remodeled and tastefully furnished in true Newcastle fashion, this awesome home boasts a unique charm, with many of the original features and woodwork from its over-a-century-year-old building still intact.",
		bedroom_count: 4,
		bathroom_count: 2,
		deposit: 700,
		rent: 800,
		availability: "December",
		address: {
			street: "Keesey Street",
			city: "Newcastle",
			postcode: "NS6 2AE",
		},
		images: [
			"http://res.cloudinary.com/blackeagle4894/image/upload/v1617840993/wzzppjcc8usmohnbwjpq.jpg",
			"http://res.cloudinary.com/blackeagle4894/image/upload/v1617840997/rdsj2xt51tlt6rhmc7ve.jpg",
			"http://res.cloudinary.com/blackeagle4894/image/upload/v1617841000/dxhussdtiomttecbgmtf.jpg",
			"http://res.cloudinary.com/blackeagle4894/image/upload/v1617841002/liyinvzeeh3kqi1fuu17.jpg",
		],
		furnished: "Unfurnished",
		bedroom_prices: {
			bedroom_one: 200,
			bedroom_two: 200,
			bedroom_three: 200,
			bedroom_four: 200,
		},
		__v: 0,
		createdAt: "2022-10-05T08:49:52.082Z",
		updatedAt: "2022-10-05T08:49:52.082Z",
	},
];

const SearchBoxDetailPage = () => {
	return (
		<div>
			<div className="search-container">
				<div className="select-container">
					<div className="bedroom-container">
						<label for="select-bedroom">
							Any bedroom:
							<Select
								id="select-bedroom"
								placeholder="Any bedroom"
								options={sampleData.map((property) => {
									return {
										value: property.bedroom_count,
										label: property.bedroom_count,
									};
								})}
							/>
						</label>
					</div>
					<div className="bathroom-container">
						<label for="select-bathroom">
							Any bathroom:
							<Select
								id="select-bathroom"
								placeholder="Any bathroom"
								options={sampleData.map((property) => {
									return {
										value: property.bathroom_count,
										label: property.bathroom_count,
									};
								})}
							/>
						</label>
					</div>
					<div className="price-container">
						<label for="select-price">
							Any price:
							<Select
								id="select-price"
								placeholder="Any price"
								options={sampleData.map((property) => {
									return { value: property.rent, label: property.rent };
								})}
							/>
						</label>
					</div>
					<div className="type-container">
						<label for="select-type">
							Any type:
							<Select
								id="select-type"
								placeholder="Any type"
								options={sampleData.map((property) => {
									return {
										value: property.property_type,
										label: property.property_type,
									};
								})}
							/>
						</label>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SearchBoxDetailPage;
