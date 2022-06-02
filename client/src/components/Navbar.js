import React from "react";
import Logout from "./Logout";
import { Link } from "react-router-dom";

function Navbar({ currentUser, setCurrentUser, userClipPagePath}) {
  function conditionallyRenderProfilePage() {
    if (currentUser !== null) {
      return (
        <Link className="icon-link" to={userClipPagePath}>
          <img
            className="nav-icons"
            src="https://i.imgur.com/cDnBDnE.png"
            alt="Profile"
          />
        </Link>
      );
    }
  }

  return (
    <div id="navbar">
      <div id="imgs-div">
        <Link className="icon-link" to="/">
          <img
            className="nav-icons"
            src="https://www.pngkey.com/png/full/823-8236029_senior-care-icon-home-page-icon-grey.png"
            alt="Home"
          />
        </Link>
        {conditionallyRenderProfilePage()}
        <Link className="icon-link" to="login">
          <img
            className="nav-icons"
            src="https://www.seekpng.com/png/full/139-1395950_is-the-consumer-or-supply-chain-partner-expected.png"
            alt="login"
          />
        </Link>
        {currentUser ? <Logout setCurrentUser={setCurrentUser} /> : <></>}
      </div>
    </div>
  );
}

export default Navbar;

//conditionally render logout button if you are logged in and hide login button

// import React from "react";
// import Logout from "./Logout"
// import { Link } from "react-router-dom";

// function Navbar({currentUser, setCurrentUser}) {

//   const conditionallyRenderLoginPage=()=>{
//     if(currentUser == null){
//       return(
//         <Link className="icon-link" to="login">
//           <img
//             className="nav-icons"
//             src="https://www.seekpng.com/png/full/139-1395950_is-the-consumer-or-supply-chain-partner-expected.png"
//             alt="login"
//           />
//         </Link>
//       )
//     }
//     else{
//       return(
//         <></>
//       )
//     }
//   }

//   return (
//     <div id="navbar">
//       <div id="imgs-div">
//         <Link className="icon-link" to="/">
//           <img
//             className="nav-icons"
//             src="https://www.pngkey.com/png/full/823-8236029_senior-care-icon-home-page-icon-grey.png"
//             alt="keyboard icon"
//           />
//         </Link>
//         {conditionallyRenderLoginPage()}
//         {currentUser ? <Logout setCurrentUser={setCurrentUser}/>:<></>}
//       </div>
//     </div>
//   );
// }

// export default Navbar;
