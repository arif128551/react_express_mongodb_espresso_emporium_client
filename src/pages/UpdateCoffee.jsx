import React from "react";
import { Link, useLoaderData } from "react-router";
import { FaArrowLeftLong } from "react-icons/fa6";
import addCoffeeBg from "../assets/add-coffee/add-coffee-bg.jpg";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
	const { _id, coffee_name, coffee_chef, coffee_price, coffee_image, coffee_test, coffee_cat, coffee_details } =
		useLoaderData();
	const handleUpdateCoffee = (e) => {
		e.preventDefault();
		const form = e.target;
		const formData = new FormData(form);
		const formEntries = Object.fromEntries(formData.entries());
		fetch(`http://localhost:3000/coffees/${_id}`, {
			method: "PUT",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(formEntries),
		})
			.then((res) => res.json())
			.then((result) => {
				if (result.modifiedCount) {
					Swal.fire({
						position: "top-end",
						icon: "success",
						title: "Coffee updated successfully",
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
					<h1 className="text-5xl text-center mb-6">Update Existing Coffee Details</h1>
					<p className="text-center mb-8 max-w-[832px] mx-auto">
						It is a long established fact that a reader will be distraceted by the readable content of a page when
						looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
						letters, as opposed to using Content here.
					</p>
					<form onSubmit={handleUpdateCoffee}>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<fieldset className="fieldset">
								<label className="label text-xl font-semibold text-c1b1a1a">Name</label>
								<input
									name="coffee_name"
									type="text"
									className="input w-full"
									placeholder="Enter coffee name"
									defaultValue={coffee_name}
								/>
							</fieldset>
							<fieldset className="fieldset">
								<label className="label text-xl font-semibold text-c1b1a1a">Chef</label>
								<input
									name="coffee_chef"
									type="text"
									className="input w-full"
									placeholder="Enter coffee chef"
									defaultValue={coffee_chef}
								/>
							</fieldset>
							<fieldset className="fieldset">
								<label className="label text-xl font-semibold text-c1b1a1a">Price</label>
								<input
									name="coffee_price"
									type="text"
									className="input w-full"
									placeholder="Enter coffee price"
									defaultValue={coffee_price}
								/>
							</fieldset>
							<fieldset className="fieldset">
								<label className="label text-xl font-semibold text-c1b1a1a">Taste</label>
								<input
									name="coffee_test"
									type="text"
									className="input w-full"
									placeholder="Enter coffee taste"
									defaultValue={coffee_test}
								/>
							</fieldset>
							<fieldset className="fieldset">
								<label className="label text-xl font-semibold text-c1b1a1a">Category</label>
								<input
									name="coffee_cat"
									type="text"
									className="input w-full"
									placeholder="Enter coffee category"
									defaultValue={coffee_cat}
								/>
							</fieldset>
							<fieldset className="fieldset">
								<label className="label text-xl font-semibold text-c1b1a1a">Details</label>
								<input
									name="coffee_details"
									type="text"
									className="input w-full"
									placeholder="Enter coffee details"
									defaultValue={coffee_details}
								/>
							</fieldset>
						</div>
						<fieldset className="fieldset my-6">
							<label className="label text-xl font-semibold text-c1b1a1a">Photo</label>
							<input
								name="coffee_image"
								type="text"
								className="input w-full"
								placeholder="Enter photo URL"
								defaultValue={coffee_image}
							/>
						</fieldset>
						<button
							type="submit"
							className="bg-cd2b48c border-2 border-c331a15 w-full text-2xl p-2 rounded-md cursor-pointer"
						>
							Update Coffee
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default UpdateCoffee;
