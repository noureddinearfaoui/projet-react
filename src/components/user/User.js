import React, {useState,memo} from 'react';
import './User.css'
//import {IoIosAlert,IoMdTrash,IoIosBrush,IoMdColorWand} from 'react-icons/io';
 //import { Button,Modal } from 'react-bootstrap';


 import { AiFillPlusSquare,AiFillMinusSquare } from 'react-icons/ai';
 
 

  






function User({user,users,banni}) {
   
 alert(user.banni)
    
    const EventbanniFalse = ()=>{
     
      banni(user.id,false)
       
      }
      const EventbanniTrue = ()=>{
        
        banni(user.id,true)
         
        }
  
  
  

  return (
    <div className="User">
        
        
        <div  className={`rowElement ${user.banni === true && "red" }`}>
                <div>{user.nom}</div>
                <div>{user.prenom}</div>
                <div>
                {user.banni === true
                     ? <AiFillMinusSquare className="remove iconbani" onClick={EventbanniFalse} />
                     : <AiFillPlusSquare className="add iconbani"   onClick={EventbanniTrue}/>
                }
               
                </div>
                
                
              
              
            
           
              
        </div>
    </div>
  );
}

export default memo(User);