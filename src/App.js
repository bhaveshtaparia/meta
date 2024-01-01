import React  from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/home/Home';
import Navbar from './component/navbar/Navbar';
import Age from './component/age/Age';
function App() {
 
  return (
    <>
   <Router>
   <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/age" element={<Age/>} />
      </Routes>
    </Router>
   </>
  );
}

export default App;