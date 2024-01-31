import React  from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/home/Home';
import Navbar from './component/navbar/Navbar';
import Age from './component/age/Age';
import Game from './component/DemoVideo/Game';
import Young from './component/gameType/Young';
import Adult from './component/gameType/Adult';
import Child from './component/gameType/Child';
import Login from './component/auth/Login';
import SignUp from './component/auth/SignUp';
function App() {
 
  return (
    <>
   <Router>
   <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/demo" element={<Game/>} />
        <Route path="/age" element={<Age/>} />
        <Route path="/young" element={<Young/>} />
        <Route path="/adult" element={<Adult/>} />
        <Route path="/child" element={<Child/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
    </Router>
   </>
  );
}

export default App;