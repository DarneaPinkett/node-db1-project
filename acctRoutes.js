const express = require('express');
const db = require('./data/dbConfig');
const router = express.Router();

router.get('/', (req, res) => {
    db.select('*')
    .from('accounts')
    .then(accounts => {
        res.status(200).json(accounts);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({error: "Could not get the all accounts"});
    })
})

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

module.exports = router;