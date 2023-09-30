import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Pages/Home'
import Onboarding from './Pages/Onboarding'
import Dashboard from './Pages/Dashboard'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} >
        <Route path='' element={<Home />} />
        <Route path='Dashboard' element={<Dashboard />} />
        <Route path='Onboarding' element={<Onboarding />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
