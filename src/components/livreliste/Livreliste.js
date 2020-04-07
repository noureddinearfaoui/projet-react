import React,{useState} from 'react';
import './Livreliste.css'
import { IoIosArrowDropupCircle} from 'react-icons/io';
import LivreForm from '../LivreForm/LivreForm'
import LivrElement from '../livreElement/LivreElement'
import { ToastsContainer,ToastsStore} from 'react-toasts';





function Livreliste({addLivre,livres,deleteLivre,
                     updateLivre,fetchEmpruntsUser,
                     disponibilteLivre,emprunterLivre}) {
  const toast = (msg=null) =>
    {
          if(msg===null)
          ToastsStore.success("Hey, success!");
          else
          ToastsStore.success("Hey!"+msg);
           
    } 
  const toastError = (msg=null) =>
    {
          if(msg===null)
          ToastsStore.error("Hey, error!");
          else
          ToastsStore.error("Hey!"+msg);
           
    } 
  
  
  const userAuth = JSON.parse(localStorage.getItem('user'));
 

  return (
    <div className="Livreliste">
              

        <ToastsContainer store={ToastsStore}/>
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
                       <LivreForm addLivre={addLivre} toast={toast} />                
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
                updateLivre={updateLivre}
                toast={toast}
                toastError={toastError}
                fetchEmpruntsUser={fetchEmpruntsUser}
                emprunterLivre={emprunterLivre}
                disponibilteLivre={disponibilteLivre}>
                
              </LivrElement>))}
            </div>
         
        </div>
    
    </div>
  );
}

export default Livreliste;