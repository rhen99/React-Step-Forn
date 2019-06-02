import React from "react";

export default function Review({ info, prevStep, nextStep }) {
	return (
		<React.Fragment>
			<div className="row">
				<div className="collection">
					<a href="#" className="collection-item">
						<strong>First Name: </strong> {info.firstName}
					</a>
					<a href="#" className="collection-item">
						<strong>Last Name: </strong> {info.lastName}
					</a>
					<a href="#" className="collection-item">
						<strong>Age: </strong> {info.age}
					</a>
					<a href="#" className="collection-item">
						<strong>Occupation: </strong> {info.occupation}
					</a>
					<a href="#" className="collection-item">
						{" "}
						<strong>City: </strong> {info.city}
					</a>
					<a href="#" className="collection-item">
						<strong>Stete: </strong> {info.state}
					</a>
				</div>
			</div>
			<button onClick={prevStep} className="btn-flat left">
				Back
			</button>
			<button onClick={nextStep} className="btn green right">
				Submit
			</button>
		</React.Fragment>
	);
}
