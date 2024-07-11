// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './home_page';
import AddClothingPage from './my_closet_page';


function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/add-clothing">My Closet</Link></li>
            
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-clothing" element={<AddClothingPage />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;