import React from 'react';
import './Livre.css'
import { IoIosAddCircle,IoIosArrowDropupCircle } from 'react-icons/io';



function Livre({livre}) {
  return (
    <div className="Livre">
        <div class="table-title">
                <div class="row">
                    <div class="col-sm-6">
						          <h2>Manage <b>Employees</b></h2>
					      </div>
					      <div class="col-sm-6 ">
                  <div class="row">
                    <button id="btnshow" className="btn btn-danger col-lg-4 "><IoIosArrowDropupCircle/>show List</button>
                    <br/>
                    <button className="btn btn-success col-lg-6"><IoIosAddCircle/>Ajouter un nouveau livre</button>
                   </div>
                </div>
                </div>
        </div>  
        <div className="contenu">
            <div className="headerContenu">
              < p>Name</p>
              < p>Name</p>
              < p>Name</p>
              < p>Name</p>
              

            </div>
         
        </div>
    
    </div>
  );
}

export default Livre;