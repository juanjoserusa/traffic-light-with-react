import React, { useState } from "react";


function Traffic () {

    const [ selectedColor, setSelectedColor ] = useState("red");

	return (
<div className="container d-flex justify-content-center ">
<div onClick ={() => setSelectedColor("yellow")}><button type="button" class="btn btn-primary btn-lg d-flex justify-content-center">Traffic light disco</button></div>
		<div className="traffic-light">
			<div onClick ={() => setSelectedColor("red")} className={"light red" + (selectedColor === "red" ? " glow" : "")}></div>
			<div onClick ={() => setSelectedColor("yellow")} className={"light yellow" + (selectedColor === "yellow" ? " glow" : "")}></div>
			<div onClick ={() => setSelectedColor("green")} className={"light green" + (selectedColor === "green" ? " glow" : "")}></div>	
		</div>
</div>	
	);

}

export default Traffic