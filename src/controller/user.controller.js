const service = require('../service/user.service')

const create = async (req, res) => {
    const user = req.body
    await service.create(user)
        .then(() => {
            res.status(200).send('User create successfully')
        })
        .catch(err => {
            console.error(err)
            res.status(400).send('Failed to create user')
        })
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