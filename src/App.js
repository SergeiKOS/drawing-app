import { Route, Routes, Navigate } from 'react-router-dom'

import './App.css'
import LandingPage from './components/landingPage'
import Canvas from './components/canvas'
import NotFound from './components/NotFound'

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/canvas" element={<Canvas />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
    </>
  )
}

export default App
