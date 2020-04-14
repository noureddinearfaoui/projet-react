import React,{useState,memo} from 'react';
import './Livreliste.css'

import LivreForm from '../LivreForm/LivreForm'
import LivrElement from '../livreElement/LivreElement'
import { ToastsContainer,ToastsStore} from 'react-toasts';
import FormSearchLivre from '../formSearchLivre/FormSearchLivre'





function Livreliste({livres,
                      emprunts,setLivres,findLivreById,fetchLivres}) {

                        
                  
                   const [loding] = useState(true)
                //  console.log(livres+"liste")
                  livres.map(livre =>console.log(livre.libelle))

                  
  const toast = (msg=null) =>
    {
          if(msg===null)
          ToastsStore.success("Hey, success!");
          else
          ToastsStore.success("Hey!"+msg);
           
    } 
  const toastError = (msg=null) =>
    {
          if(msg===null)
          ToastsStore.error("Hey, error!");
          else
          ToastsStore.error("Hey!"+msg);
           
    } 
  
  
  //const userAuth = JSON.parse(localStorage.getItem('user'));
 

  return (
    <div className="Livreliste">
              

        <ToastsContainer store={ToastsStore}/>
        <div className="table-title">
                <div className="row">
                    <div className="col-lg-9 col-md-9 col-sm-12">
                    <FormSearchLivre livres={livres}
                                            findLivreById={findLivreById}
                                            setLivres={setLivres}
                                            fetchLivres={fetchLivres}/>
					      </div>
					      <div className="col-lg-3 col-md-3 col-sm-12 ">
                   
                  
                       <LivreForm livres={livres}
                               setLivres={setLivres} toast={toast} />                
                    
                   
                </div>
                </div>
               
        </div>  
        <div className="contenu">
            <div className="headerContenu">
              <p>Name</p>
              <p>Name</p>
              <p>Name</p>
              <p>Name</p>
            </div>
            <div className="BodyContenu">
            {loding && 
            livres.map(livre => (
              <LivrElement 
              key={livre.id}
                id = {livre.id}
                libelle = {livre.libelle}
                auteur={livre.auteur}
                edition={livre.edition}
                nbExemplaires={livre.nombreExemplaires}
                toast={toast}
                toastError={toastError}
                emprunts={emprunts}
                 livres={livres}
                 setLivres={setLivres}
               >
                  
                
              </LivrElement>)) }
            </div>
         
        </div>
    
    </div>
  );
}

export default memo(Livreliste);