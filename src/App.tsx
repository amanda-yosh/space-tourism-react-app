import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';

import './App.css'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="users/:id" element={<Users />} /> */}
            </Routes>
        </BrowserRouter >
    )
}

export default App
