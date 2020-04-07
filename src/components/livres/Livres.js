import React, { useState, memo } from "react"
import Menuvertical from '../menuVertical/Menuvertical'
import Livreliste from '../livreliste/Livreliste'
import {findAllLivre} from '../../services/livre.service'
import {findAllEmprunts} from '../../services/emprunt.service'




import './Livres.css'

function Livres(){
    const [livres, setLivres] = useState(findAllLivre())
    const [emprunts, setEmprunts] = useState([])


   
    
  const AllLivre = async () =>{
      
      const res = await findAllLivre();
     
      setLivres(res);
      

  }
  const AllEmprunts = async () =>{
      
    const res = await findAllEmprunts();
   
    setEmprunts(res);
   // alert(emprunts)
    

}
 // AllLivre();
  AllEmprunts();
  
  
   
  
  
  

    return(
        
        <div className="Livres ">
            <div className="row">
                <div className="partiedroite col-lg-3">
                    <Menuvertical/>

                </div>
               <div className="partiedroite col-lg-9">
               
                  <Livreliste 
                              livres={livres} 
                              emprunts={emprunts}
                              setLivres={setLivres}
                               />
               
                </div>
                   
            </div>
       </div>
    );
}
export default memo(Livres);
