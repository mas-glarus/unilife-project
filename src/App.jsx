<<<<<<< HEAD
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<RootLayout />}>
				<Route index element={<HomePage />} />
        <Route path="allCities" element={<AllCities />} />
        <Route path="cityDetails" element={<CityDetails />} />
        <Route path="homeDetails" element={<HomeDetails />} />
			</Route>
		)
	);

	return <RouterProvider router={router} />;
}

export default App
=======
import {
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
	Route,
} from "react-router-dom";

import RootLayout from "./Layouts/RootLayout";
import AllCities from "./Pages/AllCities";
import HomePage from "./Pages/HomePage";
import CityDetails from "./Pages/CityDetails";
import HomeDetails from "./Pages/HomeDetails";


function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<RootLayout />}>
			<Route index element={<HomePage />} />
			<Route path="allCities" element={<AllCities />} />
			<Route path="cityDetails" element={<CityDetails />} />
			<Route path="homeDetails" element={<HomeDetails />} />
			</Route>
		)
	);

	return <RouterProvider router={router} />;
}

export default App;
>>>>>>> 1d7eef8194ae8126f0d86e6ca6778c432da940ce
