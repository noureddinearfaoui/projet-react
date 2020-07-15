import React, { useState, memo } from "react";
import "./LivreElement.css";
//import {IoIosAlert,IoMdTrash,IoIosBrush,IoMdColorWand} from 'react-icons/io';
//import { Button,Modal } from 'react-bootstrap';

import DetailsLivre from "../detailsLivre/DetailsLivre";
import ModalDeleteLivre from "../modalDeleteLivre/ModalDeleteLivre";
import ModalUpdateLivre from "../modalUpdateLivre/ModalUpdateLivre";
import ModalEmpruntLivre from "../modalEmpruntLivre/ModalEmpruntLivre";
import EmpruntsDetails from "../empruntsDetails/EmpruntsDetails";
import { IoIosApps } from "react-icons/io";

function LivreElement({
  livre,
  toast,
  toastError,
  emprunts,
  livres,
  setLivres,
  updateLivre
}) {
  const [libelleToUpdate] = useState(livre.libelle);
  const [auteursToUpdate] = useState(livre.auteur);
  const [nbExemplairesToUpdate] = useState(livre.nombreExemplaires);
  const [editionToUpdate] = useState(livre.edition);
  const [image] = useState(livre.image);

  const userAuth = JSON.parse(sessionStorage.getItem("user"));

  const remettreLivre = () => {
    var res = emprunts.findIndex((emprunt) => !emprunt.remettre);
    if (res === -1) toastError("déja archivé");
    else {
      toast("Hey success");
      emprunts[res].remettre = true;
    }
  };

  return (
    <div className="LivreElement">
      <div className="rowElement">
        <div>
          <img src={image} className="imgLivre" alt="avatar" />
        </div>
        <div>{libelleToUpdate}</div>
        <div>{auteursToUpdate}</div>
        <div>{editionToUpdate}</div>
        <div>{nbExemplairesToUpdate}</div>
        <div className="iconsOpr">
          <span onClick={remettreLivre} className="icons icon">
            <IoIosApps />
          </span>
          <ModalEmpruntLivre
            id={livre.id}
            libelle={libelleToUpdate}
            auteur={auteursToUpdate}
            edition={editionToUpdate}
            nbExemplaires={nbExemplairesToUpdate}
            toast={toast}
            toastError={toastError}
            emprunts={emprunts}
            idUser= {userAuth.id}
          />

          <EmpruntsDetails id={livre.id} emprunts={emprunts} />
          <DetailsLivre
            libelle={libelleToUpdate}
            auteur={auteursToUpdate}
            edition={editionToUpdate}
            nbExemplaires={nbExemplairesToUpdate}
          />

          {userAuth.role === "admin" && (
            <ModalUpdateLivre
              libelle={libelleToUpdate}
              auteur={auteursToUpdate}
              edition={editionToUpdate}
              nbExemplaires={nbExemplairesToUpdate}
              id={livre.id}
              toast={toast}
              livres={livres}
              setLivres={setLivres}
              imageProp={image}
              updateLivre={updateLivre}
            />
          )}
          {userAuth.role === "admin" && (
            <ModalDeleteLivre
              toast={toast}
              id={livre.id}
              livres={livres}
              setLivres={setLivres}
            />
          )}
        </div>
      </div>

      <div></div>
    </div>
  );
}

export default memo(LivreElement);
