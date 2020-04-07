import React, {useState, memo } from "react"
import './Signin.css'
import {authentification} from '../../services/user.service'

import {
    Redirect
    
  } from "react-router-dom";


function Signin(){
    const [email, setEmail] = useState("")
    const [danger, setDanger] = useState(false)
    const [errors, setErrors] = useState("")
    const [password, setPassword] = useState("")
    const [redirect, setredirect] = useState(false)

  
 const Login = () =>{
    
    
    authentification(email,password).then(( result) => {
        console.log(result); // "Tout est OK!"
        localStorage.clear();
        localStorage.setItem('user', JSON.stringify(result));
        setredirect(true)
    }, function (err) {
        console.log(err); // Error: "Hmm c'est embêtant…"
        setErrors(err);
        setDanger(true);
    });
 

 }
    return(
        
        <div className="Signin">

            {redirect&& <Redirect to='/'/>}
            {danger &&
            <div className="alert alert-danger">
            <strong>Danger!</strong>{errors}
          </div>
           }

           
                <div className="login-form-1">
                    <h3>S'identifier</h3>
                    
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Your Email *" 
                            onInput={e => setEmail(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Your Password *" 
                            onInput={e => setPassword(e.target.value)}  />
                        </div>
                        <div className="form-group">
                        <button className="btnSubmit"  onClick={Login}>  Login
                            </button>
                        </div>
                        <div className="form-group">
                            <a href="#" className="ForgetPwd">Forget Password?</a>
                        </div>
                    
                </div>
       </div>
    );
}
export default memo(Signin);
