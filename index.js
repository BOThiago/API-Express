const express = require('express')
const fs = require("fs");
const app = express ()

const dadosLocais = JSON.parse(fs.readFileSync("dados.json"));

app.use(express.json())

const usuarios = [
    { nome: "Jancer", idade: 19},
    { nome: "Aline", idade: 24},
    { nome: "Maria", idade: 25},
    { nome: "Eduardo", idade: 22},
]

app.get("/", (req, res) => {
    res.status(200).send("OK");
} )

app.post("/login", (req, res) => {
    res.status(200).send("Ok Login")
})

app.post("/criar", (req, res) => {
    res.status(200).send("Ok Criar")
})

app.post("/usuarios", (req, res) => {
    const {nome, email, saldo} = req.body
    const dadosProcessados = {nome, email, saldo};
    dadosLocais.push(dadosProcessados);
    const dadosConvertidos = JSON.stringify(dadosLocais, null, 2);
    fs.writeFile("dados.json", dadosConvertidos, () => {
        res.status(200).send("OK");
    })
    res.status(200).send("Ok")
})

app.listen(3000, () => {
    console.log("Servidor está sendo executado na porta 3000")
})