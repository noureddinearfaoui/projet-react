import React,{useState} from 'react';
import './DetailsLivre.css'
import {IoMdColorWand} from 'react-icons/io';
import { Modal } from 'react-bootstrap';





function DetailsLivre({libelle,auteur,
                      edition,nbExemplaires}) {
  
  
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
 

  return (
    <div className="DetailsLivre">
        <span onClick={handleShow} className="icons"><IoMdColorWand/></span>
        <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                     <Modal.Title className="element">Detais livre</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                  <p> <span className="element">Libelle : </span>{libelle} </p>
                  <p> <span className="element">Auteur : </span>{auteur} </p>
                  <p> <span className="element">Edition : </span>{edition} </p>
                  <p> <span className="element">Nombre Exemplaire : </span>{nbExemplaires} </p>
                  </div>
                </Modal.Body>
               
            </Modal>
    
    </div>
  );
}

export default DetailsLivre;