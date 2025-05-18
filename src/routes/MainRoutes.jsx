import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound";
import AddCoffee from "../pages/AddCoffee/AddCoffee";
import PageLoader from "../components/ui/PageLoader";
import CoffeeDetails from "../pages/CoffeeDetails";
import UpdateCoffee from "../pages/UpdateCoffee";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import ForgetPassword from "../pages/Auth/ForgetPassword";
import Users from "../pages/Auth/Users";
import UserDetails from "../pages/Auth/UserDetails";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
	{
		path: "/",
		Component: RootLayout,
		errorElement: <NotFound></NotFound>,
		children: [
			{
				index: true,
				loader: () => fetch("https://react-express-mongodb-espresso-emporium-server.vercel.app/coffees"),
				hydrateFallbackElement: <PageLoader />,
				Component: Home,
			},
			{
				path: "/add-coffee",
				element: (
					<PrivateRoute>
						<AddCoffee></AddCoffee>
					</PrivateRoute>
				),
			},
			{
				path: "/coffees/:id",
				Component: CoffeeDetails,
				loader: ({ params }) =>
					fetch(`https://react-express-mongodb-espresso-emporium-server.vercel.app/coffees/${params.id}`),
				hydrateFallbackElement: <PageLoader />,
			},
			{
				path: "/coffees/edit/:id",
				element: (
					<PrivateRoute>
						<UpdateCoffee></UpdateCoffee>
					</PrivateRoute>
				),
				loader: ({ params }) =>
					fetch(`https://react-express-mongodb-espresso-emporium-server.vercel.app/coffees/${params.id}`),
				hydrateFallbackElement: <PageLoader />,
			},
			{
				path: "/login",
				Component: Login,
			},
			{
				path: "/register",
				Component: Register,
			},
			{
				path: "/forget-password",
				Component: ForgetPassword,
			},
			{
				path: "/users",
				Component: Users,
				loader: () => fetch("https://react-express-mongodb-espresso-emporium-server.vercel.app/users"),
				hydrateFallbackElement: <PageLoader />,
			},
			{
				path: "/users/:id",
				element: (
					<PrivateRoute>
						<UserDetails></UserDetails>
					</PrivateRoute>
				),
				loader: ({ params }) =>
					fetch(`https://react-express-mongodb-espresso-emporium-server.vercel.app/users/${params.id}`),
				hydrateFallbackElement: <PageLoader />,
			},
		],
	},
]);
