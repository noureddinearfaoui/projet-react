import React,{useState} from 'react';
import './EmpruntsDetails.css'
import {IoIosEye} from 'react-icons/io';
import { Button,Modal } from 'react-bootstrap';
import Emprunteur from '../emprunteur/Emprunteur'






function EmpruntsDetails({id,emprunts}) {
  
    const [show, setShow] = useState(false);
    const [LivreEmprunts, setLivreEmprunts] = useState(emprunts);
  
    
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
       

    const  LivreEmpruntsfunction =  () =>
    { 
       // const res = emprunts.filter(emprunt => emprunt.idLivre === id)
     //  setLivreEmprunts(emprunts)


    }
   
    
    
  //  LivreEmpruntsfunction()
    

    const  empruntRetard = (emprunt) =>
    { 
        const  datenow = new Date()
        
        const b = new Date(emprunt.dateFin)
        const c = Math.abs(datenow - b);
        const d =  Math.ceil(c / (1000 * 60 * 60 * 24));
       if (d<=15)
       return true
        else
        return false

    }
    

  return (
    <div className="EmpruntsDetails">
    <span  onClick={handleShow} className="icons "><IoIosEye/></span>

        <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                     <Modal.Title className="element">Detais livre</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                {emprunts.map(emprunt => (
                    <div>
                     <div className={`detailEmprunt ${!empruntRetard(emprunt) && "redeffet" }`}>
                         <div><span>date debut :</span> {emprunt.dateDebut}</div>
                         <div><span>date fin :</span> {emprunt.dateFin}</div>
                         
                    </div>
                    <Emprunteur idUser={emprunt.idUser} />
                    </div>
                    )
                    
                )}
                    
                </Modal.Body>
                
            </Modal>
    
    </div>
  );
}

export default EmpruntsDetails;