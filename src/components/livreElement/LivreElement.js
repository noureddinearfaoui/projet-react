import React, {useState} from 'react';
import './LivreElement.css'
//import {IoIosAlert,IoMdTrash,IoIosBrush,IoMdColorWand} from 'react-icons/io';
 //import { Button,Modal } from 'react-bootstrap';
 import { useForm } from 'react-hook-form'
 import DetailsLivre from '../detailsLivre/DetailsLivre'
 import ModalDeleteLivre from '../modalDeleteLivre/ModalDeleteLivre'
 import ModalUpdateLivre from '../modalUpdateLivre/ModalUpdateLivre'
 import ModalEmpruntLivre from '../modalEmpruntLivre/ModalEmpruntLivre'
 
 

  






function LivreElement({libelle,auteur,
                       edition,id,deleteLivre,
                       nbExemplaires,updateLivre,toast,
                       toastError,fetchEmpruntsUser,
                       disponibilteLivre,emprunterLivre}) {
   
  const [libelleToUpdate, setLibelle] = useState(libelle)
  const [auteursToUpdate, setAuteur] = useState(auteur)
  const [nbExemplairesToUpdate, setnbExemplaire] = useState(nbExemplaires)
  const [editionToUpdate, setEdition] = useState(edition)
  const { register, handleSubmit, errors } = useForm()


  const userAuth = JSON.parse(localStorage.getItem('user'));
  
    
  
  

  return (
    <div className="LivreElement">
        
        <div className="rowElement">
                <p>{libelleToUpdate}</p>
                <p>{auteursToUpdate}</p>
                <p>{editionToUpdate}</p>
                <p className="iconsOpr"><DetailsLivre libelle={libelleToUpdate}
                                                      auteur={auteursToUpdate}
                                                      edition = {editionToUpdate}
                                                      nbExemplaires = {nbExemplairesToUpdate} />
                                        <ModalEmpruntLivre id={id}
                                                      libelle={libelleToUpdate}
                                                      auteur={auteursToUpdate}
                                                      edition = {editionToUpdate}
                                                      nbExemplaires = {nbExemplairesToUpdate} 
                                                      toast={toast}
                                                      toastError={toastError}
                                                      fetchEmpruntsUser={fetchEmpruntsUser}
                                                      disponibilteLivre={disponibilteLivre}
                                                      emprunterLivre={emprunterLivre}/>              
                                        {userAuth.role==='admin' &&            
                                       <ModalUpdateLivre libelle={libelleToUpdate}
                                                          auteur={auteursToUpdate}
                                                          edition = {editionToUpdate}
                                                          nbExemplaires = {nbExemplairesToUpdate}
                                                          id={id}
                                                          toast={toast}
                                                          updateLivre={updateLivre} 
                                                      />}
                                        {userAuth.role==='admin' &&
                                        <ModalDeleteLivre deleteLivre={deleteLivre}
                                                          toast={toast}
                                                           id={id}/>}
                                        
                </p>
              </div>
              
            
            <div>
              
            </div>
    </div>
  );
}

export default LivreElement;