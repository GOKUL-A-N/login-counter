import React from 'react';
import "./App.css";
import Home from './Home';
import Create from './Create';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Update from './Update';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/edit/:id' element={<Update />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App