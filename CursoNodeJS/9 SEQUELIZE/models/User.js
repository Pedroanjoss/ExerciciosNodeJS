const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const User = db.define('User', {
    name: {
        type:DataTypes.STRING,
        allowNull: false
    },
    ocupation: {
        type:DataTypes.STRING,
        require: true//require é a forma mais correta de definir que o valor nao pode null
    },
    newsletter: {
        type:DataTypes.BOOLEAN,
        },
})

module.exports = User