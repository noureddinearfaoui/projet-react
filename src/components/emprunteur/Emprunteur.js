import React,{useState} from 'react';
import './Emprunteur.css'
import {findUserById} from '../../services/user.service'








function Emprunteur({idUser}) {
  
    const [emprunteur] = useState(findUserById(idUser));
       


  return (
    <div className="Emprunteur">
        <div >
            <span>emprunter par: </span>{emprunteur.nom} {emprunteur.prenom}
        </div>
    </div>
  );
}

export default Emprunteur;