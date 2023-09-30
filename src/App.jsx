import react from 'react'
// import Home from './Pages/Home'
// import Onboarding from './Pages/Onboarding'
// import Dashboard from './Pages/Dashboard'
import { Outlet } from 'react-router-dom'
import Navbar from './Pages/Navbar'

function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
