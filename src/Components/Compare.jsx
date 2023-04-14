import React from "react";
import searchImg from "../assets/search.png"
import compareImg from "../assets/compare.png"
import billsImg from "../assets/bills.png"

import CompareStyles from "../styles/CompareStyles.css";

const Compare = () => {
	return (
		<section className="compare">
			<div className="compare-container">
				<h3>Compare all inclusive student homes</h3>
				<div className="compare-details">
					<div className="compare-search">
						<img src={searchImg} />
						<h4>Search</h4>
						<p>Find your dream home in the perfect area near your university</p>
					</div>
					<div className="compare-compare">
						<img src={compareImg} />
						<h4>Compare</h4>
						<p>Compare student accommodation to find the right home for you</p>
					</div>
					<div className="compare-bills">
						<img src={billsImg} />
						<h4>Bills Included</h4>
						<p>
							Bills are included in all rent prices. <br /> No hidden fees.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Compare;
