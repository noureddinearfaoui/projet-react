const livres = [
  {
    id: "1",
    libelle: "Learn Html",
    auteur: 60,
    edition: "noureddine",
    nombreExemplaires: 2,
    image: require("../components/images/i3.jpg"),
  },

  {
    id: "2",
    libelle: "Learn React",
    auteur: 60,
    edition: "noureddine",
    nombreExemplaires: 2,
    image: require("../components/images/i1.jpg"),
  },
  {
    id: "3",
    libelle: "learn Node",
    auteur: 60,
    edition: "noureddine",
    nombreExemplaires: 2,
    image: require("../components/images/i2.jpg"),
  },
  {
    id: "4",
    libelle: "learn Express",
    auteur: 60,
    edition: "aaa",
    nombreExemplaires: 2,
    image: require("../components/images/l1.jpg"),
  },
  {
    id: "5",
    libelle: "learn Mongo",
    auteur: 60,
    edition: "aaa",
    nombreExemplaires: 2,
    image: require("../components/images/l2.jpg"),
  },
];
export const fetchLivreById = async (livreId) => {
  return new Promise(function (resolve, reject) {
    const result = livres.find((livre) => livre.id === livreId);

    if (result === undefined) reject("pas de livre");
    else resolve(result);
  });
};
export const findAllLivre = () => {
  return livres;
};
export const edit = async (livreId, libelle, auteur, nombreExemplaires) => {
  return new Promise(function (resolve, reject) {
    const result = livres.find((livre) => livre.id === livreId);
    result.edition = livreId;
    result.libelle = libelle;
    result.auteur = auteur;
    result.nombreExemplaires = nombreExemplaires;
  });
};
export const add = async (libelle, auteur, edition, nombreExemplaires) => {
  return new Promise(function (resolve, reject) {
    const newLivre = {
      id: livres.length + 1,
      libelle: libelle,
      auteur: auteur,
      edition: edition,
      nombreExemplaires: nombreExemplaires,
    };
    livres.push(newLivre);
    resolve(newLivre);
  });
};
