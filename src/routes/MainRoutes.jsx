import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound";
import AddCoffee from "../pages/AddCoffee/AddCoffee";
import PageLoader from "../components/ui/PageLoader";

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
		],
	},
]);
