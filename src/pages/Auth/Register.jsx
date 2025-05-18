import React, { use } from "react";
import addCoffeeBg from "../../assets/add-coffee/add-coffee-bg.jpg";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../assets/contexts/AuthContext";
import Swal from "sweetalert2";
const Register = () => {
	const { createUser, setUser, googleSignIn, setLoading } = use(AuthContext);
	const navigate = useNavigate();
	const handleRegister = (e) => {
		e.preventDefault();
		const form = e.target;
		const formData = new FormData(form);
		const { email, password, ...restFormData } = Object.fromEntries(formData.entries());
		if (password.length < 6) {
			Swal.fire({
				position: "top-end",
				icon: "error",
				title: "Password must be at least 6 characters long.",
				showConfirmButton: false,
				timer: 1500,
			});
			return;
		}

		if (!/[A-Z]/.test(password)) {
			Swal.fire({
				position: "top-end",
				icon: "error",
				title: "Password must contain at least one uppercase letter.",
				showConfirmButton: false,
				timer: 1500,
			});
			return;
		}

		if (!/[a-z]/.test(password)) {
			Swal.fire({
				position: "top-end",
				icon: "error",
				title: "Password must contain at least one lowercase letter.",
				showConfirmButton: false,
				timer: 1500,
			});
			return;
		}

		createUser(email, password)
			.then((userCredential) => {
				const user = userCredential.user;
				setUser(user);

				const userProfile = {
					email,
					...restFormData,
					creationTime: user?.metadata?.creationTime,
					lastSignInTime: user?.metadata?.lastSignInTime,
				};

				fetch("https://react-express-mongodb-espresso-emporium-server.vercel.app/users", {
					method: "POST",
					headers: {
						"content-type": "application/json",
					},
					body: JSON.stringify(userProfile),
				})
					.then((res) => res.json())
					.then((result) => {
						console.log("user data uploaded done ", result);
					});

				Swal.fire({
					position: "top-end",
					icon: "success",
					title: "Registration successful!",
					showConfirmButton: false,
					timer: 1500,
				});
				navigate("/");
			})
			.catch(() => {
				Swal.fire({
					position: "top-end",
					icon: "error",
					title: `Registration failed. Please provide valid information.`,
					showConfirmButton: false,
					timer: 1500,
				});
			})
			.finally(() => setLoading(false));
	};

	const handleGoogleBtnLogin = () => {
		googleSignIn()
			.then((result) => {
				const user = result.user;
				const { creationTime, lastSignInTime } = user.metadata;
				const userProfile = {
					email: user.email,
					creationTime,
					lastSignInTime,
				};
				fetch("https://react-express-mongodb-espresso-emporium-server.vercel.app/users", {
					method: "POST",
					headers: {
						"content-type": "application/json",
					},
					body: JSON.stringify(userProfile),
				})
					.then((res) => res.json())
					.then((data) => {
						if (data.status === "new") {
							Swal.fire({
								position: "top-end",
								icon: "success",
								title: "Account created successfully with Google! You're now logged in.",
								showConfirmButton: false,
								timer: 1500,
							});
						} else if (data.status === "existing") {
							const userMongoProfile = {
								email: user.email,
								lastSignInTime,
							};
							fetch("https://react-express-mongodb-espresso-emporium-server.vercel.app/users", {
								method: "PATCH",
								headers: {
									"content-type": "application/json",
								},
								body: JSON.stringify(userMongoProfile),
							})
								.then((res) => res.json())
								.then((result) => {
									console.log("PATCH result:", result);
								});

							Swal.fire({
								position: "top-end",
								icon: "success",
								title: "Welcome back! You've logged in with Google.",
								showConfirmButton: false,
								timer: 1500,
							});
						}
					});
				navigate("/");
			})
			.catch((error) => {
				const errorMessage = error.message;
				Swal.fire({
					position: "top-end",
					icon: "error",
					title: `${errorMessage}`,
					showConfirmButton: false,
					timer: 1500,
				});
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
					<h1 className="text-5xl text-center mb-6">Register</h1>
					<p className="text-center mb-8 max-w-[832px] mx-auto">Create your account to order a coffee.</p>
					<button
						onClick={handleGoogleBtnLogin}
						className="btn bg-white text-c180a33 border-[#e5e5e5] w-full rounded-lg text-xl"
					>
						<svg
							aria-label="Google logo"
							width="16"
							height="16"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512"
						>
							<g>
								<path d="m0 0H512V512H0" fill="#fff"></path>
								<path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
								<path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
								<path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
								<path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
							</g>
						</svg>
						Login with Google
					</button>
					<div className="flex items-center gap-4 my-6">
						<hr className="flex-grow border-t border-gray-300" />
						<span className="text-gray-500 text-sm font-medium">Or</span>
						<hr className="flex-grow border-t border-gray-300" />
					</div>
					<form className="flex flex-col gap-5" onSubmit={handleRegister}>
						<fieldset className="fieldset">
							<label className="label text-xl font-semibold text-c1b1a1a">Name</label>
							<input name="name" type="text" className="input w-full" placeholder="Enter your name" />
						</fieldset>
						<fieldset className="fieldset">
							<label className="label text-xl font-semibold text-c1b1a1a">Email</label>
							<input name="email" type="email" className="input w-full" placeholder="Enter your email" />
						</fieldset>
						<fieldset className="fieldset">
							<label className="label text-xl font-semibold text-c1b1a1a">Address</label>
							<input name="address" type="text" className="input w-full" placeholder="Enter your address" />
						</fieldset>
						<fieldset className="fieldset">
							<label className="label text-xl font-semibold text-c1b1a1a">Phone</label>
							<input name="phone" type="text" className="input w-full" placeholder="Enter your phone" />
						</fieldset>
						<fieldset className="fieldset">
							<label className="label text-xl font-semibold text-c1b1a1a">Photo URL</label>
							<input name="photo" type="text" className="input w-full" placeholder="Enter photo url" />
						</fieldset>
						<fieldset className="fieldset">
							<label className="label text-xl font-semibold text-c1b1a1a">Password</label>
							<input name="password" type="password" className="input w-full" placeholder="Enter your password" />
						</fieldset>
						<button
							type="submit"
							className="bg-cd2b48c border-2 border-c331a15 w-full text-2xl p-2 rounded-md cursor-pointer"
						>
							Create your account
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Register;
