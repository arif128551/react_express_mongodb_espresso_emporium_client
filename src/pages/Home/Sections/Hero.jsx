import React from "react";
import heroBg from "../../../assets/hero-bg.jpg";
const Hero = () => {
	return (
		<div className="bg-cover bg-no-repeat bg-center px-4" style={{ backgroundImage: `url(${heroBg})` }}>
			<div className="container max-w-7xl mx-auto flex lg:justify-end justify-center  md:min-h-[700px] items-center text-white py-14 text-center lg:text-left">
				<div className="max-w-[724px]">
					<h1 className="text-[55px]">Would you like a Cup of Delicious Coffee?</h1>
					<p className="text-base">
						It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every
						moment!!! Enjoy the beautiful moments and make them memorable.
					</p>
					<button className="text-2xl bg-ce3b577 py-2.5 px-6 cursor-pointer mt-8">Learn More</button>
				</div>
			</div>
		</div>
	);
};

export default Hero;
