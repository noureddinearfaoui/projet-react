import Axios from 'axios'

export const fetchUser = async () => {
  // 
  const result = await Axios.get(
    "http://localhost:3003/users", 
  )
    return result

}
export const banni = async (id,value) => {
  // 
  const result = await Axios.get(
    "http://localhost:3003/banni/"+id, { 'headers': { 'value': value } }
  )
    return result

}

 const users = [
    {
      id: "1",
      nom: "noureddine",
      prenom: "arfaoui",
      email: "noureddine",
      password:"arfa",
      adresse: "beginner",
      tel: "05/04/2020",
      dateNaissance:"05/04/2200",
      role:"admin",
      banni:false
    },
    {
      id: "2",
      nom: "marwen",
      prenom: "hanzouli",
      email: "marwen",
      password:"hanzouli",
      adresse: "beginner",
      tel: "05/04/2020",
      dateNaissance:"05/04/2200",
      role:"user",
      banni:true
    },
    {
      id: "3",
      nom: "noureddine",
      prenom: "arfaoui",
      email: "noureddine",
      password:"arfa",
      adresse: "beginner",
      tel: "05/04/2020",
      dateNaissance:"05/04/2200",
      role:"user",
      banni:false
    }
  ]
  
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
  export const fetchUsers =  () => {
  
    // return tasks
    let resultat =  users.filter(user => user.role ==="user")
    return resultat;
  }
  /*export const fetchTaskById=async(taskId)=>{
    await delay(500)
    return tasks.find(task => task.id===taskId)
  }
  
  export const fetchTasks = async searchValue => {
    await delay(500)
    // return tasks
    return tasks.filter(task => task.title.includes(searchValue))
  }
  */
 export const findUserById =  (idUser)=>
 { 
  const userFind = users.find(user => user.id===idUser);
  return userFind;
 }
 export const authentification = async (email,password)=>
 {      
  return new Promise(function (resolve, reject) {
          let userFind = users.find(user => user.email===email&&user.password===password)
      if (userFind === undefined) {
        reject("votre email et votre password sont incorrecte");
        }
      else {

        if(userFind.role==="admin")
           resolve(userFind)
        else
        {
             if(userFind.banni===true)
               reject("vous étes banni :)");
              else
                resolve(userFind)
        }
       }
  });
}
export const inscription = async (nom,prenom,dateN,
                                  tel,adresse,email,
                                   password) =>
{
  
    return new Promise(function(resolve){ 
      users.push({
        id: users.length+1,
        nom: nom,
        prenom: prenom,
        email: email,
        password:password,
        adresse: adresse,
        tel: tel,
        dateNaissance:dateN,
        role:"user",
        banni:false
      });
      console.log(users);
      resolve("l'opération bien réussi")
    })


  }