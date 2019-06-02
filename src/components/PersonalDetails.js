import React from "react";

export default function PersonalDetails({
	info,
	handleChange,
	prevStep,
	nextStep,
}) {
	return (
		<React.Fragment>
			<div className="row">
				<div className="col s6 input-field">
					<input
						type="text"
						onChange={e => handleChange(e.target.name, e.target.value)}
						name="firstName"
						id="first_name"
						defaultValue={info.firstName}
					/>
					<label htmlFor="first_name">First Name</label>
				</div>
				<div className="col s6 input-field">
					<input
						type="text"
						onChange={e => handleChange(e.target.name, e.target.value)}
						defaultValue={info.lastName}
						name="lastName"
						id="last_name"
					/>
					<label htmlFor="last_name">Last Name</label>
				</div>
				<div className="col s12 input-field">
					<input
						type="number"
						onChange={e => handleChange(e.target.name, e.target.value)}
						defaultValue={info.age}
						min="18"
						name="age"
						id="age"
					/>
					<label htmlFor="age">Age</label>
				</div>
				<div className="col s12 input-field">
					<input
						type="text"
						name="bio"
						id="bio"
						defaultValue={info.bio}
						onChange={e => handleChange(e.target.name, e.target.value)}
					/>
					<label htmlFor="bio">Bio</label>
				</div>
			</div>
			<button onClick={nextStep} className="btn green right">
				Next
			</button>
		</React.Fragment>
	);
}
