import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Wonders from './pages/Wonders';
import Restaurants from './pages/Restaurants';
import NoPage from './pages/NoPage';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header/>
        <Routes>
          <Route path="/" element={<Wonders/>} />
          <Route path="/restaurants" element={<Restaurants/>} />
          <Route path="*" element={<NoPage />} />  
        </Routes>
      </div>
    </Router>
  );
}

export default App;