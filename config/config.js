const Sequelize = require('sequelize');
const sequelize = new Sequelize('demo1', 'root', 'Megha3004', {
    host: 'localhost',
    port: 8080,
    dialect: 'mysql',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 100000
    },

});

sequelize
.authenticate()
.then(() => {
    console.log('Connection has been established successfully.');
})
.catch(err => {
    console.error('Unable to connect to the database:', err);
});

module.exports = sequelize;