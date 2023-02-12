const jwt = require("jsonwebtoken");
const fs = require("fs");

module.exports = (req, res, next) => {
    const {authorization} = req.headers
    if (!authorization) {
        res.status(401).send("O usuário precisa estar logado!");
    };
    const token = authorization.replace("Bearer ", "");
    jwt.verify(token, "KEY_SECRETA", (err, payload) => {
        if (err) {
            res.status(401).send("O usuário precisa estar logado!");
        }
        const {id} = payload;

        const user = dadosLocais.find((user) => user.id === id);

        if (!user){
            res.status(401).send("O usuário precisa estar logado!");
        }
        req.user = user;
        next();
    });
};