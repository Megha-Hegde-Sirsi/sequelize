module.exports = (app) => {
    const user = require('../controllers/user.controller')

    user.post('/newUser', user.create);
}