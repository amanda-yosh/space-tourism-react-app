import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Crew from './pages/Crew'
import Technology from './pages/Technology'
import Destination from './pages/Destination'

import './App.css'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="crew/:id" element={<Crew />} />
                <Route path="technology/:id" element={<Technology />} />
                <Route path="destination/:destination" element={<Destination />} />
            </Routes>
        </BrowserRouter >
    )
}

export default App
