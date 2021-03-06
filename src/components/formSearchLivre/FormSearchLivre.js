import React, { useState, memo } from "react";
import { IoMdSearch } from "react-icons/io";

import "./FormSearchLivre.css";

function FormSearchLivre({
  livres,
  setLivres,
  toast,
  fetchLivres,
  findLivreById,
}) {
  const [inputSearch, setInputSearch] = useState("");
  const [selectOption, setselectOption] = useState("");
  const [selectauteur, setselectAuteur] = useState("");
  const  auteurs = ["auteur1","auteur2","auteur3"] 
  const search = () => {
   // alert(selectOption);
    switch (selectOption) {
      case "id":
        
        findLivreById(inputSearch);
        break;
      case "libelle":
        fetchLivres(inputSearch,"libelle");
        break;
        case "auteur":
         
          fetchLivres(selectauteur,"auteur");
          break;
      default:
        setLivres([]);
    }
  };

  return (
    <div className="FormSearchLivre row">
      <div className="col-lg-3  col-md-3 col-sm-12">
        <select
          className=" form-control"
          onChange={(e) => setselectOption(e.target.value)}
        >
          <option value="" disabled selected>Options</option>
          <option value="id">id</option>
          <option value="libelle">libelle</option>
          <option value="auteur">auteur</option>
        </select>
      </div>
      <div className="col-lg-3  col-md-3 col-sm-12">
        <select
          className=" form-control"
          onChange={(e) => setselectAuteur(e.target.value)}
        >
           <option value="" disabled selected>Auteur</option>
         {auteurs.map((auteur) => 
          
          <option value={auteur} >{auteur}</option>
          
          )}
        </select>
      </div>
      <div className="inputSearch  col-lg-3 col-md-3 col-sm-12">
        <input
          type="text"
          placeholder="search"
          className="form-control"
          name="inputSearch"
          onInput={(e) => setInputSearch(e.target.value)}
        />
      </div>
      <div className="col-lg-3 col-md-3 col-sm-12 ">
        <button
          data-testid="SearchLivre"
          id="btnshow"
          className="btn btn-danger"
          onClick={search}
        >
          <IoMdSearch />
        </button>
      </div>
    </div>
  );
}
export default memo(FormSearchLivre);
