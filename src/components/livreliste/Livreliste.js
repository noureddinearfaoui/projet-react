import React, { useState, memo } from "react";
import "./Livreliste.css";

import LivreForm from "../LivreForm/LivreForm";
import LivrElement from "../livreElement/LivreElement";
import { ToastsContainer, ToastsStore } from "react-toasts";
import FormSearchLivre from "../formSearchLivre/FormSearchLivre";
import Livre from "../livre/Livre";

function Livreliste({
  livres,
  emprunts,
  setLivres,
  findLivreById,
  fetchLivres,
  user,
  updateLivre
}) {
  const [loding] = useState(true);
  //  console.log(livres+"liste")
  livres.map((livre) => console.log(livre.libelle));
  

  const toast = (msg = null) => {
    if (msg === null) ToastsStore.success("Hey, success!");
    else ToastsStore.success("Hey!" + msg);
  };
  const toastError = (msg = null) => {
    if (msg === null) ToastsStore.error("Hey, error!");
    else ToastsStore.error("Hey!" + msg);
  };

  //const userAuth = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="Livreliste">
      <ToastsContainer store={ToastsStore} />
      <div className="table-title">
        <div className="row">
          <div className="col-lg-9 col-md-9 col-sm-12">
            <FormSearchLivre
              livres={livres}
              findLivreById={findLivreById}
              setLivres={setLivres}
              fetchLivres={fetchLivres}
            />
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12 ">
          {user.role =="admin" &&
            <LivreForm livres={livres} setLivres={setLivres} toast={toast} />}
          </div>
        </div>
      </div>
      <div className="contenu">
        {user.role =="admin" &&
        <div className="headerContenu">
          <p>Livre</p>
          <p>Libelle</p>
          <p>Auteur</p>
          <p>Edition</p>
          <p>nbExemplaires</p>
          <p>-</p>
        </div>}
        <div className="BodyContenu">
          {user.role === "admin"
            ? livres.map((livre) => (
                <LivrElement
                  key={livre.id}
                  livre={livre}
                  toast={toast}
                  toastError={toastError}
                  emprunts={emprunts}
                  livres={livres}
                  setLivres={setLivres}
                  updateLivre={updateLivre}
                ></LivrElement>
              ))
            : livres.map((livre) => (
                <Livre
                  key={livre.id}
                  livre={livre}
                  nbExemplaires={livre.nombreExemplaires}
                  toast={toast}
                  toastError={toastError}
                  emprunts={emprunts}
                  livres={livres}
                  setLivres={setLivres}
                  
                ></Livre>
              ))}
        </div>
      </div>
    </div>
  );
}

export default memo(Livreliste);
