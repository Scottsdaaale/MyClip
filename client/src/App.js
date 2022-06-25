import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Login from "./components/Login.js";
import CreateLogin from "./components/CreateLogin";
import EditAccount from "./components/EditAccount";
import UserClips from "./components/UserClips";
function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [clipData, setClipData] = useState([]);
  const [switchFetches, setSwitchFetches] = useState("default");   
  const userClipPagePath = currentUser!==null?`${currentUser.id}-clips`:null
  
  useEffect(() => {
    if (switchFetches == "mostComments") {
      fetch("/most_comments")
        .then((r) => r.json())
        .then((data) => setClipData(data));
    } else if (switchFetches == "new") {
      fetch("/newest_post")
        .then((r) => r.json())
        .then((data) => setClipData(data));
    } else {
      fetch("/default_order")
        .then((r) => r.json())
        .then((data) => setClipData(data));
    }
  }, [switchFetches]);

  useEffect(() => {
    fetch("/userInSession")
      .then((r) => r.json())
      .then((data) => {
        setCurrentUser(data);
      });
  }, []);

  return (
    <div className="app">
      <Router>
        <Navbar userClipPagePath={userClipPagePath} setCurrentUser={setCurrentUser} currentUser={currentUser} />
        <Routes>
          <Route
            path="/"
            element={
              <Body
                currentUser={currentUser}
                switchFetches={switchFetches}
                setSwitchFetches={setSwitchFetches}
                // commentData={commentData}
                // setCommentData={setCommentData}
                clipData={clipData}
                setClipData={setClipData}
              />
            }
          />
          <Route
            path="login"
            element={
              <Login
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            }
          />
          <Route path="login/create-account" element={<CreateLogin />} />
          <Route
            path="login/edit-account"
            element={<EditAccount currentUser={currentUser} />}
          />
          <Route
            path={userClipPagePath}
            // "profile"

            element={
              <UserClips
                currentUser={currentUser}
                // commentData={commentData}
                // setCommentData={setCommentData}
                clipData={clipData}
                setClipData={setClipData}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
