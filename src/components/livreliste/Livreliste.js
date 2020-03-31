import React from 'react';
import './Livreliste.css'
import { IoIosArrowDropupCircle} from 'react-icons/io';
import LivreForm from '../LivreForm/LivreForm'
import LivrElement from '../livreElement/LivreElement'





function Livreliste({addLivre,livres,deleteLivre,updateLivre}) {
 
 

  return (
    <div className="Livreliste">
        <div className="table-title">
                <div className="row">
                    <div className="col-sm-6">
						          <h2>Manage <b>Employees</b></h2>
					      </div>
					      <div className="col-sm-6 ">
                  <div className="row">
                    <div className="col-lg-3 col-md-3">
                      <button id="btnshow" className="btn btn-danger"><IoIosArrowDropupCircle/></button>
                    </div>
                    <div className = "col-lg-3 col-md-3">
                       <LivreForm addLivre={addLivre} />                
                    </div>
                   </div>
                </div>
                </div>
        </div>  
        <div className="contenu">
            <div className="headerContenu">
              <p>Name</p>
              <p>Name</p>
              <p>Name</p>
              <p>Name</p>
            </div>
            <div className="BodyContenu">
            {livres.map(livre => (
              <LivrElement 
                id = {livre.id}
                libelle = {livre.libelle}
                auteur={livre.auteur}
                edition={livre.edition}
                deleteLivre={deleteLivre}
                nbExemplaires={livre.nombreExemplaires}
                updateLivre={updateLivre}>
                
              </LivrElement>))}
            </div>
         
        </div>
    
    </div>
  );
}

export default Livreliste;