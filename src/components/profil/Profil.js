import React, {useState,memo} from 'react';

import './Profil.css'


import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

 
 

  






function Profil() {
   
    const [file, setFile] = useState("")
    const [loadingPercent, setloadingPercent] = useState(0)
    const [image, setImage] = useState("#")
  
    const charger=()=>
    {
        let i = 0;
        while(i<100)
        {setTimeout(function(i){ i+=5; }, 3000);
        // i=i+5;
         setloadingPercent(i)
        }
    }

  const AppliquerImage=()=>
  { charger()
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => setImage(reader.result);
    reader.onerror=()=>alert("errpr");
    
  }
  
/*<input type="file" name="file" onChange={e => setFile(e.target.files[0])}/>
        <button onClick={submitForm}>submit</button>
        <img src={image}  ></img>*/
  return (
    <div className="Profil container-fluid">
       < Progress type="circle" percent={loadingPercent} status="success" />
        <div className="row">
        <div className="col-lg-4">
                  <div className="">
  		                <div className="">
                             <div className="text-center">
                                <img src={image} className="avatar   img-circle" alt="avatar"/>
                                <h6>Upload a different photo...</h6>
                                 <input type="file" className="text-center center-block file-upload" onChange={e => setFile(e.target.files[0])}/>
                               <div className="btns">
                               <button class="btn btn-lg btn-primary btnMargin" type="submit" onClick={AppliquerImage}>Appliquer</button>
                               <button class="btn btn-lg btn-danger btnMargin" id="btn" type="submit">Save</button>
                               </div>
                             </div>
   
                        </div>
                     </div>
        </div>
        <div className="col-lg-8">
        <div className="card text-center">
              <div className="card-header">
                   <ul className="nav nav-tabs card-header-tabs">
                         <li className="nav-item">
                             <a className="nav-link active" href="#">Active</a>
                         </li>
      
                    </ul>
                </div>
                <div className="card-body">
                    <div className="row">
                     <div className="form-group col-lg-6">
                          
                          <div class="">
                              <label for="first_name"><h4>Nom</h4></label>
                              <input type="text" className="form-control" name="nom" id="nom" placeholder="Nom" />
                          </div>
                      </div>
                      <div className="form-group col-lg-6">
                          
                          <div class="">
                              <label for="first_name"><h4>Prenom</h4></label>
                              <input type="text" className="form-control" name="Prenom" id="prenom" placeholder="Prenom" />
                          </div>
                      </div>
                      </div>
                      <div className="row">
                     <div className="form-group col-lg-6">
                          
                          <div class="">
                              <label for="first_name"><h4>Tel</h4></label>
                              <input type="text" className="form-control" name="tel" id="tel" placeholder="Tel" />
                          </div>
                      </div>
                      <div className="form-group col-lg-6">
                          
                          <div class="">
                              <label for="first_name"><h4>Adresse</h4></label>
                              <input type="text" className="form-control" name="adresse" id="adresse" placeholder="Adresse" />
                          </div>
                      </div>
                      </div>
                      <div className="row">
                     <div className="form-group col-lg-6">
                          
                          <div class="">
                              <label for="first_name"><h4>Email</h4></label>
                              <input type="email" className="form-control" name="email" id="email" placeholder="Email" />
                          </div>
                      </div>
                      <div className="form-group col-lg-6">
                          
                          <div class="">
                              <label for="first_name"><h4>Date de naissance</h4></label>
                              <input type="date" className="form-control" name="dateN" id="dateN" placeholder="PdateNrenom" />
                          </div>
                      </div>
                      </div>
                      <div className="row">
                     <div className="form-group col-lg-6">
                          
                          <div class="">
                              <label for="first_name"><h4>Nouveau Password</h4></label>
                              <input type="text" className="form-control" name="password" id="password" placeholder="Nouveau Password" />
                          </div>
                      </div>
                      <div className="form-group col-lg-6">
                          
                          <div class="">
                              <label for="first_name"><h4>Ancien Password</h4></label>
                              <input type="text" className="form-control" name="apassword" id="apassword" placeholder="Ancien Password" />
                          </div>
                      </div>
                      </div>
                      <button class="btn btn-lg btn-success" type="submit">Save</button>
                      
                </div>
        </div>
        </div>
        </div>
     
    </div>
  );
}

export default memo(Profil);