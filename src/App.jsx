

import 
{ createBrowserRouter,
  createRoutesFromElements,
    RouterProvider,
    Route,
    Link
 } from 'react-router-dom';

 import RootLayout from './Layouts/Root Layout';
 import HomePage from './Pages/HomePage';

function App() {
  
  const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path='/' element={<RootLayout/>} >
          <Route index path='/homepage' element={<HomePage/>} />
  
        </Route>
      )
  )

  return (
    <RouterProvider router={router}/> 
  )
}

export default App;
