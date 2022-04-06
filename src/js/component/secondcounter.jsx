import React from "react";

const SecondCounter = (props) => {
	return (
		<div className="row">
			<div
				style={{ width: "2rem", height: "2.5rem" }}
				className="bg-dark text-white m-2">
				{props.seconds}
			</div>
		</div>
	);
};

export default SecondCounter;
