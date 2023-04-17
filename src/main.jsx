import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import './styles/index.css'

import CityContextProvider from './Context/CityContext'
import './styles/pablocss.css'
// import PropertiesContextProvider from './Context/PropertiesContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CityContextProvider>
      {/* <PropertiesContextProvider> */}
        <App />
      {/* </PropertiesContextProvider> */}
    </CityContextProvider>
  </React.StrictMode>,
)
