import React, { useState, memo } from "react"
import { Button,Modal } from 'react-bootstrap';
import { IoIosAddCircle} from 'react-icons/io';
import { IoIosAlert } from 'react-icons/io';
import { useForm } from 'react-hook-form'


import './LivreForm.css'

function LivreForm({livres,setLivres,toast}){
    const addLivre =  (libelle,auteur,edition,nombreExemplaires) =>{
      
       
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
    const [show, setShow] = useState(false);
    const [libelle, setLibelle] = useState("")
    const [auteur, setAuteur] = useState("")
    const [nbExemplaire, setnbExemplaire] = useState("")
    const [edition, setEdition] = useState("")
    

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { register, handleSubmit, errors } = useForm()
    const onSubmit = data => { 
        
        addLivre(libelle,auteur,edition,nbExemplaire);
        
        setShow(false);
        toast();
          }
          
    return(
        
        <div className="Livres ">
            <Button variant="success" onClick={handleShow}>
                <IoIosAddCircle/>
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                     <Modal.Title>Ajouter livre</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div className="form-group">
                            <input type="text" className="form-control" placeholder="Libelle*" 
                             name="libelle" onInput={e => setLibelle(e.target.value)}
                             ref={register({required:true, maxLength:100,minLength:3 })} />
                             {errors.libelle && <span className="text-danger text-error"><IoIosAlert/>Libelle est obligatoire </span>}
                </div>
                <div className="form-group">
                            <input type="text" className="form-control" placeholder="auteur*" 
                             name="auteur" onInput={e => setAuteur(e.target.value)}
                             ref={register({required:true, maxLength:100,minLength:3 })} />
                             {errors.auteur && <span className="text-danger text-error"><IoIosAlert/>l'auteur est obligatoire </span>}
                </div>
                <div className="form-group">
                            <input type="text" className="form-control" placeholder="Edition*" 
                             name="edition" onInput={e => setEdition(e.target.value)} 
                             ref={register({required:true, maxLength:100,minLength:3 })}/>
                             {errors.edition && <span className="text-danger text-error"><IoIosAlert/>l'edition est obligatoire </span>}
                             
                </div>
                <div className="form-group">
                            <input type="number" className="form-control" placeholder="Nombre d'exemplaire" 
                             name="nbEx" onInput={e => setnbExemplaire(e.target.value)} 
                             ref={register({required:true })}/>
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
    );
}
export default memo(LivreForm);
