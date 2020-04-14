import React,{useState} from 'react';
import './ModalUpdateLivre.css'
import {IoIosBrush,IoIosAlert} from 'react-icons/io';
import { Button,Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form'





function ModalUpdateLivre({libelle,auteur,
                           edition,id,
                           nbExemplaires,toast,livres,setLivres}) {
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
                          
  
  
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [libelleToUpdate, setLibelle] = useState(libelle)
    const [auteursToUpdate, setAuteur] = useState(auteur)
    const [nbExemplairesToUpdate, setnbExemplaire] = useState(nbExemplaires)
    const [editionToUpdate, setEdition] = useState(edition)
    const { register, handleSubmit, errors } = useForm()
    const onSubmit = data => { 
      
        updateLivre(id,libelleToUpdate,
                     auteursToUpdate,editionToUpdate,
                     nbExemplairesToUpdate);
                    console.log(libelleToUpdate+"lib") 
                     
        setShow(false);
        toast();
       
          }
 

  return (
    <div className="ModalUpdateLivre">
        <span onClick={handleShow}  data-original-title="Edit" className="icons iconEdit"><IoIosBrush/></span>
        <div className="ModalUpdate">
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                     <Modal.Title>Ajouter livre</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div className="form-group">
                            <input type="text" className="form-control" placeholder="Libelle*" 
                             name="libelle" onInput={e => setLibelle(e.target.value)}
                             ref={register({required:true, maxLength:100,minLength:3 })}
                             value = {libelleToUpdate} />
                             {errors.libelle && <span className="text-danger text-error"><IoIosAlert/>Libelle est obligatoire </span>}
                </div>
                <div className="form-group">
                            <input type="text" className="form-control" placeholder="auteur*" 
                             name="auteur" onInput={e => setAuteur(e.target.value)}
                             ref={register({required:true, maxLength:100,minLength:3 })} 
                             value = {auteursToUpdate}/>
                             {errors.auteur && <span className="text-danger text-error"><IoIosAlert/>l'auteur est obligatoire </span>}
                </div>
                <div className="form-group">
                            <input type="text" className="form-control" placeholder="Edition*" 
                             name="edition" onInput={e => setEdition(e.target.value)} 
                             ref={register({required:true, maxLength:100,minLength:3 })}
                             value = {editionToUpdate}/>
                             {errors.edition && <span className="text-danger text-error"><IoIosAlert/>l'edition est obligatoire </span>}
                             
                </div>
                <div className="form-group">
                            <input type="number" className="form-control" placeholder="Nombre d'exemplaire" 
                             name="nbEx" onInput={e => setnbExemplaire(e.target.value)} 
                             ref={register({required:true })}
                             value = {nbExemplairesToUpdate}/>
                             {errors.nbEx && <span className="text-danger text-error"><IoIosAlert/>le Nombre d'exemplaire est obligatoire </span>}
                
                </div>

                </Modal.Body>
                <Modal.Footer>
                          <Button variant="secondary" onClick={handleClose}>
                              Close
                          </Button>
                          <Button variant="primary" onClick={handleSubmit(onSubmit)}>
                           Add
                          </Button>
                </Modal.Footer>
            </Modal>
            </div>
    
    </div>
  );
}

export default ModalUpdateLivre;