const express = require('express');
const router = express.Router();

//chemin racine : /api/films

let FILMS = [
    {
        id: "1",
        auteur: "Matthieu Kassovitz",
        annee: 1995,
        titre: "La Haine",
        imageUrl: "https://www.quai10.be/wp-content/uploads/2019/08/lahaine.jpg"
        
    },
    {
        id : "2",
        auteur: "David Fincher",
        annee: 1999,
        titre: "Fight Club",
        imageUrl: "https://fr.web.img3.acsta.net/pictures/19/04/08/14/11/0688770.jpg"
    },
]

router.get('/', (req, res, next) => {
    console.log('Liste des films!');
    res.json({FILMS})
})



module.exports = router;