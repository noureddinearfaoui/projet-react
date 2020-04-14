import React, {useState,memo} from 'react';
import './LivreElement.css'
//import {IoIosAlert,IoMdTrash,IoIosBrush,IoMdColorWand} from 'react-icons/io';
 //import { Button,Modal } from 'react-bootstrap';

 import DetailsLivre from '../detailsLivre/DetailsLivre'
 import ModalDeleteLivre from '../modalDeleteLivre/ModalDeleteLivre'
 import ModalUpdateLivre from '../modalUpdateLivre/ModalUpdateLivre'
 import ModalEmpruntLivre from '../modalEmpruntLivre/ModalEmpruntLivre'
 import EmpruntsDetails from '../empruntsDetails/EmpruntsDetails'
 import { IoIosApps } from 'react-icons/io';

 
 

  






function LivreElement({libelle,auteur,
                       edition,id,
                       nbExemplaires,toast,
                       toastError,emprunts,livres,setLivres}) {
   
  const [libelleToUpdate] = useState(libelle)
  const [auteursToUpdate] = useState(auteur)
  const [nbExemplairesToUpdate] = useState(nbExemplaires)
  const [editionToUpdate] = useState(edition)
 


  const userAuth = JSON.parse(localStorage.getItem('user'));
  
    const remettreLivre =()=>
    {
           var res = emprunts.findIndex(emprunt => !emprunt.remettre)
           if(res===-1)
            toastError("déja archiver")
            else 
           { toast("Hey success")
           emprunts[res].remettre=true;}
           }
  
  

  return (
    <div className="LivreElement">
        
        <div className="rowElement">
                <div>{libelleToUpdate}</div>
                <div>{auteursToUpdate}</div>
                <div>{editionToUpdate}</div>
                <div className="iconsOpr">
                                <span onClick={remettreLivre} className="icons icon">
                                  <IoIosApps/>
                                  </span>
                                       <ModalEmpruntLivre id={id}
                                                      libelle={libelleToUpdate}
                                                      auteur={auteursToUpdate}
                                                      edition = {editionToUpdate}
                                                      nbExemplaires = {nbExemplairesToUpdate} 
                                                      toast={toast}
                                                      toastError={toastError}
                                                      emprunts={emprunts}
                                                      />
      
                                        <EmpruntsDetails id={id}
                                                      emprunts={emprunts}
                                                      /> 
                                        <DetailsLivre libelle={libelleToUpdate}
                                                      auteur={auteursToUpdate}
                                                      edition = {editionToUpdate}
                                                      nbExemplaires = {nbExemplairesToUpdate} />
                                                                       
                                        {userAuth.role==='admin' &&            
                                       <ModalUpdateLivre libelle={libelleToUpdate}
                                                          auteur={auteursToUpdate}
                                                          edition = {editionToUpdate}
                                                          nbExemplaires = {nbExemplairesToUpdate}
                                                          id={id}
                                                          toast={toast}
                                                          livres={livres}
                                                          setLivres={setLivres}
                                                      />}
                                        {userAuth.role==='admin' &&
                                        <ModalDeleteLivre 
                                                          toast={toast}
                                                           id={id}
                                                           livres={livres}
                                                           setLivres={setLivres}/>}
                                        
                </div>
              </div>
              
            
            <div>
              
            </div>
    </div>
  );
}

export default memo(LivreElement);