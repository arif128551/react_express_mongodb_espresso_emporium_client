import React, { use } from "react";
import addCoffeeBg from "../../assets/add-coffee/add-coffee-bg.jpg";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router";
import { AuthContext } from "../../assets/contexts/AuthContext";
import Swal from "sweetalert2";
const ForgetPassword = () => {
	const { resetPasswordRequest } = use(AuthContext);
	const handleResetPasswordRequest = (e) => {
		e.preventDefault();
		const email = e.target.email.value;
		resetPasswordRequest(email)
			.then(() => {
				Swal.fire({
					position: "top-end",
					icon: "success",
					title: "Check your inbox for the password reset link.",
					showConfirmButton: false,
					timer: 1500,
				});
				setTimeout(() => {
					window.open("https://mail.google.com", "_blank");
				}, 1500);
			})
			.catch((error) => {
				if (error.code === "auth/user-not-found") {
					Swal.fire({
						position: "top-end",
						icon: "error",
						title: "No account found with this email.",
						showConfirmButton: false,
						timer: 1500,
					});
				} else if (error.code === "auth/invalid-email") {
					Swal.fire({
						position: "top-end",
						icon: "error",
						title: "Invalid email format.",
						showConfirmButton: false,
						timer: 1500,
					});
				} else {
					Swal.fire({
						position: "top-end",
						icon: "error",
						title: "Something went wrong. Try again later.",
						showConfirmButton: false,
						timer: 1500,
					});
				}
			});
	};
	return (
		<div
			className="bg-top bg-no-repeat lg:pt-14 lg:pb-28 py-10 px-4"
			style={{ backgroundImage: `url(${addCoffeeBg})` }}
		>
			<div className="container max-w-7xl mx-auto">
				<Link to={"/"} className="flex gap-2 items-center font-rancho">
					<FaArrowLeftLong color="#331A15" /> <span className="text-3xl">Back to home</span>
				</Link>
				<div className="mt-12 bg-cf5f4f1 lg:py-18 lg:px-28 sm:p-10 p-5 rounded-md">
					<h1 className="text-5xl text-center mb-6">Forget Password</h1>

					<form className="flex flex-col gap-5" onSubmit={handleResetPasswordRequest}>
						<fieldset className="fieldset">
							<label className="label text-xl font-semibold text-c1b1a1a">Email</label>
							<input name="email" type="email" className="input w-full" placeholder="Enter your email" />
						</fieldset>
						<button
							type="submit"
							className="bg-cd2b48c border-2 border-c331a15 w-full text-2xl p-2 rounded-md cursor-pointer"
						>
							Reset password request
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ForgetPassword;
