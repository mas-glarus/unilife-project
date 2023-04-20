import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from "react-router-dom";
import RootLayout from "./Layouts/RootLayout";
import AllCities from "./Pages/AllCities";
import HomePage from "./Pages/HomePage";
import CityDetails from "./Pages/CityDetails";
import HomeDetails from "./Pages/HomeDetails";
import BookViewing from "./Components/BookViewing";
import ContactUs from "./Components/ContactUs";


function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<RootLayout />}>

			<Route index element={<HomePage />} />
			<Route path="allCities" element={<AllCities />} />
			<Route path="cityDetails/:id" element={<CityDetails />} />
			<Route path="homeDetails/:idProp" element={<HomeDetails />} />
			<Route path="bookViewing" element={<BookViewing />} />
			<Route path="contactUs" element={<ContactUs />} />
			

			</Route>
		)
	);

	return <RouterProvider router={router} />;
}

export default App;
