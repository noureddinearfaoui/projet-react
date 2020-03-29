import React, { useState, memo } from "react"
import Menuvertical from '../menuVertical/Menuvertical'
import Livreliste from '../livreliste/Livreliste'

import './Livres.css'

function Livres(){
   
    return(
        
        <div className="Livres ">
            <div className="row">
                <div className="partiedroite col-lg-3">
                    <Menuvertical/>

                </div>
                <div className="partiedroite col-lg-9">
                    <Livreliste/>

                </div>
                   
            </div>
       </div>
    );
}
export default memo(Livres);
