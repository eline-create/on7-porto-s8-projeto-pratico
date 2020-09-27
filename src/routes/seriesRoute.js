// Passo a passo

//1. Importar o Express
//2. Importar o Router
//3. Importar o controller
//4. Criar a rota que traz os itens
//5. Exportar o Router

const express = require('express');
const route = express.Router();
const controller = require('../controller/seriesController');



route.get("/", controller.getAll);
//route.get("/series", controller.getAll); // Dessa forma é preciso, colocar /serires no browser para aparecer o JSON
//route.get("/:id", controller.getById)
route.get("/serie/:id", controller.getById)

// Filtrando por generos. Usando um JSON separado

route.get("/generos", controller.getAllGenre);

//Filtrando por generos. Usando o mesmo JSON

route.get("/series/:genero", controller.getByGenre);

route.get("/generos", controller.getGenre);

module.exports = route;
