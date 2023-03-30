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
