const { v4: uuidv4 } = require("uuid");

let MUSIQUES = [
    {
      id: "1",
      auteur: "Daft Punk",
      annee: 2013,
      titre: "Get lucky",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/61cjEm5meDL._SL1500_.jpg",
    },
    {
      id: "2",
      auteur: "David Guetta ft Sia",
      annee: 2011,
      titre: "Titanium",
      imageUrl:
        "https://images-eu.ssl-images-amazon.com/images/I/51cQ8TfyqJL._SX342_QL70_ML2_.jpg",
    },
    {
      id: "3",
      auteur: "Shaka Ponk",
      annee: 2019,
      titre: "Smells like teen spirits",
      imageUrl: "https://i.ytimg.com/vi/MEecsZXQjCs/maxresdefault.jpg",
    },
    {
      id: "4",
      auteur: "Imagine Dragon",
      annee: 2018,
      titre: "Natural",
      imageUrl:
        "https://i.pinimg.com/originals/9f/1e/58/9f1e58187a71ef80a06be9da1261ccfd.jpg",
    },
    {
      id: "5",
      auteur: "Jacques Brel",
      annee: 1964,
      titre: "Le Port d'Amsterdam",
      imageUrl:
        "https://cdn-s-www.vosgesmatin.fr/images/B4FE2039-4FD7-402F-B6ED-E1B1258F6430/NW_raw/jacques-brel-a-annonce-a-la-fin-de-son-concert-a-vittel-en-1966-son-souhait-de-quittait-la-scene-photo-d-archives-vm-dr-1627471115.jpg",
    },
    {
      id: "6",
      auteur: "Gloria Gaynor",
      annee: 1978,
      titre: "I Will Survive",
      imageUrl:
        "https://direct.rhapsody.com/imageserver/images/alb.484953128/600x600.jpg",
    },
  ];

  
  const getMusiques = (req, res, next) => {
      res.json({ MUSIQUES });
  }
 const getMusiqueById = (req, res, next) => {
        const mId = req.params.musiqueId;
        const musique = MUSIQUES.find((m) => {
          return m.id === mId;
        });
        if (!musique) {
          return res
            .status(404)
            .json({ message: "Musique non trouvée pour cet identifiant" });
        }
        res.json({ musique });
      };

      const createMusique = (req, res, next) => {
        const { auteur, annee, titre, imageUrl } = req.body; //* déclaration de variable
        console.log(req.body);
        const createdMusique = {
          id: uuidv4(),
          auteur,
          annee,
          titre,
          imageUrl,
        };
        console.log(createdMusique);
        MUSIQUES.push(createdMusique);
        res.status(201).json({ musique: createdMusique }); //* pour injection de données
      };

      const updateMusique = (req, res, next) => {
        const { auteur, annee, titre, imageUrl } = req.body; // déclaration de variable
        const musiqueId = req.params.musiqueId; // récupération de l'id
      
        const updatedMusique = {...MUSIQUES.find((m) => { //objet MUSIQUES, récupération des valeurs dans la base de données(numéro de l'index)
            return (m.id === musiqueId);
          }) };
      
          const musiqueIndex = MUSIQUES.findIndex(m => m.id === musiqueId); // on récupère l'index pour mettre a jour plus bas 
          updatedMusique.auteur = auteur;
          updatedMusique.annee = annee;
          updatedMusique.titre = titre;
          updatedMusique.imageUrl = imageUrl;
      
          MUSIQUES[musiqueIndex] = updatedMusique;
      
          res.status(200).json({musique: updatedMusique});
      };
      
const deleteMusique = (req, res, next) => {
const { auteur, annee, titre, imageUrl } = req.body
}

  exports.getMusiques = getMusiques; 
  exports.getMusiqueById = getMusiqueById;
  exports.createMusique = createMusique;
  exports.updateMusique = updateMusique;
  exports.deleteMusique = deleteMusique;