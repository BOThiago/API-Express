const express = require('express')
const fs = require("fs");
const app = express ();
const router = require("./routes/login_criar");

app.use(express.json());
app.use(router);

const usuarios = [
    { nome: "Jancer", idade: 19},
    { nome: "Aline", idade: 24},
    { nome: "Maria", idade: 25},
    { nome: "Eduardo", idade: 22},
];

app.get("/", (req, res) => {
    res.status(200).send("OK");
});

app.listen(3000, () => {
    console.log("Servidor está sendo executado na porta 3000")
});