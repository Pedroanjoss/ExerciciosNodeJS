const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodemvc', 'root', '07012005',{
    host: 'localhost',
    dialect:'mysql',
    password:'07012005'
})

try {
    
    sequelize.authenticate()
    console.log('Conectamos ao MySQL')

} catch (error) {
    console.log(`Nao foi possivel conectar: ${error}`)
}

exports.default = sequelize