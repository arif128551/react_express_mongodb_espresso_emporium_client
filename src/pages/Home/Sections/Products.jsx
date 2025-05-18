import React, { useState } from "react";
import { SlCup } from "react-icons/sl";
import { Link, useLoaderData } from "react-router";
import ProductCard from "./Card/ProductCard";
const Products = () => {
	const initialProducts = useLoaderData();
	const [products, setProducts] = useState(Array.isArray(initialProducts) ? initialProducts : []);
	return (
		<div className="py-30 px-4">
			<div className="container max-w-7xl mx-auto">
				<div className="text-center">
					<p className="text-xl text-c1b1a1a mb-2">--- Sip & Savor ---</p>
					<h2 className="text-5xl/tight mb-0">Our Popular Products</h2>
					<Link
						to={"/add-coffee"}
						className="text-2xl bg-ce3b577 py-2.5 px-4 cursor-pointer mt-8 flex items-center gap-2 border-2 border-c331a15 rounded-md justify-center mx-auto max-w-50"
					>
						Add Coffee
						<SlCup />
					</Link>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
					{products.map((product) => (
						<ProductCard
							key={product._id}
							products={products}
							product={product}
							setProducts={setProducts}
						></ProductCard>
					))}
				</div>
			</div>
		</div>
	);
};

export default Products;
