import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import HomePage from './Pages/HomePage';
import Blog1 from './Pages/Blog1';
import Blog2 from './Pages/Blog2';
import Blog3 from './Pages/Blog3';

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/post1' element={<Blog1 />} />
          <Route path='/post2' element={<Blog2 />} />
          <Route path='/post3' element={<Blog3 />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
