import React, { useState, useEffect } from "react";

const Home = () => {
	const [timer, setTimer] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setTimer((timer) => timer + 1);
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="row">
			<div
				style={{ width: "2rem", height: "2.5rem" }}
				className="bg-dark text-white m-2">
				{timer}
			</div>
			<div
				style={{ width: "2rem", height: "2.5rem" }}
				className="bg-dark text-white m-2">
				{timer}
			</div>
			<div
				style={{ width: "2rem", height: "2.5rem" }}
				className="bg-dark text-white m-2">
				{timer}
			</div>
			<div
				style={{ width: "2rem", height: "2.5rem" }}
				className="bg-dark text-white m-2">
				{timer}
			</div>
			<div
				style={{ width: "2rem", height: "2.5rem" }}
				className="bg-dark text-white m-2">
				{timer}
			</div>
		</div>
	);
};

export default Home;
