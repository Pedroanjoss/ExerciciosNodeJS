const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodesequelize', 'root', '',{
host: 'localhost',
password: '07012005',
dialect: 'mysql'
})



module.exports = sequelize