import React from "react";
import { Link, useLoaderData } from "react-router";
import { FaArrowLeftLong } from "react-icons/fa6";
import addCoffeeBg from "../assets/add-coffee/add-coffee-bg.jpg";
const CoffeeDetails = () => {
	const { _id, coffee_name, coffee_chef, coffee_price, coffee_image, coffee_test, coffee_cat, coffee_details } =
		useLoaderData();
	return (
		<div
			className="bg-top bg-no-repeat lg:pt-14 lg:pb-28 py-10 px-4"
			style={{ backgroundImage: `url(${addCoffeeBg})` }}
		>
			<div className="container max-w-7xl mx-auto">
				<Link to={"/"} className="flex gap-2 items-center font-rancho">
					<FaArrowLeftLong color="#331A15" /> <span className="text-3xl">Back to home</span>
				</Link>
				<div className="mt-12 bg-cf5f4f1 lg:py-18 lg:px-28 sm:p-10 p-10 rounded-md flex lg:gap-28 gap-10 sm:items-center flex-col sm:flex-row">
					<figure className="self-start">
						<img src={coffee_image} alt={coffee_name} />
					</figure>
					<div>
						<h1 className="text-4xl mb-3 text-c331a15">{coffee_name}</h1>
						<div className="flex flex-col gap-2 text-xl text-c5c5b5b">
							<p>
								<span className="font-bold mr-1">Chef:</span> {coffee_chef}
							</p>
							<p>
								<span className="font-bold mr-1">Price:</span> {coffee_price}
							</p>
							<p>
								<span className="font-bold mr-1">Test:</span> {coffee_test}
							</p>
							<p>
								<span className="font-bold mr-1">Category:</span> {coffee_cat}
							</p>
							<p>
								<span className="font-bold mr-1">Details:</span> {coffee_details}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CoffeeDetails;
