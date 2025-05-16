import React from "react";

import { FaRegEye } from "react-icons/fa6";
import { IoPencil } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const ProductCard = ({ product, setProducts, products }) => {
	const { _id, coffee_name, coffee_chef, coffee_price, coffee_image } = product;
	const handleDeleteCoffee = (id) => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				const remainingProducts = products.filter((product) => product._id !== id);
				setProducts(remainingProducts);
				fetch(`http://localhost:3000/coffees/${id}`, {
					method: "DELETE",
				})
					.then((res) => res.json())
					.then(() => {
						Swal.fire({
							title: "Deleted!",
							text: `${coffee_name} has been deleted!`,
							icon: "success",
						});
					});
			}
		});
	};
	return (
		<div className="flex items-center flex-col lg:flex-row gap-8 justify-between bg-cf5f4f1 pl-7 pr-12 py-8 rounded-[10px]">
			<div className="flex items-center flex-col sm:flex-row gap-3">
				<figure>
					<img className="w-40 h-40 object-cover object-top" src={coffee_image} alt={coffee_name} />
				</figure>
				<div className="text-xl text-c5c5b5b font-normal">
					<p className="mb-3">
						<span className="font-bold">Name:</span> {coffee_name}
					</p>
					<p className="mb-3">
						<span className="font-bold">Chef:</span> {coffee_chef}
					</p>
					<p className="mb-3">
						<span className="font-bold">Price:</span> {coffee_price} Taka
					</p>
				</div>
			</div>
			<div className="flex lg:flex-col flex-row gap-4">
				<button className="w-10 h-10 bg-cd2b48c flex items-center justify-center rounded-md text-white cursor-pointer">
					<FaRegEye />
				</button>
				<button className="w-10 h-10 bg-c3c393b flex items-center justify-center rounded-md text-white cursor-pointer">
					<IoPencil />
				</button>
				<button
					onClick={() => handleDeleteCoffee(_id)}
					className="w-10 h-10 bg-cea4744 flex items-center justify-center rounded-md text-white cursor-pointer"
				>
					<FaTrash />
				</button>
			</div>
		</div>
	);
};

export default ProductCard;
