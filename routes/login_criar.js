const express = require("express");
const bcrypt = require("bcrypt");
const fs = require("fs");
const router = express.Router();

const dadosLocais = JSON.parse(fs.readFileSync("dados.json"));

router.post("/login", (req, res) => {
    const {nome} = req.body;
    res.status(200).send("Ok Login");
});

router.post("/criar", (req, res) => {
    const {nome, email, senha} = req.body;
    if (!email || !senha) {
        res.status(422).send("Você deve definir email e senha");
    } else if (dadosLocais.find(
        (usuario) => usuario.nome === nome || usuario.email === email
        )
    ) {
      res.status(401).send("Nome ou email de usuário já está em uso");
    } else {
        var dadosUsuario = {
            nome: nome,
            email: email,
            dados: {},
        };
        const salt = bcrypt.genSaltSync();
        dadosUsuario.hash = bcrypt.hashSync(senha, salt);
        dadosLocais.push(dadosUsuario);
        const dadosConvertidos = JSON.stringify(dadosLocais, null, 2);
        fs.writeFileSync("dados.json", dadosConvertidos);
        res.status(200).send({
            email: email,
            nome: nome,
        });
    }
})

module.exports = router;