import React, { useState } from "react";
import "./livreEmprunte.css";
import { findUserById } from "../../services/user.service";
import {fetchLivreById} from "../../services/livre.service"

function LivreEmprunte({ idUser ,idLivre}) {
  const [emprunteur] = useState(findUserById(idUser));
  const [livre] = useState(fetchLivreById(idLivre));
console.log(livre)
  return (
    <div className="Emprunteur">
      <div>
        <span> {livre.libelle} est emprunté par: </span>
        {emprunteur.nom} {emprunteur.prenom}
      </div>
    </div>
  );
}

export default LivreEmprunte;
