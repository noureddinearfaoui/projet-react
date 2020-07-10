import React, { useState } from "react";
import "./ModalEmpruntLivre.css";
import { IoMdBook } from "react-icons/io";
import { Button, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { IoIosAlert } from "react-icons/io";

function ModalEmpruntLivre({
  libelle,
  auteur,
  edition,
  nbExemplaires,
  id,
  toast,
  toastError,
  emprunts,
}) {
  const [dateDebut, setDateDebut] = useState("");
  const [dateFin, setDateFin] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const emprunterLivre = (idUser, idLivre, dateDebut, dateFin) => {
    emprunts.push({
      id: emprunts.length + 1,
      idUser,
      idLivre,
      dateDebut,
      dateFin,
      remettre: false,
    });
    emprunts.map((emprunt) => console.log(emprunt));
  };

  const fetchEmpruntsUser = (idUser) => {
    const result = emprunts.filter(
      (emprunt) => emprunt.idUser === idUser && emprunt.remettre === false
    );
    return result;
  };

  const disponibilteLivre = (idLivre) => {
    const result = emprunts.filter(
      (emprunt) => emprunt.idLivre === idLivre && emprunt.remettre === false
    );

    return result;
  };
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    let res = fetchEmpruntsUser("1");
    if (res.length >= 2)
      toastError("vous ne pouvez pas emprunter plus que deux livre");
    else {
      res = disponibilteLivre(id);
      if (res.length > 0) toastError("ce livre est emprunté déja");
      else {
        emprunterLivre("1", id, dateDebut, dateFin);
      }
    }

    handleClose();
  };

  return (
    <div className="DetailsLivre">
      <span onClick={handleShow} className="icons icon">
        <IoMdBook />
      </span>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="element">
            Voulez-vous emprunter ce livre ?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <p>
              {" "}
              <span className="element">Libelle : </span>
              {libelle}{" "}
            </p>
            <p>
              {" "}
              <span className="element">Auteur : </span>
              {auteur}{" "}
            </p>
            <p>
              {" "}
              <span className="element">Edition : </span>
              {edition}{" "}
            </p>
            <p>
              {" "}
              <span className="element">Nombre Exemplaire : </span>
              {nbExemplaires}{" "}
            </p>
          </div>
          <div>
            <div className="form-group">
              <input
                type="date"
                className="form-control"
                placeholder="Date de naissance *"
                onInput={(e) => setDateDebut(e.target.value)}
                name="dateDebut"
                ref={register({ required: true })}
              />
              {errors.dateDebut && (
                <span className="text-danger text-error">
                  <IoIosAlert />
                  la date de début est obligatoire ?{" "}
                </span>
              )}
            </div>
            <div className="form-group">
              <input
                type="date"
                className="form-control"
                placeholder="Date de naissance *"
                onInput={(e) => setDateFin(e.target.value)}
                name="dateFin"
                ref={register({ required: true })}
              />
              {errors.dateFin && (
                <span className="text-danger text-error">
                  <IoIosAlert />
                  la date de fin est obligatoire ?{" "}
                </span>
              )}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleSubmit(onSubmit)}>
            Emprunter
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalEmpruntLivre;
