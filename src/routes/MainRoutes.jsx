import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound";
import AddCoffee from "../pages/AddCoffee/AddCoffee";
import PageLoader from "../components/ui/PageLoader";
import CoffeeDetails from "../pages/CoffeeDetails";
import UpdateCoffee from "../pages/UpdateCoffee";

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
		],
	},
]);
