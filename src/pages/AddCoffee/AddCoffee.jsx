import React from "react";
import { Link } from "react-router";
import { FaArrowLeftLong } from "react-icons/fa6";
import addCoffeeBg from "../../assets/add-coffee/add-coffee-bg.jpg";
import Swal from "sweetalert2";
const AddCoffee = () => {
	const handleAddCoffee = (e) => {
		e.preventDefault();
		const form = e.target;
		// const coffeeName = form.coffee_name.value;
		// const coffeeChef = form.coffee_chef.value;
		// const coffeeSupplier = form.coffee_supplier.value;
		// const coffeeTest = form.coffee_test.value;
		// const coffeeCat = form.coffee_cat.value;
		// const coffeeDetails = form.coffee_details.value;
		// const coffeeImage = form.coffee_image.value;
		// console.log(coffeeName, coffeeChef, coffeeSupplier, coffeeTest, coffeeCat, coffeeDetails, coffeeImage);

		const formData = new FormData(form);
		const formEntries = Object.fromEntries(formData.entries());
		fetch("http://localhost:3000/coffees", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(formEntries),
		})
			.then((res) => res.json())
			.then((result) => {
				if (result.insertedId) {
					Swal.fire({
						position: "top-end",
						icon: "success",
						title: "Coffee added success",
						showConfirmButton: false,
						timer: 1500,
					});
					form.reset();
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
					<h1 className="text-5xl text-center mb-6">Add New Coffee</h1>
					<p className="text-center mb-8 max-w-[832px] mx-auto">
						It is a long established fact that a reader will be distraceted by the readable content of a page when
						looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
						letters, as opposed to using Content here.
					</p>
					<form onSubmit={handleAddCoffee}>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<fieldset className="fieldset">
								<label className="label text-xl font-semibold text-c1b1a1a">Name</label>
								<input name="coffee_name" type="text" className="input w-full" placeholder="Enter coffee name" />
							</fieldset>
							<fieldset className="fieldset">
								<label className="label text-xl font-semibold text-c1b1a1a">Chef</label>
								<input name="coffee_chef" type="text" className="input w-full" placeholder="Enter coffee chef" />
							</fieldset>
							<fieldset className="fieldset">
								<label className="label text-xl font-semibold text-c1b1a1a">Price</label>
								<input name="coffee_price" type="text" className="input w-full" placeholder="Enter coffee price" />
							</fieldset>
							<fieldset className="fieldset">
								<label className="label text-xl font-semibold text-c1b1a1a">Taste</label>
								<input name="coffee_test" type="text" className="input w-full" placeholder="Enter coffee taste" />
							</fieldset>
							<fieldset className="fieldset">
								<label className="label text-xl font-semibold text-c1b1a1a">Category</label>
								<input name="coffee_cat" type="text" className="input w-full" placeholder="Enter coffee category" />
							</fieldset>
							<fieldset className="fieldset">
								<label className="label text-xl font-semibold text-c1b1a1a">Details</label>
								<input name="coffee_details" type="text" className="input w-full" placeholder="Enter coffee details" />
							</fieldset>
						</div>
						<fieldset className="fieldset my-6">
							<label className="label text-xl font-semibold text-c1b1a1a">Photo</label>
							<input name="coffee_image" type="text" className="input w-full" placeholder="Enter photo URL" />
						</fieldset>
						<button
							type="submit"
							className="bg-cd2b48c border-2 border-c331a15 w-full text-2xl p-2 rounded-md cursor-pointer"
						>
							Add Coffee
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AddCoffee;
