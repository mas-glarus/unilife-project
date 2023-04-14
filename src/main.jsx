import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/index.css'
import CityContextProvider from './Context/CityContext'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CityContextProvider>
      <App />
    </CityContextProvider>
  </React.StrictMode>,
)
