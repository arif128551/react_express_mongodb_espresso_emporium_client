import React, { use } from "react";
import { Link } from "react-router";
import logoImg from "../assets/logo.png";
import headerBg from "../assets/header-bg.png";
import { AuthContext } from "../assets/contexts/AuthContext";
import { PiUserCircleFill } from "react-icons/pi";
import Swal from "sweetalert2";
const Navbar = () => {
	const { user, signOutUser } = use(AuthContext);
	const handleLogout = () => {
		signOutUser()
			.then(() => {
				Swal.fire({
					position: "top-end",
					icon: "success",
					title: `You’re now logged out. See you again soon!`,
					showConfirmButton: false,
					timer: 1500,
				});
			})
			.catch((error) => {
				Swal.fire({
					position: "top-end",
					icon: "error",
					title: `${error}`,
					showConfirmButton: false,
					timer: 1500,
				});
			});
	};
	return (
		<div className="bg-cover bg-center bg-no-repeat py-7 px-4" style={{ backgroundImage: `url(${headerBg})` }}>
			<div className="container max-w-7xl mx-auto">
				<div className="flex justify-between items-center flex-col sm:flex-row gap-4">
					<div>
						<Link className="flex gap-4 items-center justify-center md:justify-start">
							<img className="max-w-12 sm:w-auto" src={logoImg} alt="Website Logo" />
							<span className="text-white text-3xl lg:text-6xl font-rancho">Espresso Emporium</span>
						</Link>
					</div>
					<div className="flex gap-2 flex-wrap items-center">
						{user ? (
							<>
								{user.photoURL ? (
									<img
										src={user.photoURL}
										alt="Profile photo"
										className="w-10 h-10 rounded-full object-cover  cursor-pointer"
									/>
								) : (
									<PiUserCircleFill size={41} />
								)}
								<button
									onClick={handleLogout}
									className="text-2xl bg-ce3b577 px-5 py-1.5 cursor-pointer gap-2 border-2 border-c331a15 rounded-md  max-w-60"
								>
									Logout
								</button>
							</>
						) : (
							<>
								<Link
									to={"/login"}
									className="text-2xl bg-ce3b577 px-5 py-1.5 cursor-pointer gap-2 border-2 border-c331a15 rounded-md  max-w-60"
								>
									Login
								</Link>
								<Link
									to={"/register"}
									className="text-2xl bg-ce3b577 px-5 py-1.5 cursor-pointer gap-2 border-2 border-c331a15 rounded-md  max-w-60"
								>
									Register
								</Link>
							</>
						)}
					</div>
				</div>
			</div>
		</div>

		// <div className="bg-cover bg-center bg-no-repeat px-3 py-3" style={{ backgroundImage: `url(${headerBg})` }}>
		// 	<div className="container max-w-7xl mx-auto flex justify-center items-center">
		// 		<Link to={"/"} className="flex gap-4 items-center">
		// 			<img src={logoImg} alt="Website Logo" />
		// 			<span className="text-white md:text-5xl text-3xl font-rancho">Espresso Emporium</span>
		// 		</Link>
		// 	</div>
		// </div>
	);
};

export default Navbar;
