const service = require('../service/user.service')

const create = (req, res) => {
    const user = req.body
    service.create(user)
    res.status(200).send('User create successfully')
}

const isValidUser = (req, res, next) => {
    const user = req.body
    if (!user.name || user.name.trim() === '')
        res.status(400).send('Required field "name" is missing')
    else if (!user.email || user.email.trim() === '')
        res.status(400).send('Required field "email" is missing')
    else if (!user.password || user.password.trim() === '')
        res.status(400).send('Required field "password" is missing')
    else
        next()
}

module.exports = {
    create,
    isValidUser
}