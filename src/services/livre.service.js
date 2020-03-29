import { func } from "prop-types"

const livres = [
    {
      id: "1",
      libelle: "Learn html",
      auteur: 60,
      edition: "noureddine",
      nombreExemplaires:4,
    },
    {
        id: "1",
        libelle: "Learn html",
        auteur: 60,
        edition: "noureddine",
        nombreExemplaires:4,
      }
  ]
  export const fetchLivreById=async(livreId)=>{
   
    
      return new Promise(function(resolve,reject){
        const result = livres.find(livre => livre.id===livreId)

          if(result === undefined)
            reject("pas de livre")
          else 
           resolve(result)


      })

  }
  export const findAllLivre=async()=>{
   
    
    return new Promise(function(resolve,reject){
      resolve(livres)


    })
}
export const edit=async(livreId,libelle,auteur,nombreExemplaires)=>{
   
    
    return new Promise(function(resolve,reject){
        const result = livres.find(livre => livre.id===livreId)
        result.edition=livreId;
        result.libelle=libelle;
        result.auteur=auteur;
        result.nombreExemplaires=nombreExemplaires;


    })
}