const express = require("express");

const db = require("../data/dbConfig.js");

const server = express();

const AcctRouter = require('../acctRoutes');

server.use(express.json());

server.use('/acctRoutes.js', AcctRouter);

server.get('/', (req, res) => {
    res.send('<h1>Helpers with knex</h1>')
});

module.exports = server;
