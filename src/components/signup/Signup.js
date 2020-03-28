import React, { useState, memo } from "react"
import './Signup.css'
import {inscription} from '../../services/user.service'
function Signup(){
    
    const [nom, setNom] = useState("")
    const [prenom, setPrenom] = useState("")
    const [dateN, setDateN] = useState("")
    const [tel, setTel] = useState("")
    const [adresse, setAdresse] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setpasswordConfirm] = useState("")

    const inscrire = async () =>
    {  
        const result = await inscription(nom,prenom,dateN,
                                         tel,adresse,email,
                                         password);
      
    }
    return(
        
        <div className="Signup">
             <div className="login-form-1">
                    <h3>S' inscrire</h3>
                    <div className="form-group">
                            <input type="text" className="form-control" placeholder="Nom*" 
                            onInput={e => setNom(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Prenom *" 
                            onInput={e => setPrenom(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <input type="date" className="form-control" placeholder="Date de naissance *" 
                            onInput={e => setDateN(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Tel *" 
                            onInput={e => setTel(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Adresse *" 
                            onInput={e => setAdresse(e.target.value)} />
                        </div>
                    
                        <div className="form-group">
                            <input type="email" className="form-control" placeholder="Email *" 
                            onInput={e => setEmail(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Password *" 
                            onInput={e => setPassword(e.target.value)}  />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Password Confirm *" 
                            onInput={e => setpasswordConfirm(e.target.value)}  />
                        </div>
                
                        <div className="form-group">
                        <button className="btnSubmit"  onClick={inscrire}>  Login
                            </button>
                        </div>
                        <div className="form-group">
                            <a href="#" className="ForgetPwd">S'identifier</a>
                        </div>
                    
                </div>
       </div>
    );
}
export default memo(Signup);



