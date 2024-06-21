import { useState, lazy} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const Landing = lazy(() => import('./components/Landing')) 
const Dashboard = lazy(() => import('./components/Dashboard'))
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  

  return (

    <>

    <BrowserRouter>
      
      <Appbar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard></Dashboard>} />
        <Route path="/" element={<Landing></Landing>} />

      </Routes>
    </BrowserRouter>
    





      
    </>
  )
}

function Appbar() {
  const navigate = useNavigate();
  return (
    <div>
    <button onClick={() => {
      navigate("/dashboard")
    }}>Dashboard</button>
    <button onClick={()=> {
      navigate("/")
    }}>LandingPage</button>
  </div>
  )

}



export default App
