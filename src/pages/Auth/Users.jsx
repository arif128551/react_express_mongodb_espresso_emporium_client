import React, { use, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router";
import addCoffeeBg from "../../assets/add-coffee/add-coffee-bg.jpg";
import { MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { LiaPenSolid } from "react-icons/lia";
import { AuthContext } from "../../assets/contexts/AuthContext";
import Swal from "sweetalert2";
const Users = () => {
	const { setUser } = use(AuthContext);
	const initialUsers = useLoaderData();
	const [users, setUsers] = useState(initialUsers);
	const handleUserDelete = (userId) => {
		const targetUser = users.find((user) => user._id === userId);
		if (!targetUser) return;

		Swal.fire({
			title: "Are you sure?",
			text: "User will be deleted from both MongoDB and Firebase!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				// 1️⃣ MongoDB থেকে delete
				fetch(`https://react-express-mongodb-espresso-emporium-server.vercel.app/users/${userId}`, {
					method: "DELETE",
				})
					.then((res) => res.json())
					.then(() => {
						fetch("https://react-express-mongodb-espresso-emporium-server.vercel.app/firebase-users", {
							method: "DELETE",
							headers: {
								"Content-Type": "application/json",
							},
							body: JSON.stringify({ email: targetUser.email }),
						})
							.then((res) => res.json())
							.then(() => {
								const remainingUsers = users.filter((user) => user._id !== userId);
								setUsers(remainingUsers);
								setUser(null);
								Swal.fire({
									position: "top-end",
									icon: "success",
									title: "Deleted user from MongoDB & Firebase",
									showConfirmButton: false,
									timer: 1500,
								});
							});
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
					<h1 className="text-5xl text-center mb-6">Users</h1>

					<div className="flex flex-col gap-5">
						<div className="overflow-x-auto">
							<table className="table">
								<thead>
									<tr>
										<th>No.</th>
										<th>Name</th>
										<th>Email</th>
										<th>Phone</th>
										<th></th>
									</tr>
								</thead>
								<tbody>
									{users.map((user, index) => (
										<tr key={user._id}>
											<th>
												<label>{index + 1}</label>
											</th>
											<td>
												<div className="flex items-center gap-3">
													{user.photo && (
														<>
															{" "}
															<div className="avatar">
																<div className="mask mask-squircle h-12 w-12">
																	<img src={user.photo} alt="Avatar Tailwind CSS Component" />
																</div>
															</div>
														</>
													)}

													<div>
														<div className="font-bold">{user.name}</div>
														<div className="text-sm opacity-50">{user.address}</div>
													</div>
												</div>
											</td>
											<td>{user.email}</td>
											<td>{user.phone}</td>
											<th className="space-x-2">
												<button className="btn bg-green-500 p-2 text-white">
													<FaEye size={20} />
												</button>
												<Link to={`/users/${user._id}`} className="btn bg-black p-2 text-white">
													<LiaPenSolid size={20} />
												</Link>
												<button onClick={() => handleUserDelete(user._id)} className="btn bg-red-500 p-2 text-white">
													<MdDelete size={20} />
												</button>
											</th>
										</tr>
									))}
								</tbody>
								<tfoot>
									<tr>
										<th></th>
										<th>Name</th>
										<th>Email</th>
										<th>Phone</th>
										<th></th>
									</tr>
								</tfoot>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Users;
