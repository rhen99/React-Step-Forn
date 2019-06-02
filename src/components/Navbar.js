import React from "react";

export default function Navbar({ step }) {
	switch (step) {
		case 1:
			return (
				<nav className="green">
					<div className="nav-wrapper">
						<div className="container">
							<span className="brand-logo">Personal Details</span>
						</div>
					</div>
				</nav>
			);
		case 2:
			return (
				<nav className="green">
					<div className="nav-wrapper">
						<div className="container">
							<span className="brand-logo">Work Details</span>
						</div>
					</div>
				</nav>
			);
		case 3:
			return (
				<nav className="green">
					<div className="nav-wrapper">
						<div className="container">
							<span className="brand-logo">Review Details</span>
						</div>
					</div>
				</nav>
			);
		case 4:
			return (
				<nav className="green">
					<div className="nav-wrapper">
						<div className="container">
							<span className="brand-logo">Success!</span>
						</div>
					</div>
				</nav>
			);
	}
}
