import React from "react";
import selectionImg from "../assets/bestSelection.png";
import heartImg from "../assets/heart.png";
import menImg from "../assets/men.png";

import "../styles/SearchAndCompareStyles.css";

const SearchAndCompare = () => {
	return (
		<section className="search-and-compare">
			<div className="search-and-compare-container">
				<div className="information">
					<div className="selection">
						<div>
							<img src={selectionImg} />
						</div>
						<div>
							<h3>Best selection</h3>
							<p>
								Best selection of student accommodations. <br />
								Never been easier to find a home that's right for you.
							</p>
						</div>
					</div>
					<div className="favorite">
						<div>
							<img src={heartImg} />
						</div>
						<div>
							<h3>Your favorite</h3>
							<p>
								Shortlist your favorite properties and send enquiries in one
								click
							</p>
						</div>
					</div>
					<button>Search & Compare</button>
				</div>
				<div className="banner">
					<img src={menImg} />
				</div>
			</div>
		</section>
	);
};

export default SearchAndCompare;
