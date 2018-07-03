const express = require('express')
const User = require('../models/user.model')
const sequelize = require('../config/config')

let router = express.Router();

router.create = (req, res) => {
    sequelize.query('INSERT INTO USER (firstName, lastName) values ("Megha", "Hegde")').then((user) => {
        if (user) {
            console.log(user)
            res.send(user)
        }
    }).catch((err) => {
        console.log("Error", err)
        res.status(400).send(err)
    })
}

module.exports = router;