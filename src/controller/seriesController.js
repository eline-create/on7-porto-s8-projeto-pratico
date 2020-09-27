// Passo a passo
//1. Importar JSON da pasta model;
//2. Criar o método para buscar todos os parâmetros; 
//3. Exportar o método;

// ./ retorna arquivos ou pastas do mesmo diretório
// ../ retorna arquivos ou pastas de um diretório acima
// ../../ outro nível. Nesse caso, vai para a raiz

const series = require('../model/series.json');
//const generos = require('../model/generos.json')


const getAll = (req, res) => {
    console.log(req.url);
    // verifica se a resposta tem status 200(sucesso) e envia o JSON
    res.status(200).send(series);
};




//Passo a passo
//1. Criar método
//2. Retornar item daquele ID

const getById = (req, res) => {
    const id = req.params.id

    const serieFiltrada = series.find((serie) => serie.id == id)

    res.status(200).send(serieFiltrada); 
};



//Passo a Passo
//1. Criar método getAll
//2. Filtrar lista de séries por título


// Filtrando por generos. Usando um JSON separado

const getAllGenre = (req, res) => {

    res.status(200).send(generos);
};

// Filtrando por generos. Usando o mesmo JSON 

const getByGenre = (req, res) => {
    const genero = req.params.genero;
    const generoFiltrado = series.filter((serie) => serie.genre == genero);

    res.status(200).send(generoFiltrado);

}

// Usando o .map

const getGenre = (req, res) => {
    const genero = series.map((serie) => serie.genre);
    res.status(200).send(genero)
}

module.exports = { 
    getAll, getById, getByGenre, getAllGenre, getGenre

};