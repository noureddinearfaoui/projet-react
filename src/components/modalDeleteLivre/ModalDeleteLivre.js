import React, { useState } from "react";
import "./ModalDeleteLivre.css";
import { IoMdTrash } from "react-icons/io";
import { Button, Modal } from "react-bootstrap";

function ModalDeleteLivre({ toast, id, livres, setLivres }) {
  const deleteLivre = (id) => {
    const newLivres = livres.filter((livre) => livre.id !== id);
    setLivres(newLivres);

    livres.map((livre) => console.log(livre));
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const supprimerLivre = () => {
    deleteLivre(id);
    setShow(false);
    toast();
  };

  return (
    <div className="ModalDeleteLivre">
      <span onClick={handleShow} className="icons iconDelete">
        <IoMdTrash />
      </span>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="element">Details livre</Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={supprimerLivre}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalDeleteLivre;
