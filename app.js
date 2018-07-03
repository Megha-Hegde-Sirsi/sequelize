

// User.sync({force: true}).then(() => {
//     // Table created
//     return User.create({
//       firstName: 'John',
//       lastName: 'Hancock'
//     });
//   });

//   User.findAll().then(users => {
//     console.log(users)
//   })
// async function findData(){
//     user = await User.findOne()
//     console.log(user.get('firstName'));
// }
// findData();

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

const express = require('express');
const body_parser = require('body-parser')

const routes = require('./routes/route')
const userController = require('./controllers/user.controller')
const app = express();
app.use(body_parser.urlencoded({ extended: true }))
app.use(body_parser.json())

app.get('/', (req, res)=>{
    console.log("working")
    res.send("Working")
})

app.listen(8080, (err, res)=>{
    if(!err){
        console.log("app is listening at 8080")
    }
})