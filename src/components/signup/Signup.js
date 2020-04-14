import React, { useState, memo } from "react"
import './Signup.css'
import {inscription} from '../../services/user.service'
import { useForm } from 'react-hook-form'
import { IoIosAlert } from 'react-icons/io';
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
    const { register, handleSubmit, errors } = useForm()
    const onSubmit = data => { 
        inscrire();
          }
    
    return(
        
        <div className="Signup">
             <div className="login-form-1">
                    <h3>S' inscrire</h3>
                    <div className="form-group">
                            <input type="text" className={`form-control ${errors.nom  && "has-error " }`} placeholder="Nom*" 
                            onInput={e => setNom(e.target.value)} name="nom" 
                             ref={register({required:true, maxLength:100,minLength:4 })}/>
                            {errors.nom && <span className="text-danger text-error"><IoIosAlert/>votre nom est invalide </span>}
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Prenom *" 
                            onInput={e => setPrenom(e.target.value)} name="prenom" 
                             ref={register({ required:true,maxLength:100,minLength:4 })} />
                        {errors.prenom && <span className="text-danger text-error"><IoIosAlert/>votre prenom est invalide </span>}
                        </div>
                        <div className="form-group">
                            <input type="date" className="form-control" placeholder="Date de naissance *"
                            onInput={e => setDateN(e.target.value)}  name="dateN"  
                            ref={register({required:true })} />
                        {errors.dateN && <span className="text-danger text-error"><IoIosAlert/>la date de naissance est obligatoire </span>}
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Tel *" 
                            onInput={e => setTel(e.target.value)} name="tel"  
                            ref={register({ required:true,maxLength:100,minLength:4 })} />
                            {errors.tel && <span className="text-danger text-error"><IoIosAlert/>le numero est obligatoire </span>}
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Adresse *" 
                            onInput={e => setAdresse(e.target.value)}  name="adresse"  
                            ref={register({ required:true })} />
                        {errors.adresse && <span className="text-danger text-error"><IoIosAlert/>l'adresse est obligatoire </span>}
                        </div>
                    
                        <div className="form-group">
                            <input type="email" className="form-control" placeholder="Email *" 
                            onInput={e => setEmail(e.target.value)}  name="email"  
                            ref={register({ required:true })} />
                        {errors.email && <span className="text-danger text-error"><IoIosAlert/>l'email est obligatoire </span>}
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Password *" 
                            onInput={e => setPassword(e.target.value)}  name="password"  
                            ref={register({ required:true })} />
                            {errors.password && <span className="text-danger text-error"><IoIosAlert/>vérifier le mot de passe</span>}
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Password Confirm *" 
                            onInput={e => setpasswordConfirm(e.target.value)}  name="pswdconfirm" 
                             ref={register({ required:true })} />
                        {errors.pswdconfirm && <span className="text-danger text-error"><IoIosAlert/>vérifier le mot de passe </span>}
                        </div>
                
                        <div className="form-group">
                        <button className="btnSubmit"  onClick={handleSubmit(onSubmit)}>  Login
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



