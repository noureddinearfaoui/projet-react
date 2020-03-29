import React from 'react';
import './Livreliste.css'
import { IoIosAddCircle,IoIosArrowDropupCircle ,
         IoMdTrash,IoIosBrush,IoMdColorWand} from 'react-icons/io';



function Livreliste({livre}) {
  return (
    <div className="Livreliste">
        <div className="table-title">
                <div className="row">
                    <div className="col-sm-6">
						          <h2>Manage <b>Employees</b></h2>
					      </div>
					      <div className="col-sm-6 ">
                  <div className="row">
                    <button id="btnshow" className="btn btn-danger col-lg-4 "><IoIosArrowDropupCircle/>show List</button>
                    <br/>
                    <button className="btn btn-success col-lg-6"><IoIosAddCircle/>Ajouter un nouveau livre</button>
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
              <div className="rowElement">
                <p>Name</p>
                <p>Name</p>
                <p>Name</p>
                <p className="iconsOpr"><span className="icons"><IoMdColorWand/></span>
                                        <span data-original-title="Edit" className="icons iconEdit"><IoIosBrush/></span>
                                        <span className="icons iconDelete"><IoMdTrash/></span>
                                        
                </p>
              </div>
            </div>
         
        </div>
    
    </div>
  );
}

export default Livreliste;