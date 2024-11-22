import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Tutorials from './pages/Tutorials';
import Sandbox from './pages/Sandbox';
import Marketplace from './pages/Marketplace';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/sandbox" element={<Sandbox />} />
          <Route path="/marketplace" element={<Marketplace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;