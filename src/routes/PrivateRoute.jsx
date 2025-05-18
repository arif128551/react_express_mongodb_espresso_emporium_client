import React, { use } from "react";
import { Navigate, useLocation } from "react-router";
import PageLoader from "../components/ui/PageLoader";
import Swal from "sweetalert2";
import { AuthContext } from "../assets/contexts/AuthContext";

const PrivateRoute = ({ children }) => {
	const { user, loading } = use(AuthContext);
	const location = useLocation();
	if (loading) {
		return <PageLoader />;
	}

	if (user && user?.email) {
		return children;
	}
	Swal.fire({
		position: "top-end",
		icon: "error",
		title: "You must be logged in to see the content.",
		showConfirmButton: false,
		timer: 1500,
	});
	return <Navigate to="/login" state={location.pathname}></Navigate>;
};

export default PrivateRoute;
