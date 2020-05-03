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

  const userAuth = JSON.parse(localStorage.getItem('user'));
  if(userAuth===undefined)
   setredirect(true)

    const [livres, setLivres] = useState(findAllLivre())
    const [ancienlivres, setancienLivres] = useState(findAllLivre())
    const [emprunts, setEmprunts] = useState([])


   const changerLivers = (livresParam) =>{
       alert('hey exx')
       console.log(livresParam+"param")
  
   setLivres(livresParam)

   setancienLivres(livresParam)

   console.log(livres+" mainlivres")
   console.log(ancienlivres+" anscien main")
   }
  
  const fetchLivres =  searchValue => {
       
    // return tasks
    const res = livres.filter(livre => livre.libelle.includes(searchValue))
    if(res.length>0)
    {
        setancienLivres(res)
        console.log(res+" foncres")
        console.log(livres+" foncresLivres")
    }
    else
    setancienLivres([])
  }
  const AllEmprunts = async () =>{
      
    const res = await findAllEmprunts();
   
    setEmprunts(res);
   // alert(emprunts)
    

}
 // AllLivre();
  AllEmprunts();
  
  const findLivreById =  (idLivre)=>
  { const livresp = findAllLivre();
   const livreFind = livresp.find(livre => livre.id===idLivre);

   const res = [];
   if(livreFind!== undefined)
   res.push(livreFind)
   setLivres([])
   setLivres(res)
   
   console.log(res)
   console.log(livres)
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
                              livres={ancienlivres} 
                              
                              emprunts={emprunts}
                              setLivres={changerLivers}
                              fetchLivres={fetchLivres}
                              findLivreById={findLivreById}
                               />
               
                </div>
                   
            </div>
       </div>
    );
}
export default memo(Livres);
