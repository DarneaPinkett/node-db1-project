const express = require('express');
const db = require('./data/dbConfig');
const router = express.Router();

router.post('/', (req, res) => {
    db('accounts')
    .insert(req.body, 'id')
    .then(ids => {
        res.status(200).json(ids);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({Error: "Could not add account"});
    })
})

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const changes = req.body;
    db('accounts')
    .where({id})
    .update(changes)
    .then(count => {
        res.status(200).json(count);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({Error: "Could not update account"});
    })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    db('accounts')
    .where({id})
    .delete()
    .then(count => {
        res.status(200).json(count);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({error: "Could not delete account"});
    })
})