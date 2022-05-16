import './App.css';
import {useState, useEffect} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Body from './components/Body'
import Login from './components/Login.js'
import CreateLogin from './components/CreateLogin'
import EditAccount from './components/EditAccount'

function App() {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    fetch("/userInSession")
      .then((r) => r.json())
      .then(data => {setCurrentUser(data)});
  }, []);
  
  return (
    
    <div className="app">
      <Router> 
        <Navbar setCurrentUser={setCurrentUser} currentUser={currentUser}/>
        <Routes>
          <Route path="/" element={<Body currentUser={currentUser}/>}/>
          <Route path="login" element={<Login currentUser={currentUser} setCurrentUser={setCurrentUser}/>}/>
          <Route path="login/create-account" element={<CreateLogin/>}/>
          <Route path="login/edit-account" element={<EditAccount currentUser={currentUser}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
