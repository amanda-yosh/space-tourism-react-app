import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Crew from './pages/Crew';

import './App.css'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="crew/:id" element={<Crew />} />
            </Routes>
        </BrowserRouter >
    )
}

export default App
