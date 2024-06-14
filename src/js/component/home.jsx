import React from "react";
import { Jumbotron } from "./jumbotron";
import { Card } from "./Card.jsx";

//include images into your bundle
import playstation from "../../img/Playstation2.png"
import nintendo from "../../img/Nintendo.png"
import xbox from "../../img/X-box.png"
import steam from "../../img/Steam.png"
//create your first component
const Home = () => {

	return (
		<div>
			<Jumbotron />
			<div className="container-fluid">
				<div className="container">
					<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 g-2 text-center my-2 justify-content-center">
						<Card image={playstation} tittle={"Playstation"} description={"This console was made by Sony"} textButton={"Learn more"} />
						<Card image={xbox} tittle={"X-Box"} description={"This console was made by Microsoft"} textButton={"Learn more"} />
						<Card image={nintendo} tittle={"Swtich"} description={"This console was made by Nintendo"} textButton={"Learn more"} />
						<Card image={steam} tittle={"Steam Deck"} description={"This console was made by Steam"} textButton={"Learn more"} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;

