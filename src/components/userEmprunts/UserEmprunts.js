import React,{useState,useEffect} from 'react';
import './UserEmprunts.css'
import {IoIosEye} from 'react-icons/io';
import { Modal } from 'react-bootstrap';
import Emprunteur from '../emprunteur/Emprunteur'

import {fetchEmpruntsUser} from '../../services/emprunt.service'




function UserEmprunts({id,user}) {
  
    const [show, setShow] = useState(false);
    const [emprunts, setemprunts] = useState([]);
    useEffect(() => {
        const fetchdata = async ()=>{
       
            const result = await fetchEmpruntsUser(user.id);
            alert(user.id)
            console.log(result)
            
            setemprunts(result)
     
        }
        fetchdata()
       }, [])
   
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
       

   
    
    
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
                  
                    <div key={emprunt.id}>
                     <div className={`detailEmprunt ${!empruntRetard(emprunt) && "redeffet" }`}>
                         <div><span>date debut :</span> {emprunt.dateDebut}</div>
                         <div><span>date fin :</span> {emprunt.dateFin}</div>
                         
                    </div>
                    <Emprunteur idUser={emprunt.idUser}  />
                    </div>
                    )
                    
                )}
                    
                </Modal.Body>
                
            </Modal>
    
    </div>
  );
}

export default UserEmprunts;