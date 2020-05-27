

const emprunts = [
  { id: 1, 
    idUser: "1", 
    idLivre: "1",
    dateDebut: "2020-04-08", 
    dateFin: "2020-04-11",
    remettre:false

  },
  { id: 1, 
    idUser: "3", 
    idLivre: "3",
    dateDebut: "2020-04-08", 
    dateFin: "2020-04-11",
    remettre:false

  },
  { id: 1, 
    idUser: "2", 
    idLivre: "2",
    dateDebut: "2020-04-08", 
    dateFin: "2020-04-11",
    remettre:false

  }]
  export const fetchEmpruntsUser=async(idUser)=>{
   
    
    return new Promise(function(resolve,reject){
      const result = emprunts.filter(emprunt => emprunt.idUser==idUser)

       resolve(result)


    })

}
export const findAllEmprunts=()=>{
   
    
  return new Promise(function(resolve,reject){
    resolve(emprunts)


  })
}