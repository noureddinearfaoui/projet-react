import React, { useState, memo } from "react"
import Menuvertical from '../menuVertical/Menuvertical'
import Livreliste from '../livreliste/Livreliste'
import {findAllLivre} from '../../services/livre.service'
import {findAllEmprunts} from '../../services/emprunt.service'




import './Livres.css'

function Livres(){
    const [livres, setLivres] = useState([])
    const [emprunts, setEmprunts] = useState([])


   
    
  const AllLivre = async () =>{
      
      const res = await findAllLivre();
     
      setLivres(res);
      

  }
  const AllEmprunts = async () =>{
      
    const res = await findAllEmprunts();
   
    setEmprunts(res);
    alert(emprunts)
    

}
  AllLivre();
  AllEmprunts();
  
  const comparerDate = (firstDate,SecondDate)=>
  {
    return firstDate.getDay      ===  SecondDate.getDay &&
           firstDate.getMonth    ===  SecondDate.getMonth &&
           firstDate.getFullYear ===  SecondDate.getFullYear;

  }
   const fetchEmpruntsUser = (idUser)=>{
    
    const result = emprunts.filter(emprunt => emprunt.idUser===idUser
                                               && emprunt.remettre===false)
    return result;
    }
    const disponibilteLivre = (idLivre)=>{
      
      const result = emprunts.filter(emprunt => emprunt.idLivre === idLivre && 
        emprunt.remettre===false)
        alert("dispo!"+result.length)
      return result;
      }
  const updateLivre = (id,libelle,auteur,edition,nombreExemplaires) => {
    console.log(libelle+"lib2")
    const newLivres = livres.map((livre) =>
      livre.id === id ? { id,libelle,auteur,edition,nombreExemplaires } : livre
    )
    setLivres([])
    setLivres(newLivres)
    
    livres.map(livre=>console.log(newLivres))
    livres.map(livre=>console.log(livres))
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
  const emprunterLivre = async (idUser,idLivre,dateDebut,dateFin) =>{
      
   
    alert("lll")
    emprunts.push({id:emprunts.length+1,
      idUser,
      idLivre,
      dateDebut,
      dateFin,
      remettre:false
    

       
 })
    setEmprunts(emprunts)
    alert(emprunts)

    emprunts.map(emprunt => (console.log(emprunt)) )   
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
                              updateLivre={updateLivre}
                              fetchEmpruntsUser={fetchEmpruntsUser}
                              disponibilteLivre={disponibilteLivre}
                              emprunterLivre={emprunterLivre}
                                />
               
                </div>
                   
            </div>
       </div>
    );
}
export default memo(Livres);
