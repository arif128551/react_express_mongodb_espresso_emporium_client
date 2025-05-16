import React from "react";
import { Link, NavLink } from "react-router";
import logoImg from "../assets/logo.png";
import headerBg from "../assets/header-bg.png";
const Navbar = () => {
	return (
		// <div className="bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${headerBg})` }}>
		// 	<div className="navbar container max-w-7xl mx-auto">
		// 		<div className="navbar-start">
		// 			<div className="dropdown">
		// 				<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
		// 					<svg
		// 						xmlns="http://www.w3.org/2000/svg"
		// 						className="h-5 w-5"
		// 						fill="none"
		// 						viewBox="0 0 24 24"
		// 						stroke="currentColor"
		// 					>
		// 						{" "}
		// 						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />{" "}
		// 					</svg>
		// 				</div>
		// 				<ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
		// 					<li>
		// 						<a>Item 1</a>
		// 					</li>
		// 					<li>
		// 						<a>Item 3</a>
		// 					</li>
		// 				</ul>
		// 			</div>
		// 			<Link className="flex gap-4 items-center">
		// 				<img src={logoImg} alt="Website Logo" />
		// 				<span className="text-white text-6xl font-rancho">Espresso Emporium</span>
		// 			</Link>
		// 		</div>
		// 		<div className="navbar-end hidden lg:flex">
		// 			<ul className="menu menu-horizontal px-1 text-white text-2xl">
		// 				<li>
		// 					<NavLink to="/">Home</NavLink>
		// 				</li>
		// 				<li>
		// 					<NavLink to={"/contact"}>Contact</NavLink>
		// 				</li>
		// 			</ul>
		// 		</div>
		// 	</div>
		// </div>

		<div className="bg-cover bg-center bg-no-repeat px-3 py-3" style={{ backgroundImage: `url(${headerBg})` }}>
			<div className="container max-w-7xl mx-auto flex justify-center items-center">
				<Link to={"/"} className="flex gap-4 items-center">
					<img src={logoImg} alt="Website Logo" />
					<span className="text-white md:text-5xl text-3xl font-rancho">Espresso Emporium</span>
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
