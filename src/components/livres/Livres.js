import React, { useState, memo } from "react"
import Menuvertical from '../menuVertical/Menuvertical'
import Livreliste from '../livreliste/Livreliste'
import {findAllLivre} from '../../services/livre.service'
import {findAllEmprunts} from '../../services/emprunt.service'
import {
  
    Redirect
    
  } from "react-router-dom";



import './Livres.css'

function Livres(){
    const [redirect, setredirect] = useState(false)

  const userAuth = JSON.parse(sessionStorage.getItem('user'));
  if(userAuth===undefined)
   setredirect(true)

    const [livres, setLivres] = useState(findAllLivre())
    const [recherchelivres, setRechercheLivres] = useState(findAllLivre())
    const [emprunts, setEmprunts] = useState([])


   const changerLivers = (livresParam) =>{
       alert('hey exx')
       console.log(livresParam+"param")
  
   setLivres(livresParam)

   setRechercheLivres(livresParam)

  
   }
  
  const fetchLivres =  searchValue => {
       
    // return tasks
    const res = livres.filter(livre => livre.libelle.includes(searchValue))
    if(res.length>0)
    {
        setRechercheLivres(res)
        console.log(res+" foncres")
        console.log(livres+" foncresLivres")
    }
    else
    setRechercheLivres([])
  }
  const AllEmprunts = async () =>{
      
    const res = await findAllEmprunts();
   
    setEmprunts(res);
   // alert(emprunts)
    

}
 // AllLivre();
  AllEmprunts();
  
  const findLivreById =  (idLivre)=>
  { 
   const res = livres.find(livre => livre.id===idLivre);
   const tab =[];
   tab.push(res)
  
   alert(tab.length)
   if(tab.length>0)
   {  alert("jjj")
       setRechercheLivres(tab)
      
   }
   else
   setRechercheLivres([])
  
  }
 
  
  
  

    return(
       
        <div className="Livres ">
             {redirect && <Redirect to='/livres'/>}
            <div className="row">
                <div className="partiedroite col-lg-3">
                    <Menuvertical/>

                </div>
               <div className="partiedroite col-lg-9">
               
                  <Livreliste 
                              livres={recherchelivres} 
                              
                              emprunts={emprunts}
                              setLivres={changerLivers}
                              fetchLivres={fetchLivres}
                              findLivreById={findLivreById}
                              user={userAuth}
                               />
               
                </div>
                   
            </div>
       </div>
    );
}
export default memo(Livres);
