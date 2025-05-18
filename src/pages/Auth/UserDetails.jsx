import React from "react";
import { Link, useLoaderData } from "react-router";
import addCoffeeBg from "../../assets/add-coffee/add-coffee-bg.jpg";
import { FaArrowLeftLong } from "react-icons/fa6";
const UserDetails = () => {
	const { _id, name, address, phone, photo } = useLoaderData();
	const handleUpdateUserDetails = (e) => {
		e.preventDefault();
		const form = e.target;
		const formData = new FormData(form);
		const formEntries = Object.fromEntries(formData.entries());
		fetch(`http://localhost:3000/users/update/${_id}`, {
			method: "PATCH",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(formEntries),
		})
			.then((res) => res.json())
			.then((result) => {
				console.log(result);
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
					<h1 className="text-5xl text-center mb-6">Update User Profile</h1>
					<p className="text-center mb-8 max-w-[832px] mx-auto">Update your account.</p>
					<form className="flex flex-col gap-5" onSubmit={handleUpdateUserDetails}>
						<fieldset className="fieldset">
							<label className="label text-xl font-semibold text-c1b1a1a">Name</label>
							<input
								name="name"
								type="text"
								className="input w-full"
								placeholder="Enter your name"
								defaultValue={name}
							/>
						</fieldset>
						<fieldset className="fieldset">
							<label className="label text-xl font-semibold text-c1b1a1a">Address</label>
							<input
								name="address"
								type="text"
								className="input w-full"
								placeholder="Enter your address"
								defaultValue={address}
							/>
						</fieldset>
						<fieldset className="fieldset">
							<label className="label text-xl font-semibold text-c1b1a1a">Phone</label>
							<input
								name="phone"
								type="text"
								className="input w-full"
								placeholder="Enter your phone"
								defaultValue={phone}
							/>
						</fieldset>
						<fieldset className="fieldset">
							<label className="label text-xl font-semibold text-c1b1a1a">Photo URL</label>
							<input
								name="photo"
								type="text"
								className="input w-full"
								placeholder="Enter photo url"
								defaultValue={photo}
							/>
						</fieldset>
						<button
							type="submit"
							className="bg-cd2b48c border-2 border-c331a15 w-full text-2xl p-2 rounded-md cursor-pointer"
						>
							Update User
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default UserDetails;
