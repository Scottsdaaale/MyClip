import React from "react";
import { Link } from "react-router-dom";
// import {GoHome} from 'react-icons/fa'
function Navbar() {
  return (
    <div id="navbar">
      <div id="imgs-div">
        <Link to="/">
          <img
            className="nav-icons"
            src="https://www.pngkey.com/png/full/823-8236029_senior-care-icon-home-page-icon-grey.png"
            alt="keyboard icon"
          />
        </Link>
        <Link to="submit">
          <img
            className="nav-icons"
            src="https://icons.veryicon.com/png/o/miscellaneous/cloud-call-center/data-statistics-4.png"
            alt="results"
          />
        </Link>
        <Link to="about">
          <img
            className="nav-icons"
            src="https://icons.veryicon.com/png/o/miscellaneous/cloud-call-center/data-statistics-4.png"
            alt="About"
          />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
