import React, { useState } from "react";
import "./EmpruntsDetails.css";
import { IoIosEye } from "react-icons/io";
import { Modal } from "react-bootstrap";
import Emprunteur from "../emprunteur/Emprunteur";

function EmpruntsDetails({ id, emprunts }) {
  const [show, setShow] = useState(false);
  //  const [LivreEmprunts, setLivreEmprunts] = useState(emprunts);

  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //  LivreEmpruntsfunction()

  const empruntRetard = (emprunt) => {
    const datenow = new Date();

    const b = new Date(emprunt.dateFin);
    const c = Math.abs(datenow - b);
    const d = Math.ceil(c / (1000 * 60 * 60 * 24));
    if (d <= 15) return true;
    else return false;
  };

  return (
    <div className="EmpruntsDetails">
      <span onClick={handleShow} className="icons ">
        <IoIosEye />
      </span>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="element">Details emprunts</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {emprunts.map(
            (emprunt) =>
              emprunt.idLivre == id && (
                <div key={emprunt.id}>
                  <div
                    className={`detailEmprunt ${
                      !empruntRetard(emprunt) && "redeffet"
                    }`}
                  >
                    <div>
                      <span>date debut :</span> {emprunt.dateDebut}
                    </div>
                    <div>
                      <span>date fin :</span> {emprunt.dateFin}
                    </div>
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
