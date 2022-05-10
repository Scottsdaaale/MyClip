import './App.css';
// import { useState, useEffect } from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Body from './components/Body'
import Submit from './components/Submit'
import Login from './components/Login.js'
import CreateLogin from './components/CreateLogin'
import About from './components/About';
import Star from './components/Star';
// import VideoPlayer from './components/VideoPlayer'
function App() {
  // const [count, setCount]= useState(0)

  // useEffect(() => {
  //   fetch("/hello")
  //     .then((r) => r.json())
  //     .then((data) => setCount(data.count));
  // }, []);

  return (
    
    <div className="app">
      <Router> 
        {/* <h1>you can do it</h1> */}
        <Navbar/>
          <Routes>
            <Route path="/" element={<Body/>}/>
            <Route path="submit" element={<Submit/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="login/create-account" element={<CreateLogin/>}/>
            <Route path="star-test" element={<Star/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
