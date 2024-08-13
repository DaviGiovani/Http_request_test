const express = require('express');
const axios = require('axios');
const app = express();
const port = 8081

app.get('/', (req, res) => {
    res.send(`COMI O CU DO MURINGAS`);
});

app.get('/RotaDoMurilin', (req, res) => {
    res.send(`ROTA DO MURILO CUZAO`);
});

app.get(`/consulta-cep/:cep`, async (req, res) => {
    const cep = req.params.cep;
    try{
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        res.json(response.data);
    }
    catch(error){
        console.error(`erro ao fazer a requisicao`, error);
        res.status(500).send(`erro ao consultar cep`);
    }
});

app.listen(port, () => {
    console.log(`servidor rodando em http://localhost:8081`);
});