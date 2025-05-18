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

export const router = createBrowserRouter([
	{
		path: "/",
		Component: RootLayout,
		errorElement: <NotFound></NotFound>,
		children: [
			{
				index: true,
				loader: () => fetch("http://localhost:3000/coffees"),
				hydrateFallbackElement: <PageLoader />,
				Component: Home,
			},
			{
				path: "/add-coffee",
				Component: AddCoffee,
			},
			{
				path: "/coffees/:id",
				Component: CoffeeDetails,
				loader: ({ params }) => fetch(`http://localhost:3000/coffees/${params.id}`),
				hydrateFallbackElement: <PageLoader />,
			},
			{
				path: "/coffees/edit/:id",
				Component: UpdateCoffee,
				loader: ({ params }) => fetch(`http://localhost:3000/coffees/${params.id}`),
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
				loader: () => fetch("http://localhost:3000/users"),
				hydrateFallbackElement: <PageLoader />,
			},
			{
				path: "/users/:id",
				Component: UserDetails,
				loader: ({ params }) => fetch(`http://localhost:3000/users/${params.id}`),
				hydrateFallbackElement: <PageLoader />,
			},
		],
	},
]);
