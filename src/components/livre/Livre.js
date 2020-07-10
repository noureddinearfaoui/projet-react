import React, { memo } from "react";
import "./Livre.css";
import { Card, Button } from "react-bootstrap";
import DetailsLivre from "../detailsLivre/DetailsLivre";
import ModalEmpruntLivre from "../modalEmpruntLivre/ModalEmpruntLivre";

function Livre({ livre, toast, toastError, emprunts }) {
  return (
    <div className="Livre ">
      <Card className="cardLivre ">
        <Card.Img className="ImageLivre" variant="top" src={livre.image} />
        <Card.Body>
          <Card.Title>{livre.libelle}</Card.Title>
          <Card.Text>Cliquez pour emprunter ce livre ou voir détails</Card.Text>
          <ModalEmpruntLivre
            id={livre.id}
            libelle={livre.libelle}
            auteur={livre.auteur}
            edition={livre.edition}
            nbExemplaires={livre.nombreExemplaires}
            toast={toast}
            toastError={toastError}
            emprunts={emprunts}
          />
          <DetailsLivre
            libelle={livre.libelle}
            auteur={livre.auteur}
            edition={livre.edition}
            nbExemplaires={livre.nombreExemplaires}
          />
        </Card.Body>
      </Card>
    </div>
  );
}
export default memo(Livre);
