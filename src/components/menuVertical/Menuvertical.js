import React, { memo } from "react";

import "./Menuvertical.css";
import { Link } from "react-router-dom";

function Menuvertical() {
  
 
  const userAuth = JSON.parse(sessionStorage.getItem("user"));

  return (
    <div className="Menuvertical">
      <div className="vertical-menu">
        <div className="active">Menu</div>
       
        <Link to="/profil">Profil</Link>
        
        <Link to="/livres">Livres</Link>
        {userAuth.role=="admin" &&
        <Link to="/users">Users</Link>
        }
        <Link to="/logout">Déconnexion</Link>
      </div>
    </div>
  );
}
export default memo(Menuvertical);
