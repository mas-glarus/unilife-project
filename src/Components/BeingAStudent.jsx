import React from "react";
import groupFoto from "../assets/groupfoto.png";

import BeingAStudentStyles from "../styles/BeingAStudentStyles.css";

const BeingAStudent = () => {
	return (
		<section>
			<div className="container">
				<div className="text">
					<h3>Being a student in "city"</h3>
					<p>
						Aliquip culpa qui voluptate amet veniam id excepteur eiusmod magna.
						Aliquip consequat ut incididunt dolore dolor excepteur est.
						Cupidatat magna cillum dolore ex laborum sit magna nulla. Consequat
						ad ipsum adipisicing cillum ea minim nostrud esse. Nisi excepteur
						officia pariatur tempor Lorem enim. Ad sint dolor laborum mollit
						commodo adipisicing labore est. Esse nisi pariatur adipisicing do
						sunt consequat in veniam laborum et excepteur id.
					</p>
					<p>
						Amet excepteur ex cillum aliqua cillum quis ullamco excepteur fugiat
						mollit. Magna aliqua sit ex tempor voluptate ipsum excepteur amet in
						consectetur laboris. Quis eu amet adipisicing id dolor exercitation.
						Voluptate anim labore nostrud non nostrud eiusmod labore tempor ea
						duis do magna mollit. Minim ea laborum enim ipsum anim.
					</p>
				</div>
				<div className="groupfoto">
					<img src={groupFoto} />
				</div>
			</div>
		</section>
	);
};

export default BeingAStudent;
