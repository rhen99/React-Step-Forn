import React from "react";

export default function WorkDetails({
	info,
	handleChange,
	prevStep,
	nextStep,
}) {
	return (
		<React.Fragment>
			<div className="row">
				<div className="col s12 input-field">
					<input
						type="text"
						onChange={e => handleChange(e.target.name, e.target.value)}
						defaultValue={info.occupation}
						name="occupation"
						id="occupatiom"
					/>
					<label htmlFor="age">Occupation</label>
				</div>
				<div className="col s12 input-field">
					<input
						type="text"
						defaultValue={info.city}
						name="city"
						id="city"
						onChange={e => handleChange(e.target.name, e.target.value)}
					/>
					<label htmlFor="city">City</label>
				</div>
				<div className="col s12 input-field">
					<input
						type="text"
						name="state"
						id="state"
						defaultValue={info.state}
						onChange={e => handleChange(e.target.name, e.target.value)}
					/>
					<label htmlFor="city">State</label>
				</div>
			</div>
			<button onClick={prevStep} className="btn-flat left">
				Back
			</button>
			<button onClick={nextStep} className="btn green right">
				Next
			</button>
		</React.Fragment>
	);
}
