// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Register from './Register';
import GetQuote from './GetQuote';
import Requestdemo from './Requestdemo';

import './App.css';

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
         <Route path="/get-quote" element={<GetQuote />} />
          <Route path="/request-demo" element={<Requestdemo />} />

      </Routes>
    
  );
}

export default App;
