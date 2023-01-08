const express = require('express')

const app = express ()

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

app.get("/usuarios/:idade", (req, res) => {
    const {idade} = req.params;
    const usuario = usuarios.find((usuarios) => usuarios.idade == idade);
    if (usuario) {
        res.status(200).send(usuario);
    } else {
        res.status(404).send("Usuario não encontrado");
    }
})

app.listen(3000, () => {
    console.log("Servidor está sendo executado na porta 3000")

})