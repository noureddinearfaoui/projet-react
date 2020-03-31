import React, { useState, memo } from "react"
import Menuvertical from '../menuVertical/Menuvertical'
import Livreliste from '../livreliste/Livreliste'
import {findAllLivre} from '../../services/livre.service'

import './Livres.css'

function Livres(){
    const [livres, setLivres] = useState([])
    
  const AllLivre = async () =>{
      
      const res = await findAllLivre();
     
     
      return res;
      

  }
  const updateLivre = (id,libelle,auteur,edition,nombreExemplaires) => {
    const newLivres = livres.map(livre =>
      livre.id === id ? { libelle,auteur,edition,nombreExemplaires } : livre
    )
    setLivres(newLivres)
  }
  const deleteLivre = id => {
    const newLivres = livres.filter(livre => livre.id !== id)
    setLivres(newLivres)
  }
  const addLivre = async (libelle,auteur,edition,nombreExemplaires) =>{
      
      /*const res1 = await add(libelle,auteur,edition,nombreExemplaires);
      
     //  setLivres(res);
      AllLivre();*/
      
      setLivres(previousTasks => [
        ...previousTasks,
        {id:previousTasks.length+1,
          libelle :libelle,
          auteur : auteur,
          edition:edition,
          nombreExemplaires:nombreExemplaires
    
           
     }
      ])
      
  }

    return(
        
        <div className="Livres ">
            <div className="row">
                <div className="partiedroite col-lg-3">
                    <Menuvertical/>

                </div>
               <div className="partiedroite col-lg-9">
               
                  <Livreliste addLivre={addLivre} 
                              livres={livres} 
                              deleteLivre={deleteLivre}
                              updateLivre={updateLivre}  />
               
                </div>
                   
            </div>
       </div>
    );
}
export default memo(Livres);
