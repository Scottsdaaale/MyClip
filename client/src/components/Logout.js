import React from "react";

function Logout({ setCurrentUser }) {
  const handleLogout = () => {
    
    fetch("/logout", { method: "DELETE" })
      .then((r) => r.json())
      .then(setCurrentUser(null));
  };

  return (
    <div className="icon-link">
      <input
        type="image"
        src="https://icones.pro/wp-content/uploads/2021/05/icone-connexion-grise.png"
        alt="logout"
        className="nav-icons"
        onClick={handleLogout}
      />
    </div>
  );
}

export default Logout;
