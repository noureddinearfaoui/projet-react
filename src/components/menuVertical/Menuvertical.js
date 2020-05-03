import React, {memo } from "react"

import './Menuvertical.css'
import {
    Link 
  } from "react-router-dom";
  

function Menuvertical(){
   
    return(
        
        <div className="Menuvertical">
            <div className="vertical-menu">
                   <div className="active">Home</div>
                   <Link to="/livres">Livres</Link>
                   <Link to="/users">Users</Link>
                   <Link to="/logout">Déconnexion</Link>
                   
             </div>
       </div>
    );
}
export default memo(Menuvertical);
