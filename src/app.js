// Passo a passo

//1. Importar o express
//2. Declarar a variável app atraibuindo o método do express
//3. Importar rota
//4. Usar a rota criada
//5. Exportar o app


const express = require("express");
const app = express();

const series = require("./routes/seriesRoute");

//Usar a rota criada

app.use("/", series); //endpoint

//Fazer um get para retornar erro

app.get("*", (req, res) => {
    res.status(400).sendFile("./views/404.html", { root: __dirname})
});

module.exports = app;


