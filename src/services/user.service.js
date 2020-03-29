const users = [
    {
      id: "1",
      nom: "Learn html",
      prenom: 60,
      email: "noureddine",
      password:"arfa",
      adresse: "beginner",
      tel: "05/04/2020",
      dateNaissance:"05/04/2200",
      role:"user",
      banni:true
    },
    {
        id: "1",
        nom: "Learn html",
        prenom: 60,
        email: "beginner",
        adresse: "beginner",
        tel: "05/04/2020",
        dateNaissance:"05/04/2200",
        role:"user",
        banni:true
      }
  ]
  
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
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