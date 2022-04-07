import React, { useState, useEffect } from "react";
import SecondCounter from "./secondcounter.jsx";

const Home = () => {
	const time = <i className="fas fa-clock"></i>;
	const [timer, setTimer] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setTimer((timer) => timer + 1);
		}, 1000);

		return () => clearInterval(interval);
	});

	return (
		<div className="container ">
			<div className="container shadow-sm bg-dark">
				<div className="row justify-content-center">
					<SecondCounter seconds={time} />
					<SecondCounter num={Math.floor((timer / 100000) % 10)} />
					<SecondCounter num={Math.floor((timer / 10000) % 10)} />
					<SecondCounter num={Math.floor((timer / 1000) % 10)} />
					<SecondCounter num={Math.floor((timer / 100) % 10)} />
					<SecondCounter num={Math.floor((timer / 10) % 10)} />
					<SecondCounter num={Math.floor((timer / 1) % 10)} />
				</div>
			</div>
		</div>
	);
};

export default Home;
