import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AllTripsPage from './pages/AllTripsPage'
import TripDetail from './pages/TripDetail'
import Info from './pages/Info'
import './css/App.css'

function App() {
  return (
    <main className="font-noto">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trips" element={<AllTripsPage />} />
        <Route path="/trip/:id" element={<TripDetail />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </main>
  )
}

export default App
