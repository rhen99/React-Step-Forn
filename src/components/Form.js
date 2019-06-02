import React from "react";
import PersonalDetails from "./PersonalDetails";
import WorkDetails from "./WorkDetails";
import Review from "./Review";
import Success from "./Success";

export default function Form({ info, step, handleChange, prevStep, nextStep }) {
	switch (step) {
		case 1:
			return (
				<PersonalDetails
					info={info}
					handleChange={handleChange}
					prevStep={prevStep}
					nextStep={nextStep}
				/>
			);
		case 2:
			return (
				<WorkDetails
					info={info}
					handleChange={handleChange}
					prevStep={prevStep}
					nextStep={nextStep}
				/>
			);
		case 3:
			return <Review info={info} prevStep={prevStep} nextStep={nextStep} />;
		case 4:
			return <Success />;
	}
}
