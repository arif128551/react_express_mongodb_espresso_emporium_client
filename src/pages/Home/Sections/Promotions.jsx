import React from "react";
import icon1 from "../../../assets/icons/1.png";
import icon2 from "../../../assets/icons/2.png";
import icon3 from "../../../assets/icons/3.png";
import icon4 from "../../../assets/icons/4.png";
const Promotions = () => {
	return (
		<div className="py-14 bg-ceceae3 px-4">
			<div className="container max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
				<div>
					<img className="mb-4" src={icon1} alt="Icon 1" />
					<h3 className="mb-2 text-4xl text-c331a15">Awesome Aroma</h3>
					<p className="text-c1b1a1a">You will definitely be a fan of the design & aroma of your coffee</p>
				</div>
				<div>
					<img className="mb-4" src={icon2} alt="Icon 1" />
					<h3 className="mb-2 text-4xl text-c331a15">High Quality</h3>
					<p className="text-c1b1a1a">We served the coffee to you maintaining the best quality</p>
				</div>
				<div>
					<img className="mb-4" src={icon3} alt="Icon 1" />
					<h3 className="mb-2 text-4xl text-c331a15">Pure Grades</h3>
					<p className="text-c1b1a1a">The coffee is made of the green coffee beans which you will love</p>
				</div>
				<div>
					<img className="mb-4" src={icon4} alt="Icon 1" />
					<h3 className="mb-2 text-4xl text-c331a15">Proper Roasting</h3>
					<p className="text-c1b1a1a">Your coffee is brewed by first roasting the green coffee beans</p>
				</div>
			</div>
		</div>
	);
};

export default Promotions;
