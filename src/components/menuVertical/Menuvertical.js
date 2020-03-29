import React, { useState, memo } from "react"

import './Menuvertical.css'

function Menuvertical(){
   
    return(
        
        <div className="Menuvertical">
            <div className="vertical-menu">
                   <a href="#" className="active">Home</a>
                   <a href="#">Link 1</a>
                   <a href="#">Link 2</a>
                   <a href="#">Link 3</a>
                   <a href="#">Link 4</a>
             </div>
       </div>
    );
}
export default memo(Menuvertical);
