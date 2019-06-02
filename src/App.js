import React, { useState } from "react";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
	const [info, setInfo] = useState({
		firstName: "",
		lastName: "",
		age: "18",
		bio: "",
		occupation: "",
		city: "",
		state: "",
	});

	const [step, setStep] = useState(1);

	const handleChange = (name, value) => {
		setInfo({ ...info, [name]: value });
	};
	const nextStep = () => setStep(step + 1);
	const prevStep = () => setStep(step - 1);
	return (
		<div className="App">
			<Navbar step={step} />
			<div className="container margin-top">
				<form className="col s12">
					<Form
						step={step}
						info={info}
						handleChange={handleChange}
						prevStep={prevStep}
						nextStep={nextStep}
					/>
				</form>
			</div>
		</div>
	);
}

export default App;
