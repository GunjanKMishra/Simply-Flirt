import react from 'react'
// import Home from './Pages/Home'
// import Onboarding from './Pages/Onboarding'
// import Dashboard from './Pages/Dashboard'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div>
      <h1>hello yaar</h1>
      <Outlet />
      <h1>kya hua yaar</h1>
    </div>
  )
}

export default App
