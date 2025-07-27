import React from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Edit from './components/Edit';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      
       
        <Route path="/" element={<Home />} />
        <Route path="/Edit/:id" element={<Edit />} />
      
      
    </Routes>
  </BrowserRouter>
  )
}

export default App